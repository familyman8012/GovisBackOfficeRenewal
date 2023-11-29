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
import StoreSales from '@ComponentFarm/template/product-analyze/index/StoreSales';
import useTabWithDateQuery from '@ComponentFarm/template/product-analyze/useTabWithDateQuery';
import useQueryParams from '@HookFarm/useQueryParams';
import { EnvStore } from '@MobxFarm/store';
import { convertEnv } from '@UtilFarm/convertEnvironment';

const DashBoardAnalyze = () => {
  const [params, updateParams, resetParams] = useQueryParams({});
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
    };

    if (!sessionStorage.getItem('environment')) {
      saveSessionEnvironment();
    }

    updateParams({
      evi_product_category: convertEnv('product_category').find(
        el => el.label === '피자'
      )?.value,
    });
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
      <GridAreaWrap
        css={css`
          margin-bottom: 3.2rem;
        `}
      >
        <OrderSales params={params} />
        <ChannelSaels params={params} />
      </GridAreaWrap>
      <GridAreaWrap>
        <StoreSales params={params} />
        <AreaSales params={params} />
      </GridAreaWrap>
    </>
  );
};

export default DashBoardAnalyze;
