import React from 'react';
import { useQuery } from 'react-query';
import { fetchAiFqsDeviceStatus, fetchAisttStoreList } from '@ApiFarm/aistt';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import AisttDeviceFilter from '@ComponentFarm/template/aistt/device/DeviceFilter';
import DeviceStoreList from '@ComponentFarm/template/aistt/device/DeviceStoreList';
import { DevicePageStyle } from '@ComponentFarm/template/aistt/device/style';
import { SectionStyle } from '@ComponentFarm/template/aistt/style';
import FqsCard from '@ComponentFarm/template/common/FqsCard';
import TitleBox from '@ComponentFarm/template/common/SubTitleBox';
import useQueryParams from '@HookFarm/useQueryParams';

const DeviceListPage = () => {
  const [params, updateParams, resetParams] = useQueryParams<any>({
    current_num: 1,
    per_num: 10,
    is_use_stt: '1',
    program_status: '',
  });

  const deviceStatusQuery = useQuery(['fqs-device-status'], () =>
    fetchAiFqsDeviceStatus()
  );

  const { data, isFetching } = useQuery(
    ['aistt-store-list', params],
    () =>
      fetchAisttStoreList({
        ...params,
        sort_target: params.sort_target ? params.sort_target : 'is_use_stt',
        sort_type: params.sort_target ? params.sort_type : 'desc',
      }),
    {
      keepPreviousData: true,
    }
  );

  return (
    <>
      <TitleArea title="매장 모니터링" BtnBox={<></>} />
      <Tabs
        id="aistt-device-list"
        tabs={[{ title: '매장 목록' }]}
        activeTabIndex={0}
        onTabChange={() => {}}
      />
      <DevicePageStyle className="bg-gray">
        <TitleBox
          title="Smart Topping Table 상태"
          desc="Smart Topping Table이 적용된 매장을 확인할 수 있습니다."
          hideUnderline
        />
        <AisttDeviceFilter
          params={params}
          updateParams={updateParams}
          resetParams={resetParams}
        />
        <div className="status">
          <FqsCard
            label="매장 구분"
            title="Smart Topping Table 도입 매장"
            value={`${deviceStatusQuery.data?.store_aifqs_enabled ?? 0}`}
            unit={`/${deviceStatusQuery.data?.store_count ?? 0}`}
          />
          <FqsCard
            label="프로그램 상태"
            title="프로그램 ON"
            value={`${deviceStatusQuery.data?.program_enabled ?? 0}`}
            unit={`/${deviceStatusQuery.data?.store_aifqs_enabled ?? 0}`}
          />
        </div>
        <SectionStyle>
          <h3 className="title">결과</h3>
          <span className="count">
            총 <span className="number">{data?.total_count ?? 0}</span> 건
          </span>
        </SectionStyle>
        <DeviceStoreList
          loading={isFetching}
          list={data?.list ?? []}
          updateParams={updateParams}
        />
        <Pagination
          pageInfo={[Number(params.current_num), Number(params.per_num)]}
          totalCount={data?.total_count ?? 0}
          handlePageChange={current_num => updateParams({ current_num })}
        />
      </DevicePageStyle>
    </>
  );
};

export default DeviceListPage;
