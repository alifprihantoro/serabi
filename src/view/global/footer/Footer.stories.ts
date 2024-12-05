import Footer, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import args from './dummy'

type Story = StoryObj<TArgs>

const DEFAULT: Story = {
  args,
  argTypes: {
    name: {
      control: 'text',
      description: 'name web.',
    },
    links: {
      control: 'object',
      description: 'links web.',
    },
  },
  render: (Args) => {
    return Footer(Args)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const footer: Story = {}
