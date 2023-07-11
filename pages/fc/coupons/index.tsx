import { useQuery } from "react-query";
import Pagination from "react-js-pagination";
import styled from "@emotion/styled";
import Link from "next/link";
import useQueryParams from "@/src/hook/useQueryParams";
import { fetchCouponFindAll } from "@/src/api/coupon";
import { useRouter } from "next/router";

function CouponsList() {
  const router = useRouter();
  const [params, updateParams, toggleSort] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  const { refetch, data, isLoading } = useQuery(["couponList", params], () =>
    fetchCouponFindAll(params)
  );

  const handleStatusChange = (e: any) => {
    updateParams({ search_status: e.target.value });
  };

  const handleCouponTypeChange = (e: any) => {
    updateParams({ search_coupon_type: e.target.value });
  };

  const handleSortChange = (field: any) => () => {
    toggleSort(field);
  };

  const handlePageChange = (pageNumber: number) => {
    updateParams({ page: pageNumber });
  };

  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <label>상태: </label>
        <select
          onChange={handleStatusChange}
          value={params.search_status || ""}
        >
          <option value="">전체</option>
          <option value="0">시행 전</option>
          <option value="1">시행 중</option>
          <option value="2">만료</option>
        </select>

        <label>쿠폰 유형: </label>
        <select
          onChange={handleCouponTypeChange}
          value={params.search_coupon_type || ""}
        >
          <option value="">전체</option>
          <option value="0">상품</option>
          <option value="1">할인율</option>
          <option value="2">할인액</option>
        </select>
      </div>
      <div>
        <Link href="/fc/coupons/add?from=back">등록</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              NO.
              <button onClick={handleSortChange("idx")}>Sort</button>
            </th>
            <th>시행 상태</th>
            <th>
              쿠폰명
              <button onClick={handleSortChange("coupon_name")}>Sort</button>
            </th>
            <th>알림 유형</th>
            <th>쿠폰 유형</th>
            <th>쿠폰현황</th>
            <th>
              시행기간
              <button onClick={handleSortChange("use_start_dt")}>Sort</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.list?.map((coupon: any, index: any) => (
            <tr
              key={index}
              onClick={() => router.push(`/fc/coupons/${coupon.coupon_idx}`)}
            >
              <td>{coupon.coupon_idx}</td>
              <td>
                {coupon.status === 0
                  ? "시행 전"
                  : coupon.status === 1
                  ? "시행 중"
                  : "만료"}
              </td>
              <td>{coupon.coupon_name}</td>
              <td>{coupon.notification_type === 1 ? "알림톡" : "일반"}</td>
              <td>
                {coupon.coupon_type === 0
                  ? "상품"
                  : coupon.coupon_type === 1
                  ? "할인율"
                  : "할인액"}
              </td>
              <td>{`${coupon.used_qty}/${coupon.coupon_qty}`}</td>
              <td>{`${coupon.use_start_dt} ~ ${coupon.use_end_dt}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationWrap>
        <Pagination
          activePage={Number(params.page)}
          itemsCountPerPage={Number(params.size)}
          totalItemsCount={Number(data?.count)}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
          activeClass="active"
        />
      </PaginationWrap>
    </>
  );
}

export default CouponsList;

export const PaginationWrap = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
