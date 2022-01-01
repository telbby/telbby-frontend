import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Jumbotron from '@/components/common/Jumbotron';

export default {
  title: 'Example/Components',
  component: Jumbotron,
} as ComponentMeta<typeof Jumbotron>;

const Template: ComponentStory<typeof Jumbotron> = (args) => (
  <Jumbotron {...args} />
);

export const JumboTronExample = Template.bind({});
JumboTronExample.args = {
  title: 'Talk',
  descList: ['프로젝트 피드백을 고민하고 있나요?', 'telbby에게 말해보세요'],
};
