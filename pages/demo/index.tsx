/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
// @ts-nocheck
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { css } from '@emotion/react';
import Pic from '@ComponentFarm/atom/icons/Pic';
import Spinner from '@ComponentFarm/atom/Spinner/Spinner';
import { Content } from '@ComponentFarm/common';
import {
  DemoBox,
  DemoWrap,
  NumberBarItem,
  menuItem,
} from '@ComponentFarm/template/demo/const';

const Index = () => {
  const [bars, setBars] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const intervalIdRef = useRef<any>(null);
  const pannRef = useRef<any>(null);
  const demoBoxRef = useRef<any>(null);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    const total = bars.reduce((acc, bar) => acc + (bar.price || 0), 0);
    setTotalSales(total);
  }, [bars]);

  const createTimeArray = () => {
    const timeArray = [];

    // 오전 11시 00분부터 11시 59분까지
    for (let m = 0; m < 60; m++) {
      timeArray.push(`오전 11:${m < 10 ? `0${m}` : m}`);
    }

    // 오후 12시 00분부터 12시 59분까지
    for (let m = 0; m < 60; m++) {
      timeArray.push(`오후 12:${m < 10 ? `0${m}` : m}`);
    }

    // 오후 1시 00분부터 오후 3시 59분까지
    for (let h = 1; h <= 3; h++) {
      for (let m = 0; m < 60; m++) {
        timeArray.push(`오후 ${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}`);
      }
    }

    // 배열이 이미 정렬되어 있으므로 추가적인 정렬 과정은 필요 없음

    return timeArray;
  };

  const timeArray = createTimeArray(); // 시간 배열 생성

  useEffect(() => {
    intervalIdRef.current = setTimeout(
      () => {
        setBars((currentBars: any) => {
          if (currentBars.length < 500) {
            // 데이터 배열에서 랜덤한 항목 선택
            const randomIndex = Math.floor(Math.random() * menuItem.length);
            const selectedItem = menuItem[randomIndex];

            const newItem = {
              id: currentBars.length + 1,
              imgUrl: selectedItem?.imgUrl,
              product_name: selectedItem?.name,
              time: timeArray[currentBars.length],
              price: selectedItem?.price,
            };

            setData((currentData: any) => [...currentData, newItem]);
            return [...currentBars, newItem];
          }
          clearInterval(intervalIdRef.current);
          return currentBars;
        });
      },
      bars.length < 1
        ? 300
        : Math.floor(Math.random() * (5000 - 1000 + 1)) + 2000
    );

    return () => clearInterval(intervalIdRef.current);
  }, [bars.length]);

  useEffect(() => {
    const demoBox = demoBoxRef.current;
    const pann = pannRef.current;
    if (bars.length * 100 > 100) {
      demoBox.style.bottom = `${-100 * (bars.length - 8)}px`;
      pann.style.height = `${800 + 100 * bars.length}px`;
    }
  }, [bars]);

  const getCurrentTime = () => {
    if (bars.length > 0) {
      return bars[bars.length - 1].time;
    }
    return '오후 10:27'; // 기본 시간 설정
  };

  const [topItemsData, setTopItemsData] = useState([]);

  useEffect(() => {
    // 판매 항목별 통계 계산
    const calculateSalesStats = () => {
      const salesStats = {};

      data.forEach(bar => {
        if (!salesStats[bar.product_name]) {
          salesStats[bar.product_name] = {
            count: 0,
            totalSales: 0,
            imgUrl: bar.imgUrl,
          };
        }
        salesStats[bar.product_name].count += 1;
        salesStats[bar.product_name].totalSales += bar.price;
      });

      return salesStats;
    };

    const salesStats = calculateSalesStats();

    // 상위 5개 판매 항목 추출

    const topItems = Object.entries(salesStats)
      .sort((a, b) => b[1].totalSales - a[1].totalSales)
      .slice(0, 5)
      .map(([name, { count, totalSales, imgUrl }], index) => ({
        rank: index + 1,
        name,
        count,
        totalSales,
        imgUrl,
      }));

    // 필요한 경우, topItems를 상태에 저장하거나 다른 로직을 수행
    setTopItemsData(bars.length < 4 ? null : topItems);
  }, [bars.length]); // bars 배열이 변경될 때마다 실행

  const [analysisTable, setAnalysisTable] = useState([
    {
      id: 1,
      menuName: '오리지널 페퍼로니 피자',
      price: 10900,
      count: 30,
    },
    {
      id: 2,
      menuName: '매니악 페퍼로니 피자',
      price: 11700,
      count: 13,
    },
    {
      id: 3,
      menuName: '스테이크 피자',
      price: 13000,
      count: 12,
    },
    {
      id: 4,
      menuName: '슈퍼 콤비네이션 피자',
      price: 11900,
      count: 17,
    },
    {
      id: 5,
      menuName: '베이컨 포테이토 피자',
      price: 11700,
      count: 15,
    },
    {
      id: 6,
      menuName: 'K-불고기 피자',
      price: 11900,
      count: 13,
    },
    {
      id: 7,
      menuName: '허니 고르곤졸라 피자',
      price: 10400,
      count: 11,
    },
    {
      id: 8,
      menuName: '달콤 고구마 피자',
      price: 11400,
      count: 14,
    },
  ]);
  const [animatingItemId, setAnimatingItemId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalysisTable(prevTable => {
        const tableCopy = [...prevTable];
        const randomIndex = Math.floor(Math.random() * tableCopy.length);
        const updatedItem = tableCopy[randomIndex];

        updatedItem.count += 1;
        setAnimatingItemId(updatedItem.id); // 변경되는 항목의 ID 설정

        // 전체 매출 계산 및 매출 비율 업데이트
        const totalRevenue = tableCopy.reduce(
          (acc, item) => acc + item.price * item.count,
          0
        );

        return tableCopy.map(item => ({
          ...item,
          salesPercentage: (
            ((item.price * item.count) / totalRevenue) *
            100
          ).toFixed(0),
          isAnimating: item.id === updatedItem.id, // 현재 변경되는 항목에만 isAnimating 적용
        }));
      });

      // 일정 시간 후에 animatingItemId를 초기화
      setTimeout(() => {
        setAnimatingItemId(null);
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 전체 매출 계산
    const totalRevenue = analysisTable.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    // 각 제품의 매출 비율 계산
    const updatedAnalysisTable = analysisTable.map(item => ({
      ...item,
      salesPercentage: (
        ((item.price * item.count) / totalRevenue) *
        100
      ).toFixed(0),
    }));

    setAnalysisTable(updatedAnalysisTable);
  }, [bars]); // bars 배열이 변경될 때마다 실행

  return (
    <Content>
      <img src="/images/character.png" />
      {/* <TitleArea title="매장 실시간 주문 현황" />
      <Tabs
        id="product"
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      /> */}
      <div
        css={css`
          display: flex;
          width: 100vw;
          align-items: center;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            display: flex;
            width: 1385px;
          `}
        >
          <div>
            <div
              css={css`
                display: flex;
                width: 732px;
                align-items: center;
                border-bottom: 1px solid #efefef;
                padding-bottom: 24px;
              `}
            >
              <div>
                <h2
                  css={css`
                    @keyframes fadeInOut {
                      0%,
                      100% {
                        opacity: 0;
                      }
                      50% {
                        opacity: 1;
                      }
                    }
                    display: flex;

                    font-size: 20px;
                    font-weight: bold;

                    .circle {
                      margin-top: 5px;
                      margin-left: 10px;
                      width: 7px; /* 원의 크기 */
                      height: 7px; /* 원의 크기 */
                      background-color: green; /* 원의 색상 */
                      border-radius: 50%; /* 원 형태를 만들기 위해 */
                      animation: fadeInOut 2s infinite; /* 애니메이션 적용 */
                    }
                  `}
                >
                  실시간 매장 주문 현황
                  <div className="circle" />
                </h2>
                <div
                  css={css`
                    margin-top: 10px;
                  `}
                >
                  광화문 매장 : 현재 시간 {getCurrentTime()} / 총 {bars.length}{' '}
                  주문
                </div>
              </div>
              <span
                css={css`
                  margin-left: auto;
                  font-size: 16px;
                  font-weight: bold;
                `}
              >
                총 매출 {totalSales.toLocaleString()}원
              </span>
            </div>
            <div
              css={css`
                margin-top: 24px;
              `}
            />
            <DemoWrap>
              <div ref={pannRef} className="pann" style={{ height: 100 }} />
              <DemoBox ref={demoBoxRef}>
                {bars.length > 0 ? (
                  bars.map((bar: any, index: any) => (
                    <NumberBarItem
                      key={index}
                      className="bar"
                      style={{ bottom: `${index * 100}px` }}
                    >
                      <div className="txt_number">{index + 1}</div>
                      <div className="thumb">
                        {!data[index].imgUrl ? (
                          <Pic />
                        ) : (
                          <img src={data[index].imgUrl} alt="" />
                        )}
                        {/* 이 부분에서 imgUrl을 사용하여 이미지를 렌더링할 수 있습니다. */}
                      </div>
                      <div className="box1">
                        <div className="line1">{data[index].product_name}</div>
                        <div className="line2">광화문 글로벌 본사</div>
                      </div>
                      <div className="box2">
                        <div className="line1">{data[index].time}</div>
                        <div className="line2">
                          {`${data[index].price.toLocaleString()}원`}
                        </div>
                      </div>
                    </NumberBarItem>
                  ))
                ) : (
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      width: 100%;
                      height: 100%;
                    `}
                  >
                    <Spinner variant="beat" />
                  </div>
                )}
              </DemoBox>
            </DemoWrap>
          </div>
          <div
            css={css`
              margin-left: 100px;
              border-left: 1px solid #e5e5e5;
              padding-left: 50px;
            `}
          >
            <div
              css={css`
                width: 500px;
                border-bottom: 1px solid #efefef;
                padding-bottom: 24px;
              `}
            >
              <div>
                <h2
                  css={css`
                    @keyframes fadeInOut {
                      0%,
                      100% {
                        opacity: 0;
                      }
                      50% {
                        opacity: 1;
                      }
                    }
                    display: flex;

                    font-size: 20px;
                    font-weight: bold;

                    .circle {
                      margin-top: 5px;
                      margin-left: 10px;
                      width: 7px; /* 원의 크기 */
                      height: 7px; /* 원의 크기 */
                      background-color: green; /* 원의 색상 */
                      border-radius: 50%; /* 원 형태를 만들기 위해 */
                      animation: fadeInOut 2s infinite; /* 애니메이션 적용 */
                    }
                  `}
                >
                  실시간 매출 상위 5
                  <div className="circle" />
                </h2>
                <div
                  css={css`
                    margin-top: 10px;
                  `}
                >
                  <span css={css``}>
                    광화문 매장 / 11월 19일 {getCurrentTime()}
                  </span>
                </div>
              </div>
            </div>
            <table
              css={css`
                table {
                  width: 100%;
                }
                th {
                  color: var(--color-blue-gray-50, #5a6376);
                  font-family: Pretendard;
                  font-size: 13px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 120%;
                  padding: 16px 0;
                }

                td {
                  padding: 12px;
                  &:not(.product-name) {
                    text-align: center;
                  }
                }
              `}
            >
              <colgroup>
                <col width="30" />
                <col width="300" />
                <col width="50" />
                <col width="120" />
              </colgroup>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>제품명</th>
                  <th>판매수량</th>
                  <th>합계</th>
                </tr>
              </thead>
              <tbody>
                {topItemsData?.length > 0 ? (
                  topItemsData?.map(item => (
                    <tr key={item.rank}>
                      <td>{item.rank}</td>
                      <td className="product-name">
                        <div
                          css={css`
                            display: flex;
                            align-items: center;
                            margin-left: 50px;
                          `}
                        >
                          <span>
                            <img
                              src={item.imgUrl}
                              alt={item.name}
                              style={{ width: '50px' }}
                            />
                          </span>
                          <span
                            css={css`
                              margin-left: 10px;
                            `}
                          >
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td>{item.count}</td>
                      <td>{item.totalSales.toLocaleString()}원</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>
                      <div
                        css={css`
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          width: 100%;
                          height: 100%;
                          padding-top: 10px;
                        `}
                      >
                        {bars?.length > 0 && <Spinner />}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div
          css={css`
            width: 1385px;
          `}
        >
          <h2
            css={css`
              @keyframes fadeInOut {
                0%,
                100% {
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
              }
              display: flex;

              font-size: 20px;
              font-weight: bold;
              margin-top: 100px;
              padding-top: 100px;
              border-top: 1px solid #efefef;

              .circle {
                margin-top: 5px;
                margin-left: 10px;
                width: 7px; /* 원의 크기 */
                height: 7px; /* 원의 크기 */
                background-color: green; /* 원의 색상 */
                border-radius: 50%; /* 원 형태를 만들기 위해 */
                animation: fadeInOut 2s infinite; /* 애니메이션 적용 */
              }
            `}
          >
            광화문 글로벌 본사점 매출 분석
            <div className="circle" />
          </h2>
          <div
            css={css`
              margin-top: 32px;

              th {
                height: 48px;
                border-bottom: 1px solid #b2b2b2;
              }
              td {
                height: 78px;
              }
              th,
              td {
                text-align: center;
              }
              .num {
                overflow: hidden;
                color: #969492;

                text-overflow: ellipsis;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 110%; /* 1.54rem */
              }
              .product-name {
                padding-left: 10px;
                text-align: left;
              }
              .ratePercent {
                color: var(--color-green-50, #14804a);
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 120%; /* 1.68rem */
                &.on {
                  text-decoration: underline;
                  font-weight: bold;
                }
              }
              .on {
                &:not(.ratePercent) {
                  color: #ff4600;
                  font-weight: bold;
                }
              }
            `}
          >
            <table>
              <colgroup>
                <col width="45" />
                <col width="540" />
                <col width="200" />
                <col width="200" />
                <col width="200" />
                <col width="200" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span className="hiddenZoneV">.</span>
                  </th>
                  <th>메뉴명</th>
                  <th>판매가</th>
                  <th>판매 수</th>
                  <th>총 매출</th>
                  <th>매출 비율</th>
                </tr>
              </thead>
              <tbody>
                {analysisTable.map(el => (
                  <tr key={el.id}>
                    <td className="num">{el.id}</td>
                    <td className="product-name">{el.menuName}</td>
                    <td>{el.price}원</td>
                    <td className={el.id === animatingItemId ? 'on' : ''}>
                      <CountUp end={el.count} duration={1.5} separator="," />개
                    </td>
                    <td className={el.id === animatingItemId ? 'on' : ''}>
                      <CountUp
                        end={el.price * el.count}
                        duration={1.5}
                        separator=","
                      />
                      원
                    </td>
                    <td
                      className={`ratePercent ${
                        el.id === animatingItemId ? 'on' : ''
                      }`}
                    >
                      ({' '}
                      <CountUp
                        end={el.salesPercentage}
                        duration={1.5}
                        separator=","
                      />
                      % )
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Index;
Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <div className="app__wrapper">{page}</div>
    </>
  );
};
