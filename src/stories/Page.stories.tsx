/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Jumbotron from '@/components/common/Jumbotron';

export default {
  title: 'Example/Page',
  component: Jumbotron,
} as ComponentMeta<typeof Jumbotron>;

const Template: ComponentStory<typeof Jumbotron> = (args) => (
  <Jumbotron {...args} />
);

export const TelbbyJumboTron = Template.bind({});
TelbbyJumboTron.args = {
  title: 'Talk',
  descList: ['프로젝트 피드백을 고민하고 있나요?', 'telbby에게 말해보세요'],
};
