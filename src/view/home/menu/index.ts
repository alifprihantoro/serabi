import { ICON_CHECKOUT } from '../../../configs/icons'
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
          name: `${ICON_CHECKOUT}Order`,
          url: url,
        },
        title: name,
      }),
    )
    .join('')
}

export default function Menu({ onsite, preorder, label }: TArgs) {
  const ONSITE = MenuList(onsite)
  const PREORDER = MenuList(preorder)

  const BTN = (url: string) => {
    return html`<a
      title="More Menu"
      class="btn btn-primary text-white btn-circle"
      href="${url}"
      ><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 12 24">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg
    ></a>`
  }

  const LISTS =
    // eslint-disable-next-line prefer-template
    heading({
      id: 'menu',
      title: 'Menu Makan di Tempat',
      className: 'text-primary',
      btn: BTN(label.onsite),
      content: html`<div class="md:flex w-full max-w-4xl gap-4 p-3">
        ${ONSITE}
      </div>`,
    }) +
    '</br>' +
    heading({
      title: 'Menu Pre-order',
      className: 'text-primary',
      btn: BTN(label.preorder),
      content: html`<div class="md:flex w-full max-w-4xl gap-4 p-3">
        ${PREORDER}
      </div>`,
    })

  return html` <div>${LISTS}</div> `
}
