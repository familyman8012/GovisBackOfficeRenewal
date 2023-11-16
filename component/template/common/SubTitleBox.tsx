import React, { FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

export const SubTitleBoxWrap = styled.div<{ hideUnderline?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 3.2rem 0;
  padding: ${props => (props.hideUnderline ? '2.4rem 0 0' : '2.4rem 0')};
  border-bottom: ${props =>
    props.hideUnderline ? '0' : '2px solid var(--color-gray6)'};

  h2 {
    margin-bottom: 0;
    padding: 0;
    font-size: 1.8rem;
    font-weight: bold;
    border-bottom: 0;
  }
  .desc {
    margin-left: 1.6rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-neutral50);
  }

  a {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 1.6rem;
    color: var(--color-neutral10);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;

    &:after {
      display: block;
      content: '';
      width: 1.6rem;
      height: 1.6rem;
      background: url('/images/common/arrow_right.svg') no-repeat left center /
        1.6rem;
    }
  }
`;

interface ISubTitleBoxProps {
  title: string;
  desc?: string;
  moreLink?: string;
  hideUnderline?: boolean;
}

const SubTitleBox: FC<ISubTitleBoxProps> = ({
  title,
  desc,
  moreLink,
  hideUnderline,
}) => {
  return (
    <SubTitleBoxWrap hideUnderline={hideUnderline}>
      <h2>{title}</h2>
      <em className="desc">{desc}</em>
      {moreLink && <Link href="/">더보기</Link>}
    </SubTitleBoxWrap>
  );
};

export default SubTitleBox;
