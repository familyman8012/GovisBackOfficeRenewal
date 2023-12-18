import React from 'react';
import { Table, TableWrap } from '@ComponentFarm/common';

const Page = () => {
  return (
    <TableWrap>
      <Table className="basic">
        <tbody>
          <tr>
            <th>제품명</th>
            <th>단계</th>
            <th>inspection_info_idx</th>
            <th>변환점수</th>
            <th>컬러맵 이미지</th>
            <th>구간 대표 이미지</th>
            <th>평가 항목 (대)</th>
            <th>평가 항목 (중)</th>
            <th>평가 항목 (소)</th>
          </tr>

          <tr>
            <td rowSpan={31}>달콤 고구마 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15715</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15691</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>16623</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15777</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15714</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15968</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>고구마 무스</td>
            <td>15805</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000415_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000415.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>고구마 무스</td>
            <td>16239</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000248_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000248.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>고구마 무스</td>
            <td>15825</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4437_001078_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4437_001078.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>스위트콘(중량 기준)</td>
            <td>15809</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000403_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000403.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>스위트콘(중량 기준)</td>
            <td>15827</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000792_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000792.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>스위트콘(중량 기준)</td>
            <td>15805</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000424_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000424.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>스위트콘(중량 기준)</td>
            <td>15962</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4585_000223_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4585_000223.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16238</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16604</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16239</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15827</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15968</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16008</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16060</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15805</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td rowSpan={26}>마약 옥수수 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>콘소메 소스</td>
            <td>16074</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4691_000353_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4691_000353.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>콘소메 소스</td>
            <td>15809</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000164_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000164.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>스위트콘(중량 기준)</td>
            <td>15809</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000403_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000403.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>스위트콘(중량 기준)</td>
            <td>15827</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000792_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000792.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>스위트콘(중량 기준)</td>
            <td>15805</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000424_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000424.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>스위트콘(중량 기준)</td>
            <td>15962</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4585_000223_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4585_000223.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16238</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16604</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16239</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15827</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15968</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16008</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16060</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15805</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>레드체다 치즈</td>
            <td>15809</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000500_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000500.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>레드체다 치즈</td>
            <td>16276</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000550_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000550.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td rowSpan={40}>베이컨 포테이토 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15715</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15691</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>16623</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15777</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15714</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15968</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>포크 불고기 분쇄</td>
            <td>16231</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4844_000459_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4844_000459.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>포크 불고기 분쇄</td>
            <td>16317</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4936_000698_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4936_000698.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>포크 불고기 분쇄</td>
            <td>15715</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000348_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000348.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15813</td>
            <td>33</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_000902_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_000902.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15811</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001157_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001157.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15810</td>
            <td>67</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000987_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000987.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15968</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001168_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001168.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>16414</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5000_000358_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5000_000358.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15715</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000531_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000531.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>16231</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4844_000544_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4844_000544.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15810</td>
            <td>67</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_001242_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_001242.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15971</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_001106_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_001106.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15811</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001635_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001635.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>16221</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4839_000563_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4839_000563.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15813</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001356_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001356.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16238</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16604</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16239</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15827</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15968</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16008</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16060</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15805</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈(후 토핑)</td>
            <td>15715</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000846_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000846.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td rowSpan={40}>슈퍼 콤비네이션 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15715</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15691</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>16623</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15777</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15714</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15968</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>표고버섯</td>
            <td>16604</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000224_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000224.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>개수 미달</td>
          </tr>
          <tr>
            <td>표고버섯</td>
            <td>16242</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000419_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000419.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>오뗄 포크 토핑</td>
            <td>16276</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000312_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000312.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>개수 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>16263</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4887_000750_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4887_000750.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>16211</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4840_000300_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4840_000300.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15813</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001053_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001053.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15691</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000648_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000648.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15810</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000759_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000759.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>청피망</td>
            <td>16242</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000680_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000680.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>청피망</td>
            <td>16297</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4919_000735_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4919_000735.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16238</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16604</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16239</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15827</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15968</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16008</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16060</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15805</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15810</td>
            <td>67</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_001242_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_001242.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15971</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_001106_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_001106.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15811</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001635_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001635.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>16221</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4839_000563_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4839_000563.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15813</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001356_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001356.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈(후 토핑)</td>
            <td>15715</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000846_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000846.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td rowSpan={16}>아메리칸 치즈 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15715</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15691</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>16623</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15777</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15714</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15968</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td rowSpan={21}>오리지널 페퍼로니 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15715</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15691</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>16623</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15777</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15714</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15968</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>16263</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4887_000750_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4887_000750.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>16211</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4840_000300_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4840_000300.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15813</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001053_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001053.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15691</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000648_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000648.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15810</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000759_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000759.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td rowSpan={15}>크레이지 미트 치즈 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>미트소스</td>
            <td>16276</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000142_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000142.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>오뗄 포크 토핑</td>
            <td>16276</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000312_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000312.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>개수 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈(후 토핑)</td>
            <td>15715</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000846_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000846.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>레드체다 치즈</td>
            <td>15809</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000500_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4433_000500.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>레드체다 치즈</td>
            <td>16276</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000550_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4897_000550.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td rowSpan={14}>클래식 마르게리타 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>바질오일</td>
            <td>16038</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4656_000196_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4656_000196.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스(토핑)</td>
            <td>16007</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4629_000460_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4629_000460.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>마리네이드 토마토</td>
            <td>16038</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4656_000346_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4656_000346.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>개수 미달</td>
          </tr>
          <tr>
            <td>마리네이드 토마토</td>
            <td>16007</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4629_000572_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4629_000572.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td rowSpan={45}>페퍼로니 & 포테이토 반반 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15715</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15691</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>16623</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15777</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15714</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15968</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>16263</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4887_000750_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4887_000750.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>16211</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4840_000300_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4840_000300.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15813</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001053_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001053.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15691</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000648_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000648.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15810</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000759_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000759.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>포크 불고기 분쇄</td>
            <td>16231</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4844_000459_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4844_000459.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>포크 불고기 분쇄</td>
            <td>16317</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4936_000698_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4936_000698.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>포크 불고기 분쇄</td>
            <td>15715</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000348_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000348.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15813</td>
            <td>33</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_000902_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_000902.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15811</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001157_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001157.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15810</td>
            <td>67</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000987_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000987.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15968</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001168_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001168.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>16414</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5000_000358_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5000_000358.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>15715</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000531_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000531.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>배터 바이트</td>
            <td>16231</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4844_000544_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4844_000544.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15810</td>
            <td>67</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_001242_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_001242.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15971</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_001106_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_001106.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15811</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001635_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4430_001635.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>16221</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4839_000563_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4839_000563.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>베이컨</td>
            <td>15813</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001356_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001356.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16238</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16604</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16239</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15827</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15968</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16008</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16060</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15805</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈(후 토핑)</td>
            <td>15715</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000846_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000846.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td rowSpan={18}>허니 고르곤 졸라 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>마요네즈 & 랜치드레싱</td>
            <td>16271</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4898_000187_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4898_000187.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>마요네즈 & 랜치드레싱</td>
            <td>16067</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4690_000313_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4690_000313.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>마요네즈 & 랜치드레싱</td>
            <td>16223</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4845_000370_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4845_000370.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>마요네즈 & 랜치드레싱</td>
            <td>16380</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4991_000306_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4991_000306.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>고르곤 졸라</td>
            <td>16223</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4845_000746_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4845_000746.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>고르곤 졸라</td>
            <td>16365</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4982_000281_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4982_000281.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>고르곤 졸라</td>
            <td>16057</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4680_000642_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4680_000642.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>고르곤 졸라</td>
            <td>16380</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4991_000672_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4991_000672.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td rowSpan={26}>K-불고기 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>구운 양파 소스</td>
            <td>16604</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000124_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000124.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>구운 양파 소스</td>
            <td>16242</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000112_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000112.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>구운 양파 소스</td>
            <td>16297</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4919_000226_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4919_000226.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>표고버섯</td>
            <td>16604</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000224_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000224.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>개수 미달</td>
          </tr>
          <tr>
            <td>표고버섯</td>
            <td>16242</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000419_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000419.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>개수 부족</td>
          </tr>
          <tr>
            <td>소불고기</td>
            <td>16604</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000361_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000361.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>청피망</td>
            <td>16242</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000680_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4866_000680.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>청피망</td>
            <td>16297</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4919_000735_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4919_000735.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16238</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4867_000327.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16604</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5025_000414.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16239</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4864_000465.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15827</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4438_000883.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15968</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_001400.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16008</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4626_000965.png" />
            </td>
            <td>개선 필요</td>
            <td>순서</td>
            <td>순서 미준수</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>16060</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4682_000485.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>양파</td>
            <td>15805</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000503.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td rowSpan={21}>매니악 페퍼로니 피자</td>
            <td>도우</td>
            <td>15691</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000001.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15715</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000135.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15691</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000172.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>16623</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4667_000325.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15777</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000246.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15714</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4328_000450.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>토마토소스</td>
            <td>15968</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4570_000344.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15805</td>
            <td>0</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4427_000613.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15777</td>
            <td>10</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4395_000556.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15691</td>
            <td>20</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000349.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15980</td>
            <td>30</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4605_000237.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15971</td>
            <td>40</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4571_000641.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16012</td>
            <td>50</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4627_000499.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16614</td>
            <td>60</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5012_000161.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>15715</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4331_000308.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>모짜렐라 치즈</td>
            <td>16592</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/5022_000257.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>16263</td>
            <td>70</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4887_000750_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4887_000750.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>16211</td>
            <td>80</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4840_000300_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4840_000300.png" />
            </td>
            <td>개선 필요</td>
            <td>부족</td>
            <td>면적 미달</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15813</td>
            <td>83</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001053_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4432_001053.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15691</td>
            <td>90</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000648_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4314_000648.png" />
            </td>
            <td>감점 항목</td>
            <td>부족</td>
            <td>면적 부족</td>
          </tr>
          <tr>
            <td>페퍼로니</td>
            <td>15810</td>
            <td>100</td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000759_colormap.png" />
            </td>
            <td>
              <img src="https://dev-govis-ai.s3.ap-northeast-2.amazonaws.com/inspection/2023/12/17/4429_000759.png" />
            </td>
            <td>우수</td>
            <td>우수</td>
            <td>우수</td>
          </tr>
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default Page;
