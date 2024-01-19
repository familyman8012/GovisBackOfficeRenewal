import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import More from '@ComponentFarm/atom/icons/More';

const OptionDropdownStyle = styled.div`
  position: relative;
  display: inline-flex;

  .dropdown-list {
    position: absolute;
    top: calc(100% + 1rem);
    right: -1.5rem;
    display: flex;
    flex-direction: column;
    width: 9rem;
    padding: 0.6rem 0;
    border-radius: 0.4rem;
    border: 1px solid var(--color-neutral90);
    background: var(--color-gray1);
    color: var(--color-neutral10);
    z-index: 2;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);

    button {
      font-size: 1.4rem;
      line-height: 1.2;
      padding: 0.8rem 1.2rem;
      cursor: pointer;
      background: transparent;
      appearance: none;
      text-align: left;

      &:hover,
      &:active {
        background: var(--color-gray2);
      }
    }
  }
`;

interface TabDropdownProps {
  actions?: React.ReactNode;
}

const OptionDropdown = ({ actions }: TabDropdownProps) => {
  const actionsWrapperRef = React.useRef<HTMLDivElement>(null);
  const [dropDown, setDropDown] = React.useState(false);

  // dropdown actions 영역 버튼 클릭 시 닫기
  useEffect(() => {
    if (!actionsWrapperRef.current || !dropDown) return () => {};

    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button')) {
        requestAnimationFrame(() => setDropDown(false));
      }
    };

    actionsWrapperRef.current.addEventListener('click', handleButtonClick, {
      capture: true,
    });

    return () =>
      actionsWrapperRef.current?.removeEventListener(
        'click',
        handleButtonClick,
        {
          capture: true,
        }
      );
  }, [dropDown]);

  // dropdown 바깥쪽 클릭 시 닫기
  useEffect(() => {
    if (!dropDown) return () => {};

    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown')) {
        setDropDown(false);
      }
    };

    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  }, [dropDown]);

  return (
    <OptionDropdownStyle className="dropdown">
      <button
        type="button"
        className="icon-btn"
        onClick={() => setDropDown(val => !val)}
      >
        <More />
      </button>
      {dropDown && (
        <div className="dropdown-list" ref={actionsWrapperRef}>
          {actions}
        </div>
      )}
    </OptionDropdownStyle>
  );
};

export default OptionDropdown;
