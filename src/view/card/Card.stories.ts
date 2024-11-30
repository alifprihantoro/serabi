import Card, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'

type Story = StoryObj<TArgs>
const args: TArgs = {
  btn: {
    name: 'button',
    url: '#',
  },
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  img: {
    url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhV5BQlOW8zgMvo_rA1x6JyDUC7UWIrsn7b-sEshDE3vWcbEQkTewOvzsMPUpM-TDEEwnH-_DzFsrs3jVRccHCrFxJ-QR6Mikztb73es9D2E56vR1d2F9wG9sSymZaz9z2gbVnMAz41JtcTJUCs3dXy8HFmd7IjMqFrhoOxModnExhleorCsPbGXINqdGA/s1000/menu-pandan.png',
    alt: 'alt image',
    name: 'name image',
  },
}

const DEFAULT: Story = {
  args,
  argTypes: {
    btn: {
      control: 'object',
      description: 'button card.',
    },
    title: {
      control: 'text',
      description: 'title card.',
    },
    description: {
      control: 'text',
      description: 'description card.',
    },
    img: {
      control: 'object',
      description: 'image card.',
    },
  },
  render: (Args) => {
    return Card(Args)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const card: Story = {}
