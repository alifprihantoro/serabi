import { ICON_ABOUT } from '../../../configs/icons'
import Card from '../../global/card'
import heading from '../../global/heading'

export type TArgs = {
  name: string
  url: string
  img: string
}[]
export default function About(ListOwner: TArgs) {
  const LIST_OWNER = ListOwner.map(({ name, url, img }) =>
    Card({
      img: {
        url: img,
        alt: `foto pemilik toko ${name}`,
        name: name,
      },
      title: `<a href="${url}">${name}</a>`,
    }),
  ).join('')

  const OWNER = heading({
    content: LIST_OWNER,
    btn: ICON_ABOUT,
    title: 'owner',
  })
  return html` <div class="bg-primary/10 p-3">${OWNER}</div> `
}
