import Heroes, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import args from '../../../configs/heroes'

type Story = StoryObj<TArgs>
const DEFAULT: Story = {
  args,
  argTypes: {
    img: {
      control: 'text',
      description: 'url images.',
    },
    title: {
      control: 'text',
      description: 'url images.',
    },
    description: {
      control: 'text',
      description: 'url images.',
    },
    button: {
      control: 'object',
      description: 'links list',
    },
  },
  render: (Args: TArgs) => {
    return Heroes(Args)
  },
}
export default DEFAULT
export const heroes = {}