import React from 'react';
import { useQuery } from 'react-query';
import { fetchAiFqsDeviceStatus, fetchAisttStoreList } from '@ApiFarm/ai-fqs';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import PageLayout from '@ComponentFarm/layout/PageLayout';
import DeviceStoreList from '@ComponentFarm/template/aistt/DeviceStoreList';
import {
  DevicePageStyle,
  SectionStyle,
} from '@ComponentFarm/template/aistt/style';
import FqsCard from '@ComponentFarm/template/common/FqsCard';
import TitleBox from '@ComponentFarm/template/common/TitleBox';
// import { Badge } from '@ComponentFarm/token';
import useQueryParams from '@HookFarm/useQueryParams';

const DeviceListPage = () => {
  const [params, setParams] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const deviceStatusQuery = useQuery(['fqs-device-status'], () =>
    fetchAiFqsDeviceStatus()
  );

  const { data, isLoading } = useQuery(
    ['aistt-store-list', params],
    () => fetchAisttStoreList(params),
    {
      keepPreviousData: true,
    }
  );

  return (
    <PageLayout
      title="기기 관리"
      tabData={[{ title: '매장 목록', url: '/aistt-device' }]}
    >
      <DevicePageStyle className="bg-gray">
        <TitleBox
          title="기기 상태"
          desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
          hideUnderline
        />
        <div className="status">
          <FqsCard
            label="매장 구분"
            title="AI-FQS 도입 매장"
            value={`${deviceStatusQuery.data?.store_aifqs_enabled ?? 0}`}
            unit={`/${deviceStatusQuery.data?.store_count ?? 0}`}
          />
          <FqsCard
            label="기기 상태"
            title="기기 ON"
            value={`${deviceStatusQuery.data?.devices_enabled ?? 0}`}
            unit={`/${deviceStatusQuery.data?.devices_total ?? 0}`}
          />
          <FqsCard
            label="프로그램 상태"
            title="프로그램 ON"
            value={`${deviceStatusQuery.data?.program_enabled ?? 0}`}
            unit={`/${deviceStatusQuery.data?.program_total ?? 0}`}
          />
        </div>
        <SectionStyle>
          <h3 className="title">결과</h3>
          <span className="count">
            총 <span className="number">{data?.total_count ?? 0}</span> 건
          </span>
        </SectionStyle>
        <DeviceStoreList
          loading={isLoading}
          list={data?.list ?? []}
          updateParams={setParams}
        />
        <Pagination
          pageInfo={[Number(params.current_num), Number(params.per_num)]}
          totalCount={data?.total_count ?? 0}
          handlePageChange={current_num => setParams({ current_num })}
        />
      </DevicePageStyle>
    </PageLayout>
  );
};

export default DeviceListPage;
