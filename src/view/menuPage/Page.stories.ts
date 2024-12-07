import menu from '../../configs/links/menu'
import { IMG_SERABI } from '../../configs/images'
import Page, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import owner from '../../configs/links/owner'
import contactArgs from '../home/contact/dummy'
import heading from '../global/heading'
import { ICON_DETAIL } from '../../configs/icons'

type Story = StoryObj<TArgs>
const DETAIL_TITLE = heading({
  id: 'detail',
  title: 'Detail Menu',
  btn: html`<span class="btn btn-ghost">${ICON_DETAIL}</span>`,
  btnAlign: 'left',
})
const args: TArgs = {
  contactArgs,
  aboutArgs: owner,
  urlShop: '/',
  menu: menu,
  title: 'serabi rasa pandan',
  content: html`
    <div class="flex scrollbar w-full snap-x snap-mandatory overflow-x-scroll">
      <img
        class="image-full h-[300px] w-[300px] object-scale-down "
        src="${IMG_SERABI}" />
      <img
        class="image-full h-[300px] w-[300px] object-scale-down "
        src="${IMG_SERABI}" />
    </div>
    <div>
      ${DETAIL_TITLE}
      <ul style="text-align: left;">
        <li>Variant Rasa: Harum Pandan dan kuah kolak yang manis</li>
        <li>Harga: Rp. 6.000/porsi (isi 5 buah)</li>
        <li>Composisi :</li>
        <ul>
          <li>Tepung Beras</li>
          <li>Santan (kelapa parut)</li>
          <li>Daun pandan</li>
          <li>Perasa pandan (panili, essen pewarna makanan)</li>
        </ul>
        <li>Promo :&nbsp;</li>
        <ul>
          <li>beli kelipatan 10 porsi dapat 1 porsi&nbsp;</li>
          <li>Foto dan rating gmaps, min. Pembelian 5, dapat 1 porsi.</li>
          <li>Beli 10 porsi dan foto, serata rating gmaps dapat? 2 porsi</li>
          <li>Dan mungkin ada promosi lain lagi (silahkan hubungi pembeli)</li>
        </ul>
        <li>Pre order :&nbsp;</li>
        <ul>
          <li>Min. Pemesanan H-1 + uang muka (jika pesanan banyak/custom)</li>
          <li>
            Jika pesan lebih dari 500 pcs (100 porsi), dan jam mepet,
            kemungkinan ada tambahan harga. (Hal ini biasanya terjadi karena
            kapasitas kami yang hanya mampu 500 pcs, dan sehingga lebihannya
            akan diambilkan ke penjual lain/nyewa orang, yang mana harga serabi
            untuk pesanan akan lebih murah di kami)&nbsp;
          </li>
          <li>
            Jika merasa kurang percaya dengan pembayaran online, silahkan
            kunjungi warung kami
          </li>
        </ul>
      </ul>
    </div>
    <div></div>
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
