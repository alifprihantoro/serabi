import Contact, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import ListContact from '../../../configs/links/contact'
import ListSosmed from '../../../configs/links/sosmed'
import { MAPS_SEARCH } from '../../../configs/global'

type Story = StoryObj<TArgs>
export const args: TArgs = {
  ListContact,
  ListSosmed,
  mapsSearch: MAPS_SEARCH,
}
const DEFAULT: Story = {
  args,
  argTypes: {},
  render: (Args: TArgs) => {
    return Contact(Args)
  },
}
export default DEFAULT
export const contact = {}
