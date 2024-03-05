import dayjs from 'dayjs';

// 수정된 목업 데이터 생성 함수

const generateMockSalesData = (page, limit = 20) => {
  const totalStores = 200; // 고정된 매장 수
  const salesData = [];
  const startYear = 2024;
  const startDate = dayjs(`${startYear}-01-01`);
  const isLeapYear =
    startYear % 400 === 0 || (startYear % 4 === 0 && startYear % 100 !== 0);
  const maxDays = isLeapYear ? 366 : 365;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < totalStores; i++) {
    const daily_sales_list = Array.from({ length: limit }, (_, index) => {
      const salesDay = startDate.add((page - 1) * limit + index, 'day');
      // startDate부터 salesDay까지의 일수 차이 계산
      const diffDays = salesDay.diff(startDate, 'day') + 1; // +1을 하는 이유는 시작일도 포함하기 때문

      if (diffDays > maxDays) {
        return null; // 365일(또는 366일)을 넘어서는 날짜는 생성하지 않음
      }
      return {
        sales_day: salesDay.format('MM-DD'),
        sales_amount: Math.floor(Math.random() * 1000),
      };
    }).filter(Boolean); // null 값 제거

    salesData.push({
      store_idx: i + 1,
      store_name: `매장${i + 1}`,
      total_sales_amount: Math.floor(Math.random() * 10000),
      daily_sales_list,
    });
  }

  return salesData;
};

export default function handler(req, res) {
  const page = parseInt(req.query.page || '1', 10);

  const salesData = generateMockSalesData(page);

  // 최대 페이지 계산 (날짜 기준)
  const maxPage = Math.ceil(365 / 20); // 여기서는 365를 기본값으로 사용

  res.status(200).json({
    nextPage: page < maxPage ? page + 1 : null,
    list: salesData,
  });
}
