import Menu, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import args from './dummy'

type Story = StoryObj<TArgs>

const DEFAULT: Story = {
  args,
  argTypes: {
    onsite: {
      control: {
        type: 'object',
      },
    },
    preorder: {
      control: {
        type: 'object',
      },
    },
    label: {
      control: {
        type: 'object',
      },
    },
  },
  render: (Args) => {
    return Menu(Args)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const menu: Story = {}
