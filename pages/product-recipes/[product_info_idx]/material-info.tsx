import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchRecipeMaterialInfo } from '@ApiFarm/product-recipe';
import { Button } from '@ComponentFarm/atom/Button/Button';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { recipeInfoListLayoutConfig } from '@ComponentFarm/template/recipe/const';
import RecipeMaterialInfo from '@ComponentFarm/template/recipe/RecipeMaterialInfo';
import { useGoMove } from '@HookFarm/useGoMove';

const MaterialInfo = () => {
  const router = useRouter();
  const { onBack } = useGoMove();

  const product_info_idx = useMemo(
    () => parseInt(router.query?.product_info_idx as string, 10),
    [router.query]
  );

  const { data } = useQuery(
    ['recipe-material-info', product_info_idx],
    () => fetchRecipeMaterialInfo(product_info_idx),
    {}
  );

  return (
    <div>
      <LayoutTitleBoxWithTab
        {...recipeInfoListLayoutConfig}
        actionButtons={
          <Button variant="gostSecondary" onClick={() => onBack()}>
            이전
          </Button>
        }
      />
      {data && <RecipeMaterialInfo materialInfo={data} />}
    </div>
  );
};

export default MaterialInfo;
