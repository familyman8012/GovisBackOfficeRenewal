import React, { useRef, useState } from 'react';
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
  const gridRef = useRef<MultiGrid>(null);

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
        return gridSize.width * 0.13;
      }
      // 나머지 열은 전체 너비의 80%를 나머지 열 수로 나눔
      const remainingWidth = gridSize.width * 0.77;
      const remainingColumns = viewColumn - 2;

      return remainingWidth / remainingColumns;
    }

    if (index < 2) {
      // 첫 2개의 열은 각각 전체 너비의 20%
      return gridSize.width * 0.13;
    }
    // 나머지 열은 전체 너비의 80%를 나머지 열 수로 나눔
    const remainingWidth = gridSize.width * 0.77;

    return remainingWidth / 9;
  };

  return (
    <>
      <AutoSizer onResize={onResize}>
        {({ width, height }) => (
          <MultiGrid
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
              return (
                gridSize.height / viewRow +
                (gridSize.height / viewRow - thHeight) / viewRow +
                1
              );
            }}
            columnCount={viewColumn}
            rowCount={rowCount}
            // style={{ border: '1px solid #ddd' }}
            classNameTopLeftGrid="topLeftGrid"
            classNameBottomLeftGrid="bottomLeftGrid"
            classNameTopRightGrid="topRightGrid"
            classNameBottomRightGrid="bottomRightGrid"
            enableFixedColumnScroll
            enableFixedRowScroll
            hideTopRightGridScrollbar
            hideBottomLeftGridScrollbar
          />
        )}
      </AutoSizer>
    </>
  );
};

export default VirtualizedTable;
