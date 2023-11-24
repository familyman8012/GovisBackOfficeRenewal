import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Table, TableWrap } from '@ComponentFarm/common';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { menuListLayoutConfig } from '@ComponentFarm/template/menu/const';
import { ListHandlerStyle } from '@ComponentFarm/template/recipe/style';
import useQueryParams from '@HookFarm/useQueryParams';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

const MenuLinkPage = () => {
  const [params, updateParams] = useQueryParams({
    per_num: 10,
    current_num: 1,
  });

  return (
    <div>
      <LayoutTitleBoxWithTab {...menuListLayoutConfig} />
      <ListHandlerStyle />
      <TableWrap>
        <Table className="basic">
          <colgroup>
            <col width={getTableWidthPercentage(120)} />
            <col width={getTableWidthPercentage(400)} />
            <col width={getTableWidthPercentage(180)} />
            <col width={getTableWidthPercentage(180)} />
            <col width={getTableWidthPercentage(145)} />
          </colgroup>
          <thead>
            <tr>
              <th>NO.</th>
              <th>미확인 메뉴명</th>
              <th>주문 채널 수</th>
              <th>주문 매장 수</th>
              <th>메뉴 연결</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="empty">
                <td className="code">191833</td>
                <td>더 맛있는 페퍼로니 피자</td>
                <td>
                  <button type="button" className="link_popup">
                    3개
                  </button>
                </td>
                <td>
                  <button type="button" className="link_popup">
                    3개
                  </button>
                </td>
                <td>
                  <Button type="button">메뉴 연결</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={100}
        handlePageChange={current_num => updateParams({ current_num })}
      />
    </div>
  );
};

export default MenuLinkPage;
