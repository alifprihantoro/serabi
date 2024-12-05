import { ICON_CHECKOUT, ICON_MENU, ICON_MORE } from '../../../configs/icons'
import Card from '../../global/card'
import heading from '../../global/heading'

export type TList = {
  name: string
  img: string
  url: string
}[]

export type TArgs = {
  onsite: TList
  preorder: TList
  label: {
    onsite: string
    preorder: string
  }
}

export const Layouts = (childern: string) => {
  return html`
    <div class="flex w-full max-w-4xl gap-4 p-3 snap-x overflow-x-scroll">
      ${childern}
    </div>
  `
}

export const MenuList = (list: TList) => {
  return list
    .map(({ name, url, img }) =>
      Card({
        img: {
          url: img,
          alt: name,
          name: name,
        },
        btn: {
          name: `${ICON_CHECKOUT}Beli`,
          url: url,
        },
        title: name,
      }),
    )
    .join('')
}

export default function Menu({ onsite, preorder, label }: TArgs) {
  const LOAD_MORE = html`
    <div class="self-center">
      <div class="btn">${ICON_MORE}</div>
    </div>
  `

  //TODO: add loadmore if more than 5
  const ONSITE = MenuList(onsite)
  const PREORDER = MenuList(preorder) + LOAD_MORE

  const BTN = (url: string) => {
    return html`<a title="More Menu" class="btn" href="${url}">${ICON_MENU}</a>`
  }

  const LISTS =
    // eslint-disable-next-line prefer-template
    heading({
      id: 'menu',
      title: 'Menu Makan di Tempat',
      btn: BTN(label.onsite),
      //TODO: merge content
      content: Layouts(ONSITE),
    }) +
    '</br>' +
    heading({
      title: 'Menu Pre-order',
      btn: BTN(label.preorder),
      content: Layouts(PREORDER),
    })

  return html` <div>${LISTS}</div> `
}
