import { TELP } from '../../../configs/links/contact'
import WaBtn from './'
import type { StoryObj } from '@storybook/html'

type Story = StoryObj<{ telp: number }>

const DEFAULT: Story = {
  args: {
    telp: TELP,
  },
  argTypes: {
    telp: { control: 'number' },
  },
  render: ({ telp }) => {
    return WaBtn(telp)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const wabtn: Story = {}
