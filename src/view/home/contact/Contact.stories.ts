import Contact, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import ListContact from '../../../configs/links/contact'
import ListSosmed from '../../../configs/links/sosmed'

type Story = StoryObj<TArgs>
const args: TArgs = {
  ListContact,
  ListSosmed,
  mapsSearch: 'Serabi Kocor Khas Ngampin Bu Yuni',
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
