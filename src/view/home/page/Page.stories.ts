import owner from '../../../configs/links/owner'
import Page, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import contactArgs from '../../home/contact/dummy'
import menuArgs from '../../home/menu/dummy'
import heroesArgs from '../../home/heroes/dummy'
import { TELP } from '../../../configs/links/contact'

type Story = StoryObj<TArgs>
const args: TArgs = {
  aboutArgs: owner,
  contactArgs,
  menuArgs,
  heroesArgs,
  telp: TELP,
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
