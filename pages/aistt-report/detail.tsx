import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  fetchReportInfo,
  fetchReportMailSend,
  fetchReportManufacturingStatus,
  fetchScoreResult,
} from '@ApiFarm/aistt';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import MailSendPopup, { IMailData } from '@ComponentFarm/modal/MailSendPopup';
import { ManufacturingQualityList } from '@ComponentFarm/template/aistt/common/ManufacturingQuality';
import { aisttStateListTabData } from '@ComponentFarm/template/aistt/const';
import AnalysisResult from '@ComponentFarm/template/aistt/report/detail/AnalysisResult';
import MailSendListPopup from '@ComponentFarm/template/aistt/report/detail/MailSendListPopup';
import { ScoreResultTable } from '@ComponentFarm/template/aistt/report/detail/ScoreResultTable';
import { StoreSummary } from '@ComponentFarm/template/aistt/report/detail/StoreSummary';
import { SummaryInfoTable } from '@ComponentFarm/template/aistt/report/detail/SummaryInfoTable';
import { tab_reportDetail } from '@ComponentFarm/template/aistt/report/index/const';
import {
  AreaBox,
  ButtonWidthTextDiv,
} from '@ComponentFarm/template/common/AreaBox';
import StoreSearch from '@ComponentFarm/template/common/Filter/StoreSearch';
import SubTitleBox from '@ComponentFarm/template/common/SubTitleBox';
import useQueryParams from '@HookFarm/useQueryParams';

export const DetailInfoWrap = styled.div`
  padding: 0 2rem;
`;

export const Detail = () => {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { store_idx, id, ...rest } = router.query;
  const queryClient = useQueryClient();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [mailOpen, setMailOpen] = useState(false);
  const [mailListOpen, setMailListOpen] = useState(false);
  const [params, updateParams, resetParams] = useQueryParams({
    id,
    ...rest,
  });

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(aisttStateListTabData[index].url);
  };

  const { isLoading: reportInfoLoading, data: reportInfoData } = useQuery(
    ['report-info'],
    () => fetchReportInfo(Number(id)),
    { enabled: !!id }
  );

  const { data: manufacturingQualityData } = useQuery(
    ['manufacturingQualityList', params],
    () =>
      fetchReportManufacturingStatus({
        fqs_reports_idx: String(id),
        store_idx: String(params.store_idx),
      }),
    { enabled: !!id }
  );

  const { isLoading: ScoreResultLoading, data: ScoreResultData } = useQuery(
    ['ScoreResultList', params],
    () =>
      fetchScoreResult({
        fqs_reports_idx: String(id),
        store_idx: String(params.store_idx),
      }),
    { enabled: !!id }
  );

  const ReportSendMailSubmit = useMutation(fetchReportMailSend, {
    onSuccess: data => {
      queryClient.invalidateQueries(['report-info']);
      queryClient.invalidateQueries(['reportMailSendList']);
    },
  });

  const mailOpenHandler = () => {
    setMailOpen(prev => !prev);
  };

  const mailSendSubmit = async (data: IMailData) => {
    const { recipient, ...mailSendData } = data;
    const recv_emails = recipient?.map(item => item.value).join(',');
    ReportSendMailSubmit.mutate({
      fqs_reports_idx: String(id),
      body: { recv_emails: String(recv_emails), ...mailSendData },
    });
  };

  return (
    <>
      <TitleArea
        title="레포트"
        BtnBox={
          <Button
            variant="gostSecondary"
            onClick={() =>
              router.push({ pathname: '/aistt-report', query: rest })
            }
          >
            이전
          </Button>
        }
      />
      <Tabs
        id="tab_reportDetail"
        tabs={tab_reportDetail}
        activeTabIndex={activeTabIndex}
        onTabChange={index => hanldeTabMove(index)}
      />
      <DetailInfoWrap>
        <ButtonWidthTextDiv>
          <SubTitleBox title="내역" hideUnderline />
          <Button variant="gostPrimary" onClick={mailOpenHandler}>
            메일 발송
          </Button>
        </ButtonWidthTextDiv>
        <SummaryInfoTable
          setMailListOpen={setMailListOpen}
          data={reportInfoData}
        />
        <SubTitleBox title="결과" hideUnderline />
        <StoreSearch
          router={router}
          params={params}
          updateParams={updateParams}
          resetParams={resetParams}
        />

        <AreaBox
          title="전체 매장 요약"
          css={css`
            .box_head {
              margin-bottom: 2.4rem;
            }
          `}
        >
          <StoreSummary data={manufacturingQualityData?.store_overview} />
        </AreaBox>
        <AnalysisResult
          view={{
            fqs_reports_idx: String(id),
            number: 1,
          }}
          isLoading={reportInfoLoading}
          data={reportInfoData?.analysis_result_1}
        />
        <AreaBox
          title="제조 현황"
          css={css`
            margin-top: 3.2rem;
          `}
        >
          <ManufacturingQualityList
            data={manufacturingQualityData?.manufacturing_status}
          />
        </AreaBox>
        <AnalysisResult
          view={{
            fqs_reports_idx: String(id),
            number: 2,
          }}
          isLoading={reportInfoLoading}
          data={reportInfoData?.analysis_result_2}
        />
        <AreaBox
          title="평점순 결과"
          css={css`
            margin-top: 3.2rem;
          `}
        >
          <ScoreResultTable
            info={{
              fqs_reports_idx: String(id),
              store_idx: String(params.store_idx),
            }}
            isLoading={ScoreResultLoading}
            data={ScoreResultData?.list}
          />
        </AreaBox>
      </DetailInfoWrap>
      <MailSendPopup
        initial_recv_emails={[{ label: '', value: '' }]}
        isOpen={mailOpen}
        onClose={mailOpenHandler}
        submitFunc={mailSendSubmit}
      />
      <MailSendListPopup
        fqs_reports_idx={String(id)}
        isOpen={mailListOpen}
        onClose={() => setMailListOpen(false)}
      />
    </>
  );
};

export default Detail;
