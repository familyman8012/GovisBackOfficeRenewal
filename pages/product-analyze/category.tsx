/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  fetchCategoryAnalyze,
  fetchCategoryDetailAnalyze,
} from '@ApiFarm/product-analyze';
import {
  ICategoryDetailRes,
  IProductAnalyzeReq,
} from '@InterfaceFarm/product-analyze';
import ExportButton from '@ComponentFarm/modules/ExportButton/ExportButton';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { BarCharts } from '@ComponentFarm/chart/BarCharts';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { AreaBox } from '@ComponentFarm/template/common/AreaBox';
import FilterTableForm from '@ComponentFarm/template/common/FilterTable/FilterTableForm';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import { CollapseList } from '@ComponentFarm/template/product-analyze/category/style';
import {
  initialDay,
  productAnalyzeTabData,
} from '@ComponentFarm/template/product-analyze/const';
import useTabWithDateQuery from '@ComponentFarm/template/product-analyze/useTabWithDateQuery';
import useQueryParams from '@HookFarm/useQueryParams';
import { options } from '../../component/template/product-analyze/all/const';

const CategoryAnalyze = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [params, updateParams, resetParams] = useQueryParams(initialDay);

  useEffect(() => {
    setSelectedOption(options.find(o => o.value === params.type) ?? options[0]);
  }, [params.type]);

  const { activeTabIndex, handleTabWithDateQuery } = useTabWithDateQuery({
    tabIdx: 2,
    params,
    productAnalyzeTabData,
  });

  const { data } = useQuery(['CategoryAnalyze', params], () =>
    fetchCategoryAnalyze(params as IProductAnalyzeReq)
  );

  interface CategoryState {
    details: ICategoryDetailRes | null;
    isOpen: boolean;
  }

  const [categoryStates, setCategoryStates] = useState<
    Record<number, CategoryState>
  >({});
  // 세부 정보 불러오기 함수

  useEffect(() => {
    setCategoryStates({});
  }, [params]);

  // 항목 클릭 핸들러
  const handleCategoryClick = async (itemKey: number) => {
    // 현재 항목의 상태
    const current = categoryStates[itemKey] || { details: null, isOpen: false };

    // 세부 정보가 아직 불러와지지 않았다면 불러오기
    if (!current.details) {
      const detailData = await fetchCategoryDetailAnalyze(
        itemKey,
        params as IProductAnalyzeReq
      );
      current.details = detailData;
    }

    // 상태 업데이트 (세부 정보와 열림 상태 토글)
    setCategoryStates({
      ...categoryStates,
      [itemKey]: {
        ...current,
        isOpen: !current.isOpen,
      },
    });
  };

  return (
    <>
      <TitleArea title="제품 분석 및 통계" />
      <Tabs
        id="category-analyze"
        tabs={productAnalyzeTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => handleTabWithDateQuery(index)}
      />
      <SubTitleBox
        title="카테고리별 현황"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
        hideUnderline
      />
      <FilterTableForm
        type="diff"
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <SubTitleBox
        title="조회 결과"
        hideUnderline
        descBottom={[
          {
            label: '기준일 제품 총 판매 수',
            value: `${data?.total.total_base_sales_count.toLocaleString()}`,
          },
          {
            label: '비교일 제품 총 판매 수',
            value: `${data?.total.total_comparison_sales_count.toLocaleString()}`,
          },
        ]}
      />
      <AreaBox title="카테고리별 제품판매 현황">
        <BarCharts
          type="diff"
          height="55.7rem"
          chartData={data?.list}
          barSize={6}
          tickCount={11}
          isLegend
          diffSet={[
            { name: '기준일', dataKey: 'base_sales_count', fill: '#5A6ACF' },
            {
              name: '비교일',
              dataKey: 'comparison_sales_count',
              fill: '#E6E8EC',
            },
          ]}
        />
      </AreaBox>
      <AreaBox
        title="판매 제품 수"
        className="noPadding"
        addFunc={
          <ExportButton
            params={params}
            endPoint="/analytics/product/sales/export/order_raw_data"
            title="판매 제품 수"
          />
        }
      >
        <CollapseList>
          <li className="wrap_total">
            <span>전체 {data?.list.length}개</span>
            <span>{data?.total.total_base_sales_count.toLocaleString()}개</span>
            <span>
              {data?.total.total_comparison_sales_count.toLocaleString()}개
            </span>
            <span>
              {data?.total.total_increase_decrease_number.toLocaleString()}개 (
              {data?.total.total_increase_decrease_rate}%)
            </span>
          </li>
          {data?.list.map((el, index) => (
            <li key={el.item_key} className="depth1">
              <div
                className="depth1_info"
                onClick={() => handleCategoryClick(el.item_key)}
              >
                <span>{el.item_label}</span>
                <span>{el.base_sales_count.toLocaleString()}개</span>
                <span>{el.comparison_sales_count.toLocaleString()}개</span>
                <span>
                  {el.increase_decrease_number.toLocaleString()}개 (
                  {el?.increase_decrease_rate}%)
                </span>
              </div>
              {categoryStates[el.item_key]?.isOpen && (
                <ul className="sub_depth">
                  <li>
                    <table className="detail_table">
                      <colgroup>
                        <col width="5%" />
                        <col width="20%" />
                        <col width="25%" />
                        <col width="25%" />
                        <col width="25%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className="hiddenZoneV">No.</span>
                          </th>
                          <th scope="col">제품명</th>
                          <th scope="col">기준일 판매</th>
                          <th scope="col">비교일 판매</th>
                          <th scope="col">증감율</th>
                        </tr>
                      </thead>
                      {categoryStates[el.item_key]?.details?.list.map(item => (
                        <tr key={item.product_info_idx}>
                          <td>
                            <span className="hiddenZoneV">
                              {item.product_info_idx}
                            </span>
                          </td>
                          <td>{item.product_name_ko}</td>
                          <td>{item.base_sales_count.toLocaleString()}개</td>
                          <td>
                            {item.comparison_sales_count.toLocaleString()}개
                          </td>
                          <td>
                            {item.increase_decrease_number.toLocaleString()}개 (
                            {item.increase_decrease_rate}%)
                          </td>
                        </tr>
                      ))}
                    </table>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </CollapseList>
      </AreaBox>
    </>
  );
};

export default CategoryAnalyze;
