import { IMG_SERABI } from './images'
import { TELP } from './links/contact'

const IMG = IMG_SERABI
const BTN_NAME = 'Beli Sekarang'
const BTN_URL = `https://wa.me/${TELP}`
const TITLE = 'Serabi Ngampin Bu Yuni'
const DESCRIPTION =
  'Menyediakan berbagai macam makanan tradisional terutama serabi kocor khas ngampin'

const args = {
  img: IMG,
  title: TITLE,
  button: {
    url: BTN_URL,
    name: BTN_NAME,
  },
  description: DESCRIPTION,
}

export default args