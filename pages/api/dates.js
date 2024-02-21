// pages/api/dates.js
export default function handler(req, res) {
  const { page = 1, limit = 5 } = req.query; // 페이지와 limit을 쿼리에서 받아옵니다.

  // 날짜 데이터 생성 로직
  const dates = [];
  const startDate = new Date('2024-02-12'); // 시작 날짜
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < limit; i++) {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + (page - 1) * limit + i);
    dates.push(newDate.toISOString().substring(0, 10));
  }

  // 간단한 예제이므로, 실제 프로덕션에서는 DB에서 페이지네이션을 구현해야 합니다.
  res.status(200).json({ dates, nextPage: parseInt(page, 10) + 1 });
}
