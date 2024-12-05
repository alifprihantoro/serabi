import { IMG_SERABI } from '../../../configs/images'
import Page, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'

type Story = StoryObj<TArgs>
const args: TArgs = {
  commentUrl: '/',
  title: 'serabi rasa pandan',
  content: html`
    <div
      class="flex scrollbar w-full scroll-m-3 snap-x snap-mandatory overflow-x-scroll">
      <img src="${IMG_SERABI}" />
      <img src="${IMG_SERABI}" />
    </div>
    <div>
      <h3>Detail</h3>
      <ul>
        <li></li>
      </ul>
    </div>
    <div></div>
  `,
}

const DEFAULT: Story = {
  args,
  render: (Args) => {
    return Page(Args)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const page: Story = {}