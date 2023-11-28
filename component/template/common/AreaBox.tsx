import { FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const AreaBoxWrap = styled.div`
  width: 100%;
  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 2px solid #e5e5e5;
  background: #fff;

  &.noPadding {
    padding: 0;
    padding-top: 2.4rem;

    .box_head {
      margin-bottom: 2.4rem;
      h2 {
        margin-bottom: 0;
        padding-left: 2.4rem;
      }
    }
  }

  & + .areaBox {
    margin-top: 3.2rem;
  }

  &.best .box_txt1 {
    &:not(:has(span:nth-of-type(2))),
    span:first-of-type {
      color: var(--color-green50);
    }
  }

  &.worst .box_txt1 {
    &:not(:has(span:nth-of-type(2))),
    span:first-of-type {
      color: var(--color-red50);
    }
  }

  .box_head {
    display: flex;
    align-items: center;
    margin-bottom: 3.2rem;
  }

  .head {
    padding: 0;

    h2 {
      display: flex;
      align-items: center;
      margin-bottom: 1.2rem;

      color: var(--color-neutral10);
      font-size: 1.8rem;
      font-weight: 700;

      .link_more {
        color: var(--color-neutral10);
        font-size: 1.4rem;
        font-weight: 500;
      }
    }

    .box_txt1 {
      margin: 0.8rem 0 1.2rem;

      &:not(:has(span:nth-of-type(2))),
      span:first-of-type {
        margin-bottom: 1.2rem;
        color: var(--color-neutral20);
        font-size: 3.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 4.32rem */
      }
      span:nth-of-type(2) {
        margin-left: 1.6rem;
        color: var(--color-green50);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.8rem;
        letter-spacing: -0.0144rem;
      }
    }

    .box_txt2 {
      line-height: 120%;
      &:not(:has(span:nth-of-type(2))),
      span:first-of-type {
        color: var(--color-neutral50);
        font-size: 1.4rem;
        font-weight: 500;
      }
      span:nth-of-type(2) {
        margin-left: 0.8rem;
        color: var(--color-green50);
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
  }
`;

export const GridAreaWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.6rem));
  gap: 3.2rem;

  .areaBox + .areaBox {
    margin-top: 0;
  }
`;

interface AreaBoxProps {
  title: string;
  moreLink?: string;
  txt1?: string | string[];
  txt2?: string | string[];
  className?: string;
  addFunc?: React.ReactNode;
  children: React.ReactNode;
}

export const AreaBox: FC<AreaBoxProps> = ({
  title,
  txt1,
  txt2,
  moreLink,
  className,
  addFunc,
  children,
}) => {
  return (
    <AreaBoxWrap className={`areaBox ${className}`}>
      <div className="box_head">
        <div className="head">
          <h2>
            <span>{title}</span>
            {moreLink && (
              <Link href={moreLink} className="link_more">
                더보기
              </Link>
            )}
          </h2>
          {txt1 && (
            <p className="box_txt1">
              {typeof txt1 === 'string'
                ? txt1
                : txt1?.map((el, i) => <span key={i}>{el}</span>)}
            </p>
          )}
          {txt2 && (
            <div className="box_txt2">
              {typeof txt2 === 'string'
                ? txt2
                : txt2?.map((el, i) => <span key={i}>{el}</span>)}
            </div>
          )}
        </div>
        {addFunc}
      </div>

      {children}
    </AreaBoxWrap>
  );
};
