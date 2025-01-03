import Nav, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import args from './dummy'

type Story = StoryObj<TArgs>

const DEFAULT: Story = {
  args,
  argTypes: {
    url: {
      control: 'text',
      description: 'url web.',
    },
    name: {
      control: 'text',
      description: 'name web.',
    },
    List: [
      {
        icon: {
          control: 'text',
          description: 'svg icon nav',
        },
        name: {
          control: 'text',
          description: 'title links nav.',
        },
        url: {
          control: 'text',
          description: 'url nav.',
        },
      },
    ],
  },
  render: (Args) => {
    return Nav(Args)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const nav: Story = {}