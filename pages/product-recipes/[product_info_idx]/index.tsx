import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchEnvironment } from '@ApiFarm/environment';
import {
  fetchProductRecipeList,
  removeRecipe,
  updateRecipeStatus,
} from '@ApiFarm/product-recipe';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { IRecipeListItem } from '@InterfaceFarm/product-recipe';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { Edit } from '@ComponentFarm/atom/icons';
import Bucket from '@ComponentFarm/atom/icons/Bucket';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import Toggle from '@ComponentFarm/atom/Toggle/Toggle';
import { InnerTable } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { RecipeListWrap } from '@ComponentFarm/template/recipe/style';
import useFormOptionsWithEnvs from '@HookFarm/useFormOptionsWithEnvs';
import { useGoMove } from '@HookFarm/useGoMove';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

const RecipeListPage: NextPage<{ envs: IEnvironmentResItem[] }> = ({
  envs,
}) => {
  const qc = useQueryClient();
  const router = useRouter();
  const { onBack } = useGoMove();
  const [pathname] = router.asPath.split('?');

  const { recipe_status } = useFormOptionsWithEnvs(['recipe_status'], envs);

  const product_info_idx = useMemo(
    () => parseInt(router.query?.product_info_idx as string, 10),
    [router]
  );

  const { data } = useQuery(
    ['product-recipe-list', product_info_idx],
    () => fetchProductRecipeList(product_info_idx),
    {
      enabled: !!product_info_idx,
    }
  );

  const isUsed = React.useCallback(
    (item: IRecipeListItem) =>
      recipe_status.find(v => v.label === '사용')?.value ===
      `${item.evi_recipe_status}`,
    [recipe_status]
  );

  const getStatusUpdateValue = React.useCallback(
    (item: IRecipeListItem, used: boolean) => {
      const val = parseInt(
        recipe_status.find(v => v.label === (used ? '미사용' : '사용'))
          ?.value ?? '',
        10
      );
      return Number.isNaN(val) ? -1 : val;
    },

    [recipe_status]
  );

  const updateUsedMutate = useMutation(updateRecipeStatus, {
    onSuccess: () => {
      toast.info('레시피가 사용상태가 변경되었습니다.');
      qc.invalidateQueries(['product-recipe-list', product_info_idx]);
    },
  });

  const removeMutate = useMutation(removeRecipe, {
    onSuccess: () => {
      toast.info('레시피가 삭제되었습니다.');
      qc.invalidateQueries(['product-recipe-list', product_info_idx]);
    },
  });

  const actionLoading = updateUsedMutate.isLoading || removeMutate.isLoading;
  const listData = data?.list || [];

  return (
    <RecipeListWrap>
      <TitleArea
        title="레시피 상세 정보"
        BtnBox={
          <Button variant="gostSecondary" onClick={() => onBack()}>
            이전
          </Button>
        }
      />
      <Tabs
        id="recipe-detail-tab"
        tabs={[
          {
            title: '제품 상세',
          },
          {
            title: '레시피 정보',
          },
          {
            title: '변경 내역',
          },
        ]}
        activeTabIndex={1}
        onTabChange={index => {}}
      />
      <h3>
        레시피 목록
        <Button onClick={() => router.push(`${pathname}/add`)}>
          레시피 등록
        </Button>
      </h3>
      {listData.length === 0 ? (
        <Empty>
          <span className="empty-wrap">
            등록된 레시피가 없습니다.
            <Button onClick={() => router.push(`${pathname}/add`)}>
              레시피 등록하기
            </Button>
          </span>
        </Empty>
      ) : (
        <div className="recipe-list">
          <InnerTable>
            <colgroup>
              <col width={getTableWidthPercentage(120)} />
              <col width={getTableWidthPercentage(1010)} />
              <col width={getTableWidthPercentage(266)} />
              <col width={getTableWidthPercentage(140)} />
            </colgroup>
            <thead>
              <tr>
                <th>설정</th>
                <th>레시피명</th>
                <th>레시피 상태</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {listData.map(item => {
                const used = isUsed(item);

                return (
                  <tr key={item.recipe_info_idx}>
                    <td>
                      <Toggle
                        checked={used}
                        disabled={actionLoading}
                        onChange={() =>
                          updateUsedMutate.mutate({
                            product_info_idx,
                            recipe_info_idx: item.recipe_info_idx,
                            evi_recipe_status: getStatusUpdateValue(item, used),
                          })
                        }
                      />
                    </td>
                    <td>
                      <Link
                        className="recipe-title"
                        href={`${pathname}/${item.recipe_info_idx}`}
                      >
                        {item.recipe_name}
                      </Link>
                    </td>
                    <td>
                      <div className="recipe-item-action">
                        <span className="use-status">
                          <Badge
                            color={used ? 'green' : 'red'}
                            dot
                            fill="transparent"
                          >
                            {used ? '사용' : '미사용'}
                          </Badge>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="recipe-item-action">
                        <button
                          type="button"
                          className="icon-btn"
                          onClick={() =>
                            router.push(`${pathname}/${item.recipe_info_idx}`)
                          }
                          disabled={actionLoading}
                        >
                          <Edit />
                        </button>
                        <button
                          type="button"
                          className="icon-btn"
                          disabled={actionLoading}
                          onClick={() =>
                            removeMutate.mutate({
                              product_info_idx,
                              recipe_info_idx: item.recipe_info_idx,
                            })
                          }
                        >
                          <Bucket />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </InnerTable>
        </div>
      )}
    </RecipeListWrap>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          product_info_idx: ':product_info_idx',
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps = async () => {
  const props = await fetchEnvironment({
    name: ['recipe_status'].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
    revalidate: 10,
  };
};

export default RecipeListPage;
