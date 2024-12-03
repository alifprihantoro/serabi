import type { TLinksNav } from '../../../configs/links/nav'
import Link from '../link'
import NavBottom from './bottom'

export type TArgs = {
  url: string
  name: string
  List: TLinksNav[]
}
export default function Nav({ List, url, name }: TArgs) {
  return html`
    <div class="md:sticky left-0 top-0 z-50 w-full">
      <div class="navbar bg-primary max-w-4xl md:m-auto">
        <header class="text-white">
          ${Link({ name, url, className: 'btn btn-ghost text-xl' })}
        </header>
        ${NavBottom(List)}
      </div>
    </div>
  `
}
