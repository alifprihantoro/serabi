import { ICON_ABOUT } from '../../../configs/icons'
import heading from '../../global/heading'

export type TArgs = {
  name: string
  url: string
  img: string
}[]
export default function About(ListOwner: TArgs) {
  const LIST_OWNER = ListOwner.map(
    ({ name, url, img }) => html`
      <div class="avatar m-3">
        <div
          class="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-2">
          <img alt="owner ${name}" src="${img}" />
        </div>
        <div class="m-auto ml-3 h-fit !aspect-[0]">
          <a href="${url}"><h3>${name}</h3></a>
        </div>
      </div>
    `,
  ).join('')

  const OWNER = heading({
    className: 'text-primary',
    content: html` <div class="block p-3">${LIST_OWNER}</div> `,
    btn: ICON_ABOUT,
    title: 'owner',
    id: 'about',
  })
  return html` <div>${OWNER}</div> `
}