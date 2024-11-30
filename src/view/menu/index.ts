import Card from '../card'
import heading from '../heading'

type TList = {
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
export default function Menu({ onsite, preorder, label }: TArgs) {
  const ONSITE = onsite
    .map(({ name, url, img }) =>
      Card({
        img: {
          url: img,
          alt: name,
          name: name,
        },
        btn: {
          name: 'Order',
          url: url,
        },
        title: name,
      }),
    )
    .join('')

  const PREORDER = preorder
    .map(({ name, url, img }) =>
      Card({
        img: {
          url: img,
          alt: name,
          name: name,
        },
        btn: {
          name: 'Order',
          url: url,
        },
        title: name,
      }),
    )
    .join('')
  const BTN = (url: string) => {
    return html`<a class="btn btn-primary text-white btn-circle" href="${url}"
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
      title: 'Menu Makan di Tempat',
      btn: BTN(label.onsite),
      content: ONSITE,
    }) +
    '</br>' +
    heading({
      title: 'Menu Pre-order',
      btn: BTN(label.preorder),
      content: PREORDER,
    })

  return html` <div class="bg-primary/10 p-3">${LISTS}</div> `
}
