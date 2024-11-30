import Menu, { type TArgs } from './'
import List from '../../configs/links/menu'
import type { StoryObj } from '@storybook/html'

type Story = StoryObj<TArgs>
const args: TArgs = {
  ...List,
  label: {
    onsite: 'Onsite',
    preorder: 'Preorder',
  },
}

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
