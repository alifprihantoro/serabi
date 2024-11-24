import type { TLinksNav } from '../../configs/links/nav'
import NavBottom from './bottom'

export type TArgs = {
  url: string
  title: string
  List: TLinksNav[]
}
export default function Nav({ List, url, title }: TArgs) {
  return html`
    <div class="navbar bg-primary">
      <header class="text-white">
        <a class="btn btn-ghost text-xl" title="${title}" href="${url}">
          ${title}
        </a>
      </header>
      ${NavBottom(List)}
    </div>
  `
}
