import dayjs from 'dayjs';

export const menuAnalyzeTabData = [
  {
    title: '매장별 현황',
    url: '/menu-analyze',
  },
];

const dayGeneration = (beforeDay: number) => {
  return dayjs().subtract(beforeDay, 'day').format('YYYY-MM-DD');
};

export const initialDay = {
  base_dt_start: dayGeneration(1),
  base_dt_finish: dayGeneration(1),
  comparison_dt_start: dayGeneration(2),
  comparison_dt_finish: dayGeneration(2),
};
