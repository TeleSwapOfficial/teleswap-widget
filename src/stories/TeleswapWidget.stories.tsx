import type { Meta, StoryObj } from '@storybook/react';
import { TeleswapWidget } from '../components/TeleswapWidget';

const meta: Meta<typeof TeleswapWidget> = {
  title: 'Teleswap/Widget',
  component: TeleswapWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TeleswapWidget>;

export const Default: Story = {
  args: {
    apiKey: 'your-api-key',
    fromCoin: 'sol',
    toCoin: 'ton',
    theme: 'light',
    // width: 360,
    // height: 300,
  },
};

export const DarkTheme: Story = {
  args: {
    ...Default.args,
    theme: 'dark',
  },
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    width: 500,
    height: 400,
  },
};
