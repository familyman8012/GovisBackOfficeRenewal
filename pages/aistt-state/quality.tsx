/* eslint-disable no-unused-vars */
import { useState } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import {
  fetchManufacturingQuality,
  fetchManufacturingTime,
} from '@ApiFarm/aistt';
import { IAisttStateReq } from '@InterfaceFarm/aistt';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { ManufacturingQualityList } from '@ComponentFarm/template/aistt/common/ManufacturingQuality';
import { aisttStateListTabData } from '@ComponentFarm/template/aistt/const';
import { ManufacturingTimeList } from '@ComponentFarm/template/aistt/state/all/ManufacturingTimeList';
import { PizzaStatusTable } from '@ComponentFarm/template/aistt/state/quality/PizzaStatusTable';
import { AddTab, AreaBox } from '@ComponentFarm/template/common/AreaBox';
import FilterTableForm from '@ComponentFarm/template/common/FilterTable/FilterTableForm';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import useQueryParams from '@HookFarm/useQueryParams';

const AisttQualityState = () => {
  const router = useRouter();
  const [statusSelect, setstatusSelect] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [params, updateParams, resetParams] = useQueryParams({
    search_start_dt: dayjs().format('YYYY-MM-DD'),
    search_end_dt: dayjs().format('YYYY-MM-DD'),
  });

  const { score_range, ...rest } = router.query;

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(aisttStateListTabData[index].url);
  };

  const { data: manufacturingQualityData } = useQuery(
    ['manufacturingQualityList', rest],
    () => fetchManufacturingQuality(params as IAisttStateReq)
  );

  const { data: manufacturingTimeData } = useQuery(
    ['manufacturingTimeList', params],
    () => fetchManufacturingTime(params as IAisttStateReq)
  );

  return (
    <>
      <TitleArea
        title="현황"
        BtnBox={
          <Button variant="gostSecondary" onClick={() => router.back()}>
            이전
          </Button>
        }
      />
      <Tabs
        id="tab_aistt_quality"
        tabs={aisttStateListTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => hanldeTabMove(index)}
      />
      <SubTitleBox
        title="전체 현황"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
      />
      <FilterTableForm
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <AreaBox
        title="제조 현황"
        className="underline tab"
        css={css`
          margin-top: 3.2rem;
        `}
        addFunc={
          <AddTab>
            {['제조 품질', '평균 제조 시간'].map((el, i: number) => (
              <li key={i} className={i === statusSelect ? 'on' : ''}>
                <button type="button" onClick={() => setstatusSelect(i)}>
                  {el}
                </button>
              </li>
            ))}
          </AddTab>
        }
      >
        {statusSelect === 0 ? (
          <ManufacturingQualityList
            params={params}
            updateParams={updateParams}
            data={manufacturingQualityData?.list}
          />
        ) : (
          <ManufacturingTimeList data={manufacturingTimeData?.list} />
        )}
      </AreaBox>
      <SubTitleBox title="피자별 현황 (전체)" hideUnderline />
      <PizzaStatusTable params={params} />
    </>
  );
};

export default AisttQualityState;
