import { useState, useCallback, ChangeEventHandler, ChangeEvent } from 'react';
import { uploadToS3 } from '@UtilFarm/uploads3';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';
type FileInputChangeEvent = ChangeEvent<HTMLInputElement & { files: FileList }>;

const useImageUploader = ({ isAttach = false } = {}): [
  string,
  UploadStatus,
  string | null,
  ChangeEventHandler<HTMLInputElement>,
  any,
] => {
  const [imgData, setImgData] = useState<string>(''); // 업로드된 이미지 URL
  const [status, setStatus] = useState<UploadStatus>('idle'); // 업로드 상태
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 오류 메시지

  const handler = useCallback(
    async (e: FileInputChangeEvent) => {
      setStatus('uploading');
      setErrorMessage(null);

      const file = e.target.files[0];

      try {
        const imageUrl = await uploadToS3(file, isAttach);
        setImgData(imageUrl);
        setStatus('success');
      } catch (error: any) {
        console.error('Failed to upload image:', error);
        setStatus('error');
        setErrorMessage(error.message || 'Failed to upload image.');
      }
    },
    [isAttach]
  );

  return [imgData, status, errorMessage, handler, setStatus];
};

export default useImageUploader;
