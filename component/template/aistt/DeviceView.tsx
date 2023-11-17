import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchAisttDeviceInfo, fetchAisttStoreInfo } from '@ApiFarm/aistt';
import Toggle from '@ComponentFarm/atom/Toggle/Toggle';
import { useGoMove } from '@HookFarm/useGoMove';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import DeviceCameraList from './DeviceCameraList';
import { DevicePageStyle, FqsInfoTable, SectionStyle } from './style';

const DeviceView = () => {
  const { onBack } = useGoMove();
  const router = useRouter();
  const id = useMemo(
    () => Number(router.query.id?.[1] ?? ''),
    [router.isReady]
  );

  const { data: storeInfoData } = useQuery(
    ['aistt-store-info'],
    () => fetchAisttStoreInfo(Number(id)),
    {
      onError: () => onBack(),
    }
  );

  const { data: deviceInfoData } = useQuery(['aistt-device-info'], () =>
    fetchAisttDeviceInfo(id)
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
        <DeviceCameraList storeId={id} cameraList={cameraList} />
      )}
    </DevicePageStyle>
  );
};

export default DeviceView;
