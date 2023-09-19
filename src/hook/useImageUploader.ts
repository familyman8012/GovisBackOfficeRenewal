import { useState, useCallback, ChangeEventHandler, ChangeEvent } from 'react';
import S3 from 'aws-sdk/clients/s3';
import dayjs from 'dayjs';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';
type FileInputChangeEvent = ChangeEvent<HTMLInputElement & { files: FileList }>;
interface IS3UploadResponse {
  Bucket: string;
  Location: string;
  Key: string;
}

const useImageUploader = (
  path = 'images'
): [
  string,
  UploadStatus,
  string | null,
  ChangeEventHandler<HTMLInputElement>,
] => {
  const [imgData, setImgData] = useState<string>(''); // 업로드된 이미지 URL
  const [status, setStatus] = useState<UploadStatus>('idle'); // 업로드 상태
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 오류 메시지

  const s3 = new S3({
    region: 'ap-northeast-2',
    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
  });

  const uploadToS3 = async (file: File, fileName: string) => {
    const params: {
      Bucket: string;
      Key: string;
      Body: File;
      ACL: string;
      ContentType: string;
      ContentDisposition?: string;
    } = {
      Bucket: 'temp-govis',
      Key: `${path}/${fileName}`,
      Body: file,
      ACL: 'public-read',
      ContentType: file.type,
    };

    // 조건부로 ContentDisposition 설정
    if (path === 'images/product/channelimg') {
      params.ContentDisposition = 'attachment;';
    }

    return new Promise<string>((resolve, reject) => {
      s3.upload(params, (err: Error | null, s3data: IS3UploadResponse) => {
        if (err) reject(err);
        resolve(s3data.Location);
      });
    });
  };

  const handler = useCallback(
    async (e: FileInputChangeEvent) => {
      console.log('e', e);

      setStatus('uploading');
      setErrorMessage(null);

      const file = e.target.files[0];
      const nowDate = dayjs(Date.now()).format('YYMMDD');

      // 원래 파일의 이름과 확장자를 분리합니다.
      const originalName = file.name.replace(/\.[^/.]+$/, '');
      const extension = file.name.split('.').pop();

      // 파일 이름을 생성합니다.
      const fileName = `${nowDate}_${originalName}.${extension}`;

      console.log('fileName', fileName);

      try {
        const imageUrl = await uploadToS3(file, fileName);
        setImgData(imageUrl);
        setStatus('success');
      } catch (error: any) {
        console.error('Failed to upload image:', error);
        setStatus('error');
        setErrorMessage(error.message || 'Failed to upload image.');
      }
    },
    [path]
  );

  return [imgData, status, errorMessage, handler];
};

export default useImageUploader;
