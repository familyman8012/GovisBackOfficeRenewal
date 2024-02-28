import React, { useEffect, useRef, useState } from 'react';
import { AutoSizer, GridCellProps, MultiGrid } from 'react-virtualized';

interface VirtualizedTableProps {
  rowCount: number;
  thHeight: number;
  viewColumn?: number;
  viewRow?: number;
  fixedRowCount?: number;
  fixedColumnCount: number;
  cellRenderer: (props: GridCellProps) => React.ReactNode;
}

const VirtualizedTable = ({
  rowCount,
  // columnCount,
  thHeight,
  viewRow = 8,
  viewColumn = 9,
  fixedRowCount = 1,
  fixedColumnCount,
  cellRenderer,
}: VirtualizedTableProps) => {
  const [gridSize, setGridSize] = useState({ width: 0, height: 0 });
  const [key, setKey] = useState(0);
  const gridRef = useRef<MultiGrid>(null);

  useEffect(() => {
    // viewColumn 값이 변경될 때마다 키 상태를 업데이트하여 컴포넌트를 다시 마운트합니다.
    setKey(prevKey => prevKey + 1);
  }, [viewColumn]); // viewColumn을 의존성 배열에 추가합니다.

  const onResize = ({ width, height }: { width: number; height: number }) => {
    setGridSize({ width, height });
    if (gridRef.current) {
      gridRef.current.recomputeGridSize();
    }
  };

  const getColumnWidth = ({ index }: { index: number }) => {
    if (viewColumn <= 9) {
      if (index < 2) {
        // 첫 2개의 열은 각각 전체 너비의 20%
        return gridSize.width * 0.12;
      }
      // 나머지 열은 전체 너비의 80%를 나머지 열 수로 나눔
      const remainingWidth = gridSize.width * 0.78 - 48;
      const remainingColumns = viewColumn - 2;

      return remainingWidth / remainingColumns;
    }

    if (index < 1) {
      // 첫 2개의 열은 각각 전체 너비의 20%
      return gridSize.width * 0.12;
    }
    // 나머지 열은 전체 너비의 80%를 나머지 열 수로 나눔
    const remainingWidth = gridSize.width * 0.78;

    return remainingWidth / 8;
  };

  return (
    <>
      <AutoSizer onResize={onResize}>
        {({ width, height }) => (
          <MultiGrid
            key={key}
            ref={gridRef} // 참조 설정
            width={width}
            height={height}
            fixedColumnCount={fixedColumnCount}
            fixedRowCount={fixedRowCount}
            scrollToColumn={0}
            scrollToRow={0}
            cellRenderer={cellRenderer}
            columnWidth={getColumnWidth}
            rowHeight={({ index }: { index: number }) => {
              if (rowCount <= 7) {
                if (index === 0) {
                  return thHeight;
                }
                return 77;
              }
              if (index === 0) {
                return thHeight;
              }
              return 77;
            }}
            columnCount={viewColumn}
            rowCount={rowCount}
            // style={{ border: '1px solid #ddd' }}
            classNameTopLeftGrid="topLeftGrid"
            classNameBottomLeftGrid="bottomLeftGrid"
            classNameTopRightGrid="topRightGrid"
            classNameBottomRightGrid="bottomRightGrid"
          />
        )}
      </AutoSizer>
    </>
  );
};

export default VirtualizedTable;
