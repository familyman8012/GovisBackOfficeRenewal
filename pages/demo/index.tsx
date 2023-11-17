import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import Pic from '@ComponentFarm/atom/icons/Pic';
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  // 랜덤 시간 생성 함수
  const getRandomTime = (index: any) => {
    const minutesArray = ['00', '10', '20', '30', '40', '50'];
    // 오전 11시부터 오후 8시 사이의 시간을 계산
    let hour = 11 + Math.floor(index / 2);
    const minuteIndex = index % minutesArray.length;
    const minute = minutesArray[minuteIndex];
    let period = '오전';

    if (hour > 12) {
      hour -= 12;
      period = '오후';
    }

    return `${period} ${hour}:${minute}`;
  };

  useEffect(() => {
    intervalIdRef.current = setTimeout(
      () => {
        setBars((currentBars: any) => {
          if (currentBars.length < 50) {
            // 데이터 배열에서 랜덤한 항목 선택
            const randomIndex = Math.floor(Math.random() * menuItem.length);
            const selectedItem = menuItem[randomIndex];

            const newItem = {
              id: currentBars.length + 1,
              imgUrl: selectedItem?.imgUrl,
              product_name: selectedItem?.name,
              time: `${getRandomTime(currentBars?.length)}`,
            };

            setData((currentData: any) => [...currentData, newItem]);
            return [...currentBars, newItem];
          }
          clearInterval(intervalIdRef.current);
          return currentBars;
        });
      },
      Math.floor(Math.random() * (5000 - 1000 + 1)) + 2000
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

  return (
    <Content>
      {/* <TitleArea title="매장 실시간 주문 현황" />
      <Tabs
        id="product"
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      /> */}

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
        매장 실시간 주문 현황
        <div className="circle" />
      </h2>
      <div
        css={css`
          margin-top: 10px;
        `}
      >
        광화문 매장 : 현재 시간 오후 07시 27분 / 총 {bars.length} 주문
      </div>
      <div
        css={css`
          margin-top: 24px;
        `}
      />
      <DemoWrap>
        <div ref={pannRef} className="pann" style={{ height: 100 }} />
        <DemoBox ref={demoBoxRef}>
          {bars.map((bar: any, index: any) => (
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
                {/* <div className="line2">{data[index].price}</div> */}
              </div>
            </NumberBarItem>
          ))}
        </DemoBox>
      </DemoWrap>
    </Content>
  );
};

export default Index;
