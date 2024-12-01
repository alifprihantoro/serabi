import Heroes, { type TArgs } from './'

import type { StoryObj } from '@storybook/html'

type Story = StoryObj<TArgs>
export const args = {
  img: 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp',
  button: {
    name: 'beli sekarang!',
    url: '#beli',
  },
  description:
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  title: 'serabi ngampin bu yuni',
}
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
