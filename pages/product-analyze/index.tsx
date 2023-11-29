import { useEffect } from 'react';
import { css } from '@emotion/react';
import { fetchEnvironment } from '@ApiFarm/environment';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { GridAreaWrap } from '@ComponentFarm/template/common/AreaBox';
import { productAnalyzeTabData } from '@ComponentFarm/template/product-analyze/const';
import AllSales from '@ComponentFarm/template/product-analyze/index/AllSales';
import AreaSales from '@ComponentFarm/template/product-analyze/index/AreaSales';
import CategorySales from '@ComponentFarm/template/product-analyze/index/CategorySales';
import ChannelSaels from '@ComponentFarm/template/product-analyze/index/ChannelSaels';
import FilterStatiscDashBoard from '@ComponentFarm/template/product-analyze/index/FilterStatiscDashBoard';
import InfoTotalProduct from '@ComponentFarm/template/product-analyze/index/InfoTotalProduct';
import OrderSales from '@ComponentFarm/template/product-analyze/index/OrderSales';
import RegionSales from '@ComponentFarm/template/product-analyze/index/RegionSales';
import StoreSales from '@ComponentFarm/template/product-analyze/index/StoreSales';
import useTabWithDateQuery from '@ComponentFarm/template/product-analyze/useTabWithDateQuery';
import useQueryParams from '@HookFarm/useQueryParams';
import { EnvStore } from '@MobxFarm/store';
import { convertEnv } from '@UtilFarm/convertEnvironment';

const DashBoardAnalyze = () => {
  const [params, updateParams, resetParams] = useQueryParams({
    evi_product_category: convertEnv('product_category').find(
      el => el.label === '피자'
    )?.value,
  });
  const { activeTabIndex, handleTabWithDateQuery } = useTabWithDateQuery({
    tabIdx: 0,
    params,
    productAnalyzeTabData,
  });

  useEffect(() => {
    const saveSessionEnvironment = async () => {
      const environment = await fetchEnvironment();
      await sessionStorage.setItem('environment', JSON.stringify(environment));
      await EnvStore.init();
      updateParams({
        evi_product_category: convertEnv('product_category').find(
          el => el.label === '피자'
        )?.value,
      });
    };

    if (!sessionStorage.getItem('environment')) {
      saveSessionEnvironment();
    }
  }, []);

  return (
    <>
      <TitleArea title="제품 분석 및 통계" />
      <Tabs
        id="dashboard-analyze"
        tabs={productAnalyzeTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => handleTabWithDateQuery(index)}
      />
      <InfoTotalProduct />
      <FilterStatiscDashBoard
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <AllSales params={params} />
      <CategorySales params={params} />
      <GridAreaWrap>
        <OrderSales params={params} />
        <ChannelSaels params={params} />
      </GridAreaWrap>
      <GridAreaWrap
        css={css`
          margin: 3.2rem 0;
        `}
      >
        <StoreSales params={params} />
        <AreaSales params={params} />
      </GridAreaWrap>
      <RegionSales params={params} />
    </>
  );
};

export default DashBoardAnalyze;
