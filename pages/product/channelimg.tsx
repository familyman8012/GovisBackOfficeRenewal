import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { css } from '@emotion/react';
import { fetchEnvironment } from '@ApiFarm/environment';
import { fetchChannelImgSave, fetchChannelImgView } from '@ApiFarm/product';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { IProductChannelImg } from '@InterfaceFarm/product';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Edit, Export, Plus } from '@ComponentFarm/atom/icons';
import { FormWrap, Table, TableWrap } from '@ComponentFarm/common';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';
import useImageUploader from '@HookFarm/useImageUploader';

const pageStyle = css`
  &.basic tr:hover {
    background: none !important;
  }
  th {
    &:nth-of-type(1) {
      width: calc((150 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((400 / 1536) * 100%);
    }
    &:nth-of-type(3) {
      width: calc((200 / 1536) * 100%);
    }
    &:nth-of-type(4) {
      width: calc((260 / 1536) * 100%);
    }
    &:nth-of-type(5) {
      width: calc((260 / 1536) * 100%);
    }
    &:nth-of-type(6) {
      width: calc((266 / 1536) * 100%);
    }
  }
  td {
    padding: 2rem 0;
    &:nth-of-type(1) {
      text-align: center;

      .thumb {
        display: block;
        position: relative;
        width: 5.6rem;
        height: 5.6rem;
        margin: 0 auto;
      }
    }

    .btn_box {
      display: flex;

      button {
        margin-right: 1.6rem;
      }
    }
  }
`;

const Channelimg = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const tabData = tabDataFunc('view', router?.query);
  const [imgData, status, errorMessage, handler, setStatus] = useImageUploader({
    isAttach: true,
  });
  const [isUploading, setIsUploading] = useState(false);

  const [currentChannel, setCurrentChannel] = useState<{
    channel: string;
    channel_idx: number;
  }>({ channel: '', channel_idx: 0 });

  type Resolution = {
    width: number;
    height: number;
  };

  const imgResolution: { [key: string]: Resolution } = {
    우노스: { width: 480, height: 360 },
    OTO: { width: 456, height: 300 },
    IMU_메인: { width: 208, height: 124 },
    IMU_옵션: { width: 146, height: 196 },
    IMU_옵션메인: { width: 1080, height: 700 },
    네이버주문: { width: 960, height: 960 },
    위메프오: { width: 1280, height: 1280 },
    배달의민족: { width: 1280, height: 1280 },
    배달특급: { width: 500, height: 500 },
    요기요: { width: 552, height: 327 },
    쿠팡이츠: { width: 1080, height: 660 },
  };

  const { data: ChannelImg } = useQuery(
    ['channelImgList', id],
    () => fetchChannelImgView(String(id && id)),
    {
      enabled: !!router.query.id,
    }
  );

  const saveSubmit = useMutation(fetchChannelImgSave, {
    onSuccess: (data: IProductChannelImg) => {
      queryClient.invalidateQueries(['channelImgList']);
    },
  });

  const checkImageResolution = (
    file: File,
    resolution: Resolution
  ): Promise<boolean> => {
    return new Promise(resolve => {
      const img = new window.Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        if (
          img.width === resolution.width &&
          img.height === resolution.height
        ) {
          resolve(true);
        } else {
          resolve(false);
        }
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    });
  };

  useEffect(() => {
    if (status === 'success' && isUploading) {
      const submitData = {
        product_image: imgData,
        evi_sale_channel: Number(
          environment.list.find(el => el.value === currentChannel.channel)
            ?.environment_variable_idx
        ),
        product_image_channel_idx: currentChannel.channel_idx,
      };
      saveSubmit.mutate({
        params: String(id && id),
        data: submitData,
      });
      setIsUploading(false);
      setStatus('');
    } else if (status === 'error') {
      console.log(errorMessage);
      setIsUploading(false);
    }
  }, [status, isUploading]);

  const handleImageUpload = async (channel: string, channel_idx: number) => {
    if (isUploading) return;
    setCurrentChannel({ channel, channel_idx });
    const input = document.createElement('input');
    input.type = 'file';

    let fileSelected = false; // 파일이 선택되었는지 여부를 나타내는 변수

    input.onchange = async (e: Event) => {
      fileSelected = true; // 파일이 선택되었음을 표시

      setIsUploading(true); // 업로드 시작 상태 설정

      const fileInput = e.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const isResolutionValid = await checkImageResolution(
          file,
          imgResolution[channel]
        );
        if (!isResolutionValid) {
          alert('해상도가 맞지 않습니다');
          setIsUploading(false);
          return;
        }

        const imgEtarget = {
          ...e,
          target: {
            ...fileInput,
            files: fileInput.files,
          },
        } as unknown;

        await handler(imgEtarget as any);
      }
    };
    input.click();

    // 파일 선택 창이 닫힌 후 파일 선택 여부를 확인하고 isUploading 상태 업데이트
    setTimeout(() => {
      if (!fileSelected) {
        setIsUploading(false);
      }
    }, 100);
  };

  function downloadFile(fileName: string) {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = '';
    link.click();
  }

  // async function downloadFile(url: string) {
  //   const response = await fetch(url);
  //   const blob = await response.blob();
  //   const blobUrl = window.URL.createObjectURL(blob);

  //   const link = document.createElement('a');
  //   link.href = blobUrl;
  //   link.download = ''; // 원하는 파일 이름을 설정하거나 빈 문자열로 두어 원래의 파일 이름을 사용합니다.
  //   document.body.appendChild(link); // 이 부분이 중요합니다. DOM에 링크를 임시로 추가합니다.
  //   link.click();
  //   document.body.removeChild(link); // 다운로드 후 링크를 DOM에서 제거합니다.
  // }

  return (
    <FormWrap>
      <DetailPageLayout tabData={tabData} title="제품 상세 정보">
        <h2>채널별 제품 이미지 목록</h2>
        <TableWrap>
          <Table className="basic" css={pageStyle}>
            <thead>
              <tr>
                <th>
                  <span className="hiddenZoneV">썸네일 이미지</span>
                </th>
                <th>채널명</th>
                <th>해상도</th>
                <th>
                  <span className="hiddenZoneV">이미지 다운로드</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ChannelImg?.list?.map((el: IProductChannelImg) => (
                <tr key={el.evi_sale_channel}>
                  <td>
                    <span className="thumb">
                      <Image
                        src={
                          el.product_image === ''
                            ? '/images/product/manage/channel/thumb_default.svg'
                            : el.product_image
                        }
                        fill
                        alt="기본 이미지"
                      />
                    </span>
                  </td>
                  <td>{el.evi_sale_channel_str}</td>
                  <td>
                    {imgResolution[String(el.evi_sale_channel_str)]?.width} x
                    {imgResolution[String(el.evi_sale_channel_str)]?.height}
                  </td>
                  <td>
                    <div className="btn_box">
                      <Button
                        variant="gostSecondary"
                        LeadingIcon={el.product_image ? <Edit /> : <Plus />}
                        onClick={() =>
                          handleImageUpload(
                            String(el.evi_sale_channel_str),
                            el.product_image === ''
                              ? 0
                              : el.product_image_channel_idx
                          )
                        }
                      >
                        {el.product_image ? '이미지 변경' : '이미지 추가'}
                      </Button>
                      <Button
                        variant="gostSecondary"
                        LeadingIcon={<Export />}
                        onClick={() => downloadFile(el.product_image)}
                      >
                        다운로드
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrap>
      </DetailPageLayout>
    </FormWrap>
  );
};

export default Channelimg;

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'sale_channel',
  });

  return {
    props: {
      environment,
    },
    revalidate: 60,
  };
};
