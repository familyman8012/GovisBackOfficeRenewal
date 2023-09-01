import { FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Badge } from '../Badge/Badge';

export interface TabProps {
  title: string;
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const TabWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  height: 3.3rem;
  padding: 0 1rem 0.8rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
  color: ${({ isActive }) => (isActive ? 'var(--color-blue)' : '#667085')};
  cursor: pointer;

  .badge {
    margin-left: 8px;
  }

  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-blue);
  }
`;

export const Tab: FC<TabProps> = ({
  title,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <TabWrapper isActive={isActive} onClick={onClick}>
      {title}
      {!!label && (
        <Badge color={isActive ? 'purple' : 'gray'} size="sm">
          {label}
        </Badge>
      )}
      {isActive ? (
        <motion.div
          className="underline"
          layoutId=""
          transition={{ duration: 0.2 }}
        />
      ) : null}
    </TabWrapper>
  );
};

export interface TabsProps {
  tabs: TabProps[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}

const TabsWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 2.4rem;
  border-bottom: 1px solid var(--color-neutral90);
`;

export const Tabs: FC<TabsProps> = ({ tabs, activeTabIndex, onTabChange }) => {
  const handleTabClick = (index: number) => {
    onTabChange(index);
  };

  return (
    <TabsWrapper>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.title}
          title={tab.title}
          label={tab.label}
          isActive={index === activeTabIndex}
          onClick={() => handleTabClick(index)}
        />
      ))}
    </TabsWrapper>
  );
};
