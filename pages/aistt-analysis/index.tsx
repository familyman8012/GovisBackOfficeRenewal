import React from 'react';
import { useQuery } from 'react-query';
import { fetchInspectionList } from '@ApiFarm/aistt';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Select } from '@ComponentFarm/atom/Select/Select';
import PageLayout from '@ComponentFarm/layout/PageLayout';
import AisttAnalysisFilter from '@ComponentFarm/template/aistt/AnalysisFilter';
import { inspectionOptions } from '@ComponentFarm/template/aistt/const';
import {
  AnalysisPageStyle,
  SectionStyle,
} from '@ComponentFarm/template/aistt/style';
import AnalysisVideoList from '@ComponentFarm/template/aistt/VideoList';
import useQueryParams from '@HookFarm/useQueryParams';

const AnalysisListPage = () => {
  const [params, updateParams, resetParams] = useQueryParams({
    inspection_status: inspectionOptions[0].value,
    current_num: 1,
    per_num: 20,
  });

  const { data, isFetching } = useQuery(
    ['fqs-analysis-list', params],
    () => fetchInspectionList(params),
    {
      keepPreviousData: true,
    }
  );

  return (
    <PageLayout
      title="제품 분석"
      tabData={[{ title: '제조 제품 목록', url: '/aistt-analysis' }]}
    >
      <AnalysisPageStyle>
        <AisttAnalysisFilter
          params={params}
          updateParams={updateParams}
          resetParams={resetParams}
        />
        <SectionStyle>
          <span className="count">
            총 <span className="number">{data?.total_count}</span> 건
          </span>
          <Select
            selectedOption={params.inspection_status ?? ''}
            options={React.useMemo(
              () => [{ label: '전체', value: '' }, ...inspectionOptions],
              []
            )}
            setSelectedOption={option =>
              updateParams({ inspection_status: option.value, current_num: 1 })
            }
          />
        </SectionStyle>
        <AnalysisVideoList loading={isFetching} list={data?.list ?? []} />
        <Pagination
          pageInfo={[Number(params?.current_num), Number(params?.per_num)]}
          totalCount={data?.total_count ?? 0}
          handlePageChange={current_num => updateParams({ current_num })}
        />
      </AnalysisPageStyle>
    </PageLayout>
  );
};

export default AnalysisListPage;
