import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomButton, { CustomButtonProps } from '../../components/CustomButton';

export default {
 title: 'Components/CustomButton',
 component: CustomButton,
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
 children: 'Primary Button',
 variant: 'solid',
};

export const Secondary = Template.bind({});
Secondary.args = {
 children: 'Secondary button',
 variant: 'outline',
};
