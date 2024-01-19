/**
 * SalesTable 컴포넌트는 판매 테이블을 표시하는 React 컴포넌트입니다.
 *
 * @component
 * @param {Object[]} list - 판매 데이터 목록
 * @param {number} total - 총 판매 데이터 수
 * @param {boolean} [loading] - 로딩 상태 (기본값: false)
 * @param {Function} onBottomScroll - 스크롤이 하단에 도달했을 때 호출되는 콜백 함수
 * @returns {JSX.Element} SalesTable 컴포넌트
 */
import React, { useEffect, useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { debounce } from 'lodash';
import { ISalesKeyInFetchResponse } from '@InterfaceFarm/store-sales-keyin';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import SkeletonTh from '@ComponentFarm/atom/Skeleton/SkeletonTh';
import useCheckScroll from '@HookFarm/useCheckScroll';
import { SalesTableStyle, SalesTableWrap } from './style';
import useTableData from './useSalesTableData';

interface Props {
  list: ISalesKeyInFetchResponse['list'];
  total: ISalesKeyInFetchResponse['total'];
  loading?: boolean;
  onBottomScroll: () => void;
}

const SalesTable = ({ list, total, loading, onBottomScroll }: Props) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const { data, columns, state } = useTableData(list, total);

  const table = useReactTable({
    data,
    columns,
    state,
    getCoreRowModel: getCoreRowModel(),
  });

  const [hasScroll, isScrollLeft, isScrollRight] = useCheckScroll(wrapperRef);

  const lastDepthHeaders = useMemo(() => {
    const headerGroups = table.getHeaderGroups();
    return headerGroups[headerGroups.length - 1].headers;
  }, [columns]);

  //
  useEffect(() => {
    if (!wrapperRef.current) return () => {};

    const onScroll = debounce(() => {
      const bcr = wrapperRef.current?.getBoundingClientRect();
      if (!bcr) return;
      const isBottomVisible = bcr.bottom < window.innerHeight && bcr.bottom;

      if (isBottomVisible) {
        onBottomScroll?.();
      }
    }, 300);

    onScroll();
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [wrapperRef.current, onBottomScroll, list]);

  return (
    <SalesTableWrap ref={wrapperRef}>
      <SalesTableStyle
        className={`basic ${hasScroll ? 'has-scroll' : ''} ${
          isScrollLeft ? 'is-scroll-left' : ''
        } ${isScrollRight ? 'is-scroll-right' : ''}`}
      >
        <colgroup>
          {lastDepthHeaders.map(header => (
            <col key={header.id} width={header.getSize()} />
          ))}
        </colgroup>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                const pinned = header.column.getIsPinned();

                const isLeftLast =
                  table
                    .getLeftHeaderGroups()
                    ?.find(group => group.depth === headerGroup.depth)
                    ?.headers.at(-1)?.column.id === header.column.id;

                const isRightFirst =
                  table
                    .getRightHeaderGroups()
                    ?.find(group => group.depth === headerGroup.depth)
                    ?.headers[0]?.column.id === header.column.id;

                const headerTotalSize = headerGroup.headers.reduce(
                  (tot, otherHead) => tot + otherHead.getSize(),
                  0
                );

                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={`center ${
                      headerGroup.depth === 0 ? 'group-title' : ''
                    } ${pinned ? 'pinned' : ''} 
                    ${isLeftLast ? 'pinned-left-last' : ''} ${
                      isRightFirst ? 'pinned-right-first' : ''
                    }
                    `}
                    style={
                      pinned
                        ? pinned === 'left'
                          ? { left: header.getStart() }
                          : {
                              right:
                                headerTotalSize -
                                header.getSize() -
                                header.getStart(),
                            }
                        : undefined
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {loading ? (
            <SkeletonTh colLength={lastDepthHeaders.length} rowLength={10} />
          ) : list.length === 0 ? (
            <tr>
              <td colSpan={lastDepthHeaders.length}>
                <Empty>조회된 데이터가 없습니다.</Empty>
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const pinned = cell.column.getIsPinned();
                  const isLeftLast = cell.row
                    .getLeftVisibleCells()
                    .includes(cell, -1);

                  const isRightFirst =
                    cell.row.getRightVisibleCells().indexOf(cell) === 0;
                  const cellTotalSize = cell.row
                    .getVisibleCells()
                    .reduce(
                      (tot, rightCell) => tot + rightCell.column.getSize(),
                      0
                    );

                  return (
                    <td
                      key={cell.id}
                      className={`${
                        cell.id.includes('store_name') ? 'left' : 'center'
                      } ${pinned ? 'pinned' : ''} ${
                        isLeftLast ? 'pinned-left-last' : ''
                      } ${isRightFirst ? 'pinned-right-first' : ''}
                    `}
                      style={
                        pinned
                          ? pinned === 'left'
                            ? { left: cell.column.getStart() }
                            : {
                                right:
                                  cellTotalSize -
                                  cell.column.getSize() -
                                  cell.column.getStart(),
                              }
                          : undefined
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
        {!loading && list.length > 0 && (
          <tfoot>
            <tr>
              {table.getFooterGroups()?.[0].headers.map(header => {
                const pinned = header.column.getIsPinned();
                const footerGroup = header.headerGroup;
                const isLeftLast =
                  table
                    .getLeftFooterGroups()
                    ?.find(group => group.depth === footerGroup.depth)
                    ?.headers.at(-1)?.column.id === header.column.id;

                const isRightFirst =
                  table
                    .getRightFooterGroups()
                    ?.find(group => group.depth === footerGroup.depth)
                    ?.headers[0]?.column.id === header.column.id;

                const headerTotalSize = footerGroup.headers.reduce(
                  (tot, otherHead) => tot + otherHead.getSize(),
                  0
                );
                return (
                  <td
                    key={header.id}
                    className={`center ${pinned ? 'pinned' : ''} 
              ${isLeftLast ? 'pinned-left-last' : ''} ${
                isRightFirst ? 'pinned-right-first' : ''
              }
              `}
                    style={
                      pinned
                        ? pinned === 'left'
                          ? { left: header.getStart() }
                          : {
                              right:
                                headerTotalSize -
                                header.getSize() -
                                header.getStart(),
                            }
                        : undefined
                    }
                  >
                    {flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
                  </td>
                );
              })}
            </tr>
          </tfoot>
        )}
      </SalesTableStyle>
    </SalesTableWrap>
  );
};

export default SalesTable;
