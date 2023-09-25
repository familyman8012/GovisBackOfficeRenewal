import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { fetchMaterialInfoView } from '@ApiFarm/product';
import { IMaterialInfoViewItem } from '@InterfaceFarm/product';
import { Pic } from '@ComponentFarm/atom/icons';
import { FormWrap, Table, TableWrap } from '@ComponentFarm/common';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';

const pageStyle = css`
  &.basic tr:hover {
    background: none;
  }

  th {
    border-top: 2px solid var(--color-neutral10);
    &:nth-of-type(1) {
      width: calc((650 / 1536) * 100%);
    }
    &:nth-of-type(2) {
      width: calc((120 / 1536) * 100%);
    }
    &:nth-of-type(3) {
      width: calc((200 / 1536) * 100%);
    }
    &:nth-of-type(4) {
      width: calc((200 / 1536) * 100%);
    }
    &:nth-of-type(5) {
      width: calc((366 / 1536) * 100%);
    }
  }
  tr {
    &:nth-of-type(1) {
      td {
        border-bottom: 1px solid var(--color-neutral10);
        .box_total_price {
          display: flex;
          padding-right: 4rem;
          span {
            color: var(--color-neutral10);
            font-weight: bold;
          }
          .price {
            margin-left: auto;
          }
        }
      }
    }
  }
  td {
    &:nth-of-type(1) {
      padding-left: 0;
      .box_material_info_name {
        display: flex;
        align-items: center;
      }
      .thumb {
        display: flex;
        width: 5.6rem;
        height: 5.6rem;
        margin: 0 4rem;
        align-items: center;
        justify-content: center;
        box-sizing: content-box;
        background: var(--color-neutral90);
        border-radius: 0.8rem;

        img {
          width: 5.6rem;
          height: 5.6rem;
          object-fit: fill;
          border-radius: 0.8rem;
        }
      }
    }
    &:nth-of-type(5) {
      text-align: right;
      padding-right: 4rem;
    }
  }
`;

const MaterialInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const tabData = tabDataFunc('view', router?.query);

  const { data: MaterialInfoData } = useQuery(
    ['materialInfoList', id],
    () => fetchMaterialInfoView(String(id && id)),
    {
      enabled: !!router.query.id,
    }
  );

  return (
    <FormWrap>
      <DetailPageLayout tabData={tabData} title="제품 상세 정보">
        <h2>원재료 목록</h2>
        <TableWrap>
          <Table className="basic" css={pageStyle}>
            <thead>
              <tr>
                <th>원재료명</th>
                <th>수량</th>
                <th>제조사명</th>
                <th>원산지명</th>
                <th>원가</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>
                  <span className="hiddenZoneV">.</span>
                </td>
                <td>
                  <span className="box_total_price">
                    <span className="label">원가 총액</span>
                    <span className="price">
                      {MaterialInfoData?.recipe_info_material_cost.toLocaleString(
                        'ko-KR'
                      )}
                    </span>
                  </span>
                </td>
              </tr>
              {MaterialInfoData?.recipe_material_list?.map(
                (materialInfo: IMaterialInfoViewItem) => (
                  <tr key={materialInfo.material_info_idx}>
                    <td>
                      <span className="box_material_info_name">
                        <span className="thumb">
                          {materialInfo.material_image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={String(materialInfo.material_image)}
                              alt=""
                            />
                          ) : (
                            <Pic size={20} />
                          )}
                        </span>
                        {materialInfo.material_name_ko}
                      </span>
                    </td>
                    <td>
                      {materialInfo.recipe_material_quantity_value}
                      {materialInfo.evi_recipe_material_quantity_unit_str}
                    </td>
                    <td>{materialInfo.partner_company_name}</td>
                    <td>{materialInfo.evi_country_str}</td>
                    <td>{materialInfo.first_cost}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </TableWrap>
      </DetailPageLayout>
    </FormWrap>
  );
};

export default MaterialInfo;
