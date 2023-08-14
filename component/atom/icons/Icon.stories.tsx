/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import StoryLayout from '@ComponentFarm/modules/story_layout/StoryLayout';
import {
  ArrowDownFilled,
  Book,
  Browser,
  Calendar,
  Cross,
  Cube,
  Dashboard,
  Data,
  Down,
  Edit,
  Export,
  File,
  Flag,
  Layer,
  Menu,
  More,
  Pic,
  Plus,
  Product,
  Search,
  Semantic,
  Setting1,
  Setting2,
  Sync,
  UBuilding,
  Up,
} from '.';
import Alert from './Alert';

const meta: Meta = {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;

const Icon: Story<any> = ({ darkMode, ...args }) => (
  <StoryLayout darkMode={darkMode}>
    <Alert />
    <ArrowDownFilled />
    <Book />
    <Browser />
    <Calendar />
    <Cross />
    <Cube />
    <Dashboard />
    <Data />
    <Down />
    <Edit />
    <Export />
    <File />
    <Flag />
    <Layer />
    <Menu />
    <More />
    <Pic />
    <Plus />
    <Product />
    <Search />
    <Semantic />
    <Setting1 />
    <Setting2 />
    <Sync />
    <UBuilding />
    <Up />
  </StoryLayout>
);

export const Default = Icon.bind({});
