import owner from '../../../configs/links/owner'
import Page, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import { args as navArgs } from '../../global/nav/Nav.stories'
import { args as contactArgs } from '../../home/contact/Contact.stories'
import { args as menuArgs } from '../../home/menu/Menu.stories'
import { args as footerArgs } from '../../global/footer/Footer.stories'
import { args as heroesArgs } from '../../home/heroes/Heroes.stories'

type Story = StoryObj<TArgs>
const args: TArgs = {
  aboutArgs: owner,
  contactArgs,
  navArgs,
  menuArgs,
  footerArgs,
  heroesArgs,
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
