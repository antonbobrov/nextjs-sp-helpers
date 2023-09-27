import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TagName } from '.';

type TComponent = typeof TagName;

const meta: Meta<TComponent> = {
  title: 'TagName',
  tags: ['autodocs'],
};

export default meta;

const Component: StoryFn<TComponent> = ({ tagName, children, ...props }) => (
  <TagName {...props} tagName={tagName}>
    {children ?? 'Contents'}
  </TagName>
);

export const H1 = Component.bind({});
H1.args = {
  tagName: 'h1',
  children: 'H1 Contents',
};

export const Div = Component.bind({});
Div.args = {
  tagName: 'div',
  children: 'Div Contents',
};

export const Section = Component.bind({});
Section.args = {
  tagName: 'section',
  children: 'Section Contents',
};
