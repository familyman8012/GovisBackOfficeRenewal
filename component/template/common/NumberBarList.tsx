import React from 'react';
import styled from '@emotion/styled';
import Pic from '@ComponentFarm/atom/icons/Pic';

interface NumberBarListProps {
  data: any;
}

export const NumberBarListWrap = styled.div`
  li {
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
  }
`;

// const data = [
//   {
//     id: 1,
//     imgUrl: '',
//     product_name: '오리지널 페페로니 피자',
//     category: '피자',
//     time: '01분 23초',
//     descTime: '+4초',
//   },
//   {
//     id: 2,
//     imgUrl: '',
//     product_name: '오리지널 불고기 피자',
//     category: '피자',
//     time: '02분 23초',
//     descTime: '+3초',
//   },
// ];

export const NumberBarList = ({ data }: NumberBarListProps) => {
  if (!data) {
    return null; // data가 유효하지 않으면 null을 반환
  }

  console.log('data', data);

  const keysArray = Object.keys(data[0]);

  return (
    <NumberBarListWrap className="area_numberBar">
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>
            <div className="txt_number">
              {item[keysArray[0]] < 10
                ? `0${item[keysArray[0]]}`
                : item[keysArray[0]]}
            </div>
            <div className="thumb">
              {!item[keysArray[1]] ? (
                <Pic />
              ) : (
                <img src={item[keysArray[1]]} alt="" />
              )}
              {/* 이 부분에서 imgUrl을 사용하여 이미지를 렌더링할 수 있습니다. */}
            </div>
            <div className="box1">
              <div className="line1">{item[keysArray[2]]}</div>
              <div className="line2">{item[keysArray[3]]}</div>
            </div>
            <div className="box2">
              <div className="line1">{item[keysArray[4]]}</div>
              <div className="line2">{item[keysArray[5]]}</div>
            </div>
          </li>
        ))}
      </ul>
    </NumberBarListWrap>
  );
};
