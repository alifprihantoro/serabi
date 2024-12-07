import { ICON_MENU } from '../../../configs/icons'
import { BTN_NAME } from '../../../configs/links/menu'
import Card from '../../global/card'
import heading from '../../global/heading'
import Link from '../../global/link'
import { LOAD_MORE } from './btn'

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

export const Layouts = (childern: string, id: string) => {
  return html`
    <div
      id="${id}"
      class="flex w-full max-w-4xl gap-4 p-3 snap-x overflow-x-scroll">
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
          name: BTN_NAME,
          url: url,
        },
        title: name,
      }),
    )
    .join('')
}

export const BTN = (url: string) => {
  return Link({
    url,
    className: 'btn',
    title: 'More Menu',
    name: ICON_MENU,
  })
}
export default function Menu({ onsite, preorder, label }: TArgs) {
  //TODO: add loadmore if more than 5
  const ONSITE = MenuList(onsite)
  const PREORDER = MenuList(preorder) + LOAD_MORE

  const LISTS =
    // eslint-disable-next-line prefer-template
    heading({
      id: 'menu',
      title: 'Menu Makan di Tempat',
      btn: BTN(label.onsite),
      //TODO: merge content
      content: Layouts(ONSITE, 'menu-onsite'),
    }) +
    '</br>' +
    heading({
      title: 'Menu Pre-order',
      btn: BTN(label.preorder),
      content: Layouts(PREORDER, 'menu-preorder'),
    })

  return html` <div>${LISTS}</div> `
}