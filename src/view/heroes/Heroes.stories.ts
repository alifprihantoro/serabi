import Heroes, { type TArgs } from './'

export default {
  args: {
    img: 'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp',
    button: {
      name: 'beli sekarang!',
      url: '#beli',
    },
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    title: 'serabi ngampin bu yuni',
  },
  argstypes: {
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
      name: {
        control: 'text',
        description: 'url images.',
      },
      url: {
        control: 'text',
        description: 'url images.',
      },
    },
  },
  render: (Args: TArgs) => {
    return Heroes(Args)
  },
}
export const heroes = {}
