import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

export const DemoWrap = styled.div`
  position: relative;
  width: 100vw;
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
    right: -800px; // 박스 오른쪽 바깥에서 시작
    opacity: 0;
    border: 1px solid;
    animation: fadeInMove 1s forwards; // 애니메이션 적용
    text-align: center; // 텍스트 중앙 정렬
    line-height: 50px; // 라인 높이 설정
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

const Index = () => {
  const containerRef = useRef(null);
  const intervalIdRef = useRef(null);
  const pannRef = useRef(null); // pann 참조 추가

  useEffect(() => {
    intervalIdRef.current = setInterval(addBar, 1000);

    return () => clearInterval(intervalIdRef.current);
  }, []);

  function addBar() {
    const container = containerRef.current;
    const pann = pannRef.current; // pann 참조 사용
    const newBar = document.createElement('div');
    newBar.classList.add('bar');
    const barNumber = container.childNodes.length + 1;
    newBar.textContent = barNumber;
    container.appendChild(newBar);

    let bottom = 0;
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      bar.style.bottom = `${bottom}px`;
      bottom += 50;
    });

    // DemoBox의 bottom 값을 갱신
    // container.style.bottom = `${-50 * bars.length}px`;
    if (bars.length * 50 > 800) {
      container.style.bottom = `${-50 * (bars.length - 16)}px`;
      pann.style.height = `${800 + 50 * bars.length}px`;
    }

    // pann의 높이를 증가시켜 DemoWrap의 스크롤 범위 확장
    // if (pann) {
    //   pann.style.height = `${800 + 50 * bars.length}px`;
    // }

    if (
      container.scrollHeight - container.clientHeight - container.scrollTop <=
      50
    ) {
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }

    if (bars.length >= 20) {
      clearInterval(intervalIdRef.current);
    }
  }

  return (
    <DemoWrap>
      <div ref={pannRef} className="pann" style={{ height: 800 }} />
      <DemoBox ref={containerRef} id="container" style={{ bottom: 0 }} />
    </DemoWrap>
  );
};

export default Index;
