import type { Meta, StoryObj } from '@storybook/react';

import { SelectSchool } from './SelectSchool';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/SelectSchool',
  component: SelectSchool,
  tags: ['autodocs'],
  //argTypes: {
  // backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof SelectSchool>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    schools: [
      { schoolId: '1', schoolName: 'Школа №123' },
      { schoolId: '2', schoolName: 'Школа №2' },
      { schoolId: '3', schoolName: 'Школа №3' },
    ],
  },
};
