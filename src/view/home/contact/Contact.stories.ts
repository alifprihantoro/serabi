import Contact, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import args from './dummy'

type Story = StoryObj<TArgs>
const DEFAULT: Story = {
  args,
  argTypes: {},
  render: (Args: TArgs) => {
    return Contact(Args)
  },
}
export default DEFAULT
export const contact = {}
