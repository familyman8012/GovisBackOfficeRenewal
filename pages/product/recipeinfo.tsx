import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchProductFormView } from '@ApiFarm/product';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';

const ProductRecipeInfoPage = ({ envs }: { envs: IEnvironmentResItem[] }) => {
  const router = useRouter();
  const tabData = tabDataFunc('view', router?.query);
  const id = useMemo(() => router.query.id, [router?.query]);

  // view 일때, 데이터 불러오기
  const { data } = useQuery(
    ['productFormView', router.asPath],
    () => fetchProductFormView(id?.toString() ?? ''),
    {
      enabled: !!id,
    }
  );

  console.log(data);

  return (
    <DetailPageLayout title="제품 관리 상세 정보" tabData={tabData}>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        준비 중입니다.
      </div>
    </DetailPageLayout>
  );
};

export default ProductRecipeInfoPage;
