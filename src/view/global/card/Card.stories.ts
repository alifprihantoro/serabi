import Card, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import args from './dummy'

type Story = StoryObj<TArgs>

const DEFAULT: Story = {
  args,
  argTypes: {
    btn: {
      control: 'object',
      description: 'button card.',
    },
    title: {
      control: 'text',
      description: 'title card.',
    },
    description: {
      control: 'text',
      description: 'description card.',
    },
    img: {
      control: 'object',
      description: 'image card.',
    },
  },
  render: (Args) => {
    return Card(Args)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const card: Story = {}