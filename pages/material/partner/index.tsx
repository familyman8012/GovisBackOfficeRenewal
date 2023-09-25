import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetchPartnerList } from '@ApiFarm/ material';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { materialListTabData } from '@ComponentFarm/template/product/material/const';
import ListFilter from '@ComponentFarm/template/product/material/partner/ListFilter';
import ListTable from '@ComponentFarm/template/product/material/partner/ListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const PartnerListPage = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const category = router.asPath.match(/category=([^&]*)/);
  const [activeTabIndex, setActiveTabIndex] = useState(
    category && category[1] === 'pct_manufacturer' ? 1 : 2
  );
  const [params, updateParams, resetParams] = useQueryParams({
    category: category ? category[1] : undefined,
    current_num: 1,
    per_num: 10,
  });

  /// /pct_manufacturer : 제조사
  // pct_shipping_company : 물류사
  const partnerCategory = useMemo(
    () => environment?.list?.find(el => el.code === router.query.category),
    [environment.list, router.query.category]
  );

  const partnerStatus = useMemo(
    () =>
      environment?.list?.find(
        el => el.code === router.query.partner_company_status
      ),
    [environment.list, router.query.partner_company_status]
  );

  const { data } = useQuery(
    ['partnerList', router.asPath],
    () =>
      fetchPartnerList(String(partnerCategory?.environment_variable_idx), {
        ...params,
        evi_partner_company_status:
          partnerStatus?.environment_variable_idx ?? '',
      }),
    { enabled: !!partnerCategory }
  );

  useEffect(() => {
    if (category === undefined) {
      toast.error('잘못된 경로입니다.');
      router.back();
    }
  }, [category]);

  const handlePageChange = (pageNumber: number) => {
    updateParams({ current_num: pageNumber });
  };

  const handleAddClick = () => {
    // 현재 쿼리 파라미터를 /add 경로에 추가
    router.push({
      pathname: '/material/partner/add',
      query: router.query,
    });
  };

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(materialListTabData[index].url);
  };

  return (
    <>
      {partnerCategory && (
        <>
          <TitleArea
            title="원재료 관리"
            BtnBox={
              <>
                <ExportButton
                  params={params}
                  endPoint={`/partner_company/list/${String(
                    partnerCategory?.environment_variable_idx
                  )}`}
                  title={`${partnerCategory?.value} 목록`}
                />
                <Button LeadingIcon={<Plus />} onClick={handleAddClick}>
                  {partnerCategory?.value} 등록
                </Button>
              </>
            }
          />
          <Tabs
            id="tab_material_partner"
            tabs={materialListTabData}
            activeTabIndex={activeTabIndex}
            onTabChange={index => hanldeTabMove(index)}
          />
          <ListFilter
            category={String(partnerCategory?.value)}
            params={params}
            updateParams={updateParams}
            resetParams={resetParams}
          />
          <ListTable
            data={data}
            title={partnerCategory?.value}
            updateParams={updateParams}
          />
          <Pagination
            pageInfo={[Number(params.current_num), Number(params.per_num)]}
            totalCount={Number(data?.total_count)}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default PartnerListPage;

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'partner_company_type,partner_company_status',
  });

  return {
    props: {
      environment,
    },
    revalidate: 60,
  };
};
