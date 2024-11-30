import Card from '../card'

type TList = {
  name: string
  img: string
  url: string
}[]
interface TCover {
  lists: string
  url: string
  title: string
}
const cover = ({ lists: list, url, title }: TCover) => {
  return html`
    <h2 class="text-2xl font-thin flex bg-primary/10 p-3 my-3 ">
      <span class="self-center bold uppercase">${title}</span>
      <span class="ml-auto"
        ><a class="btn btn-primary text-white btn-circle" href="${url}"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 12 24">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg></a
      ></span>
    </h2>
    <div class="flex w-full max-w-4xl gap-4">${list}</div>
  `
}

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

  const LISTS =
    // eslint-disable-next-line prefer-template
    cover({
      title: 'Menu Makan di Tempat',
      url: label.onsite,
      lists: ONSITE,
    }) +
    '</br>' +
    cover({
      title: 'Menu Pre-order',
      url: label.preorder,
      lists: PREORDER,
    })

  return html` <div class="bg-primary/10 p-3">${LISTS}</div> `
}
