import Page, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import contactArgs from '../../home/contact/dummy'

type Story = StoryObj<TArgs>
const args: TArgs = {
  title: 'Jelajah Kuliner Ambarawa, Semarang, dan Salatiga',
  contactArgs,
  content: html`
    <h2 style="text-align: left;">Contact</h2>
    <div>
      <ul style="text-align: left;">
        <li>Wa/telp: 083829383123</li>
        <li>Email: bicorfood@gmail.com</li>
      </ul>
    </div>
    <h2 style="text-align: left;">Sosmed</h2>
    <div>
      <ul style="text-align: left;">
        <li>Instagram :</li>
        <li>Tiktok</li>
        <li>Facebook</li>
      </ul>
    </div>
    <h2 style="text-align: left;">Maps</h2>
    <h3 style="text-align: left;">Lokasi Warung</h3>
    <div>
      <a href="https://g.page/r/CSMQBXSol27dEBI/" target="_blank"
        >klick disini</a
      >
    </div>
    <div><br /></div>
  `,
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