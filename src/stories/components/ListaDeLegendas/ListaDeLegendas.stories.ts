import type { Meta, StoryObj } from '@storybook/react';
import { ListaDeLegendas } from './ListaDeLegendas';

const meta: Meta<typeof ListaDeLegendas> = {
  title: 'Components/ListaDeLegendas',
  component: ListaDeLegendas,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { titulo: 'Legenda 1', cor: 'bg-red-500' },
      { titulo: 'Legenda 2', cor: 'bg-green-500' },
      { titulo: 'Legenda 3', cor: 'bg-blue-500' },
    ],
  },
};

export const CustomColors: Story = {
  args: {
    items: [
      { titulo: 'Legenda 1', cor: 'bg-yellow-500' },
      { titulo: 'Legenda 2', cor: 'bg-purple-500' },
      { titulo: 'Legenda 3', cor: 'bg-pink-500' },
    ],
  },
};
