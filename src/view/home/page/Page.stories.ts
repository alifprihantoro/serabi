import Layouts from '../../global/layouts'
import Menu from '../menu'
import owner from '../../../configs/links/owner'
import Page, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import contactArgs from '../../home/contact/dummy'
import menuArgs from '../../home/menu/dummy'
import heroesArgs from '../../home/heroes/dummy'
import { TELP } from '../../../configs/links/contact'
import Skeleton from '../menu/skeleton'

type Story = StoryObj<TArgs>
const args: TArgs = {
  aboutArgs: owner,
  contactArgs,
  Menu: Menu(menuArgs),
  heroesArgs,
  telp: TELP,
}

const DEFAULT: Story = {
  args,
  render: (Args) => {
    return Layouts({
      childern: Page(Args),
      isHome: true,
    })
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const page: Story = {}
const newArgs = { ...args, Menu: Skeleton }
export const skeleton: Story = { args: newArgs }
