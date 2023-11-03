import { FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const AreaBoxWrap = styled.div`
  width: 100%;
  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 2px solid #e5e5e5;
  background: #fff;

  h2 {
    display: flex;
    align-items: center;

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
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 110%;
      color: var(--color-neutral20);

      &.best {
        color: var(--color-green50);
      }
      &.worst {
        color: var(--color-red50);
      }
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
      font-weight: 400;
    }
    span:nth-of-type(2) {
      margin-left: 0.8rem;
      color: var(--color-green50);
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
`;

interface AreaBoxProps {
  title: string;
  moreLink?: string;
  txt1?: string | string[];
  txt2?: string | string[];
  className?: string;
  children: React.ReactNode;
}

export const AreaBox: FC<AreaBoxProps> = ({
  title,
  txt1,
  txt2,
  moreLink,
  className,
  children,
}) => {
  return (
    <AreaBoxWrap className={className}>
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
      {children}
    </AreaBoxWrap>
  );
};
