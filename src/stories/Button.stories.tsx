import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '../components/ui-elements/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

type ButtonProps = {
  buttonType?: string | undefined;
  buttonText?: string;
  buttonLink: string | undefined;
};

const Template: Story<ButtonProps> = (args: any) => (
  <Button {...args} />
);

export const Buy = Template.bind({});
Buy.args = {
  buttonType: 'buy',
};

export const Quote = Template.bind({});
Quote.args = {
  buttonType: 'quote',
};
