import { GMAPS } from '../global'
import { ICON_CONTACT, ICON_MAPS } from '../icons'

export const TELP = 6283829383123
const EMAIL = 'bicorfood@gmail.com'
export default [
  {
    name: 'Telephone/WA',
    icon: ICON_CONTACT,
    url: `https://wa.me/${TELP}`,
  },
  {
    name: 'Email',
    icon: ICON_CONTACT,
    url: `mailto:${EMAIL}`,
  },
  {
    name: 'Maps',
    icon: ICON_MAPS,
    url:GMAPS,
  },
]