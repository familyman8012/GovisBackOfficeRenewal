import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchAisttDeviceInfo, fetchAisttStoreInfo } from '@ApiFarm/ai-fqs';
import Toggle from '@ComponentFarm/atom/Toggle/Toggle';
import { Table, TableWrap } from '@ComponentFarm/common';
import { useGoMove } from '@HookFarm/useGoMove';
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

const labels = {
  camera_face: '얼굴 카메라',
  camera_table: '테이블 카메라',
  camera_vat_left: '왼쪽 바트 카메라',
  camera_vat_right: '오른쪽 바트 카메라',
} as const;

const DeviceView = () => {
  const { onBack } = useGoMove();
  const router = useRouter();
  const id = useMemo(() => router.query.id?.[1] ?? '', [router.isReady]);

  const { data: storeInfoData } = useQuery(
    ['aistt-store-info'],
    () => fetchAisttStoreInfo(Number(id)),
    {
      onError: () => onBack(),
    }
  );

  const { data: deviceInfoData } = useQuery(['aistt-device-info'], () =>
    fetchAisttDeviceInfo(Number(id))
  );

  const cameraList = useMemo(
    () =>
      deviceInfoData
        ? Object.entries(deviceInfoData)
            .filter(([key, value]) => key.includes('camera') && !!value.status)
            .map(([key, value]) => ({ key, ...value }))
        : [],
    [deviceInfoData]
  );

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
            <th>매장명</th>
            <td>{storeInfoData?.info.store_name}</td>
          </tr>
          <tr>
            <th>Wi-fi</th>
            <td>
              <span className="info-text">
                SSID : {storeInfoData?.info.wifi_ssid ?? '-'} / Host IP :
                {storeInfoData?.info.host_ip ?? '-'}
              </span>
            </td>
          </tr>
          <tr>
            <th>Application</th>
            <td>
              <Toggle checked={storeInfoData?.info.is_use_stt === 1} disabled />
            </td>
          </tr>
        </tbody>
      </FqsInfoTable>
      {cameraList.length > 0 && (
        <>
          <SectionStyle>
            <h3 className="title">카메라 정보</h3>
          </SectionStyle>
          <MenuOptionListStyle>
            <div className="wrap">
              <div className="side">
                <div className="list">
                  <MenuOptionGroupStyle className="camera-group">
                    <div className="header">카메라 목록</div>
                    {cameraList.map(camera => (
                      <button
                        key={camera.key}
                        type="button"
                        className={`option ${
                          camera.status === 1 ? 'on' : 'off'
                        }`}
                      >
                        {labels?.[camera.key as keyof typeof labels] ?? ''}
                      </button>
                    ))}
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
                                <col
                                  width={getTableWidthPercentage(50, 1181)}
                                />
                                <col
                                  width={getTableWidthPercentage(200, 1181)}
                                />
                                <col
                                  width={getTableWidthPercentage(200, 1181)}
                                />
                                <col
                                  width={getTableWidthPercentage(600, 1181)}
                                />
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
        </>
      )}
    </DevicePageStyle>
  );
};

export default DeviceView;
