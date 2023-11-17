import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Pic } from '@ComponentFarm/atom/icons';

export const DemoWrap = styled.div`
  position: relative;
  width: 60vw;
  height: 800px;
  max-height: 800px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px;
`;

export const DemoBox = styled.div`
  position: absolute;
  width: 800px;

  .bar {
    width: 100%;
    position: absolute;
    right: -800px;
    opacity: 0;
    animation: fadeInMove 1s forwards;
  }

  @keyframes fadeInMove {
    0% {
      right: -800px;
      opacity: 0;
    }
    100% {
      right: 0;
      opacity: 1;
    }
  }
`;

export const NumberBarItem = styled.div`
  display: flex;
  align-items: center;
  height: 7.4rem;
  margin-bottom: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-neutral90);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background: var(--color-white);

  .txt_number {
    display: flex;
    width: 6.6rem;
    padding: 0 2.4rem;
    flex-direction: column;
    justify-content: center;
    color: var(--color-neutral50);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 1.76rem */
  }

  .thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.7rem;
    width: 5rem;
    height: 5rem;
    margin: 0 2.4rem;
    padding: 1.3rem;
    border-radius: 0.8rem;
    background: var(--color-neutral90);
  }

  .box1 {
    width: 50%;
    padding: 0 2.4rem;
    font-weight: 400;
    line-height: 120%;
    .line1 {
      margin-bottom: 0.8rem;
      color: var(--color-neutral10);
      font-size: 1.4rem;
    }
    .line2 {
      color: var(--color-neutral-50, #747474);
      font-size: 1.2rem;
    }
  }
  .box2 {
    margin: 0 1rem 0 auto;
    padding: 0 2.4rem;
    text-align: right;

    .line1 {
      margin-bottom: 0.6rem;
      color: var(--color-neutral10);
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 110%;
    }

    .line2 {
      color: var(--color-green50);
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 120%;
    }
  }
`;

const Index = () => {
  const [bars, setBars] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const intervalIdRef = useRef<number | null>(null);
  const pannRef = useRef<HTMLDivElement>(null);
  const demoBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    intervalIdRef.current = window.setInterval(() => {
      if (bars.length < 20) {
        const newItem = {
          id: bars.length + 1,
          imgUrl: '', // 예시 이미지 URL
          product_name: `제품 ${bars.length + 1}`,
          category: '카테고리',
          time: '11시 20분',
          descTime: '+시간',
        };
        setData(currentData => [...currentData, newItem]);
        setBars(currentBars => [...currentBars, newItem]);
      } else {
        clearInterval(intervalIdRef.current ?? undefined);
      }
    }, 1000);

    return () => clearInterval(intervalIdRef.current ?? undefined);
  }, [bars.length]);

  useEffect(() => {
    const demoBox = demoBoxRef.current;
    const pann = pannRef.current;
    if (!demoBox || !pann) return;

    const barTotalHeight = 98; // 7.4rem 높이 + 2.4rem 마진 = 98px (1rem = 10px)
    if (bars.length * barTotalHeight > 800) {
      demoBox.style.bottom = `${
        -barTotalHeight * (bars.length - Math.ceil(800 / barTotalHeight))
      }px`;
      pann.style.height = `${800 + barTotalHeight * bars.length}px`;
    }
  }, [bars]);

  return (
    <DemoWrap>
      <div ref={pannRef} className="pann" style={{ height: 800 }} />
      <DemoBox ref={demoBoxRef}>
        {bars.map((bar, index) =>
          data[index] ? (
            <NumberBarItem
              key={index}
              className="bar"
              style={{ bottom: `${index * 98}px` }}
            >
              <div className="txt_number">{data[index].id}</div>
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
                <div className="line2">{data[index].category}</div>
              </div>
              <div className="box2">
                <div className="line1">{data[index].time}</div>
                <div className="line2"> </div>
              </div>
            </NumberBarItem>
          ) : null
        )}
      </DemoBox>
    </DemoWrap>
  );
};

export default Index;
