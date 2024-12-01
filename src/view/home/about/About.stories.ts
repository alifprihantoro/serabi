import owner from '../../../configs/links/owner'
import Owner, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'

type TStory = { List: TArgs }
type Story = StoryObj<TStory>
export const args: TStory = { List: owner }

const DEFAULT: Story = {
  args,
  render: ({ List }) => {
    return Owner(List)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const about: Story = {}
