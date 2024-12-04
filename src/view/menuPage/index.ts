import Layouts from '../global/layouts'
import { MenuList, type TList } from '../home/menu'

export type TArgs = {
  title: string
  menu: TList
  content: string
}

export default function PageMenu({ title, menu, content }: TArgs) {
  return Layouts({
    childern: html`
      <div>
        <div class="md:flex">
          <div class="w-full max-w-md p-3 rounded">
            <h1>${title}</h1>
            <article>
              <p>${content}</p>
            </article>
          </div>
          <div class="p-3 md:ml-auto w-full md:w-fit max-w-sm">
            <h2>Menu yang bisa anda beli ditempat :</h2>
            ${MenuList(menu)}
          </div>
        </div>
      </div>
    `,
    isHome: false,
  })
}
