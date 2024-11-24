import Nav, { type TArgs } from './'
import List from '../../configs/links/nav'

const args: TArgs = {
  url: '/',
  title: 'serabi ngampin bu yuni',
  List,
}

export default {
  args,
  argstypes: {
    url: {
      control: 'text',
      description: 'url web.',
    },
    title: {
      control: 'text',
      description: 'name web.',
    },
    List: [
      {
        icon: {
          control: 'text',
          description: 'svg icon nav',
        },
        name: {
          control: 'text',
          description: 'title links nav.',
        },
        url: {
          control: 'text',
          description: 'url nav.',
        },
      },
    ],
  },
  render: (Args: TArgs) => {
    return Nav(Args)
  },
}
export const nav = {}
