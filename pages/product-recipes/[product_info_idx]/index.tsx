import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchProductRecipeList } from '@ApiFarm/product-recipe';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import Toggle from '@ComponentFarm/atom/Toggle/Toggle';
import { InnerTable } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { RecipeListWrap } from '@ComponentFarm/template/recipe/style';
import { useGoMove } from '@HookFarm/useGoMove';

const RecipeListPage = () => {
  const router = useRouter();
  const { onBack } = useGoMove();

  const [pathname] = router.asPath.split('?');

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
      {(data?.list ?? []).length === 0 ? (
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
              <col width={120} />
              <col />
              <col width={400} />
            </colgroup>
            <thead>
              <tr>
                <th>설정</th>
                <th>레시피명</th>
                <th>레시피 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Toggle />
                </td>
                <td>
                  <Link className="recipe-title" href={`${pathname}/1`}>
                    오리지널 페퍼로니 피자 ver3.0
                  </Link>
                </td>
                <td>
                  <div className="recipe-item-action">
                    <span className="use-status">
                      <Badge color="green" dot fill="transparent">
                        사용
                      </Badge>
                    </span>
                    <div>
                      <Button variant="gostPrimary">수정</Button>
                      <Button variant="gostPrimary">삭제</Button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </InnerTable>
        </div>
      )}
    </RecipeListWrap>
  );
};

export default RecipeListPage;
