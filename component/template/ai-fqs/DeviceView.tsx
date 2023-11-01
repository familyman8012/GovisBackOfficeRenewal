import Toggle from '@ComponentFarm/atom/Toggle/Toggle';
import { Table, TableWrap } from '@ComponentFarm/common';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import {
  DevicePageStyle,
  FqsInfoTable,
  SectionStyle,
  VideoWrapStyle,
} from './style';
import StateInfoBox from '../common/StateInfoBox';
import TableExpandRow from '../common/TableExpandRow';
import { MenuOptionGroupStyle, MenuOptionListStyle } from '../menu/style';

const DeviceView = () => {
  return (
    <DevicePageStyle>
      <SectionStyle>
        <h3 className="title">기기 기본 정보</h3>
      </SectionStyle>
      <FqsInfoTable bordered>
        <colgroup>
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(1384)} />
        </colgroup>
        <tbody>
          <tr>
            <th>매장 코드</th>
            <td>NO. 14124</td>
          </tr>
          <tr>
            <th>매장명</th>
            <td>평촌학원가점</td>
          </tr>
          <tr>
            <th>Wi-fi</th>
            <td>
              <Toggle />
              <span className="info-text">
                SSID : rwee2341 / Host IP : 210.32.0.123
              </span>
            </td>
          </tr>
          <tr>
            <th>Application</th>
            <td>
              <Toggle />
            </td>
          </tr>
        </tbody>
      </FqsInfoTable>
      <SectionStyle>
        <h3 className="title">카메라 정보</h3>
      </SectionStyle>
      <MenuOptionListStyle>
        <div className="wrap">
          <div className="side">
            <div className="list">
              <MenuOptionGroupStyle className="camera-group">
                <div className="header" role="button" tabIndex={0}>
                  카메라 목록
                </div>
                <button className="option on" type="button">
                  테이블 카메라
                </button>
                <button className="option off" type="button">
                  얼굴 카메라
                </button>
                <button className="option on" type="button">
                  왼쪽 바트 카메라
                </button>
                <button className="option off" type="button">
                  오른쪽 바트 카메라
                </button>
              </MenuOptionGroupStyle>
            </div>
          </div>
          <div className="view">
            <SectionStyle>
              <h3 className="title">영상 정보</h3>
            </SectionStyle>
            <StateInfoBox
              items={[
                {
                  title: '카메라 ID',
                  txt1: 'ca_123112',
                },
                {
                  title: '카메라 해상도',
                  txt1: '1024',
                  txt2: 'px',
                },
                {
                  title: '카메라 해상도 높이',
                  txt1: '720',
                  txt2: 'px',
                },
                {
                  title: '카메라 FPS',
                  txt1: '60',
                  txt2: 'fps',
                },
              ]}
            />
            <VideoWrapStyle>
              <video muted controls />
            </VideoWrapStyle>
            <SectionStyle>
              <h3 className="title">영상 내역</h3>
              <span className="count">
                총 <span className="number">115</span> 건
              </span>
              <TableWrap className="content">
                <Table className="basic">
                  <colgroup>
                    <col width={getTableWidthPercentage(50)} />
                    <col width={getTableWidthPercentage(160)} />
                    <col width={getTableWidthPercentage(644)} />
                    <col width={getTableWidthPercentage(336)} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>&nbsp;</th>
                      <th>등록일</th>
                      <th>영상수</th>
                      <th>총 영상 시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableExpandRow
                      content={
                        <FqsInfoTable>
                          <colgroup>
                            <col width={getTableWidthPercentage(50, 1181)} />
                            <col width={getTableWidthPercentage(200, 1181)} />
                            <col width={getTableWidthPercentage(200, 1181)} />
                            <col width={getTableWidthPercentage(600, 1181)} />
                            <col />
                          </colgroup>
                          <thead>
                            <th>&nbsp;</th>
                            <th className="left">등록시간</th>
                            <th className="left">영상명</th>
                            <th className="left">영상시간</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>&nbsp;</td>
                              <td className="code">2023-10-09 18:53:03</td>
                              <td>230723_91_13</td>
                              <td>01:00:00</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td className="code">2023-10-09 18:53:03</td>
                              <td>230723_91_13</td>
                              <td>01:00:00</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td className="code">2023-10-09 18:53:03</td>
                              <td>230723_91_13</td>
                              <td>01:00:00</td>
                            </tr>
                          </tbody>
                        </FqsInfoTable>
                      }
                    >
                      <td className="code">2023-10-09</td>
                      <td>13</td>
                      <td>01:00:00</td>
                    </TableExpandRow>
                  </tbody>
                </Table>
              </TableWrap>
            </SectionStyle>
          </div>
        </div>
      </MenuOptionListStyle>
    </DevicePageStyle>
  );
};

export default DeviceView;
