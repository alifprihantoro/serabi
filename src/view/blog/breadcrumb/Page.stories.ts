import Page from './'
import type { StoryObj } from '@storybook/html'

type Story = StoryObj<{ childern: string }>
const args = html`
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/blog">Blog</a>
  </li>
  <li>
    <a href="/blog/jelajah-kuliner-ambarawa-semarang-dan-salatiga"
      >Jelajah Kuliner Ambarawa, Semarang, dan Salatiga</a
    >
  </li>
`

const DEFAULT: Story = {
  args: {
    childern: args,
  },
  argTypes: {
    childern: { control: 'text' },
  },
  render: ({ childern }) => {
    return Page(childern)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const page: Story = {}
