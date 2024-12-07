import { ICON_CHECKOUT, ICON_COMMENT, ICON_STAR } from '../../configs/icons'
import heading from '../global/heading'
import Layouts from '../global/layouts'
import About, { type TArgs as TAbout } from '../home/about'
import contact, { type TArgs as TContact } from '../home/contact'
import { MenuList, type TList ,Layouts as MenuLayouts} from '../home/menu'

export type TArgs = {
  title: string
  menu: {
    onsite: TList
    preorder: TList
  }
  content: string
  urlShop: string
  isOnsite?: true
  aboutArgs: TAbout
  contactArgs: TContact
}

export default function PageMenu({
  title,
  menu,
  content,
  urlShop,
  isOnsite,
  aboutArgs,
  contactArgs,
}: TArgs) {
  const TITLE = heading({
    title,
    btn: `<a title="Beli via WhatsApp" class="btn btn-primary" href="${urlShop}">${ICON_CHECKOUT}</a>`,
    className: 'mb-3',
  })

  let MENU = ''
  if (isOnsite) {
    MENU = MenuList(menu.onsite)
  } else {
    MENU = MenuList(menu.preorder)
  }

  return Layouts({
    childern: html`
      <div>
        <div class="md:flex max-md:p-3">
          <div class="w-full max-w-md rounded">
            ${TITLE}
            <article class="prose prose-xl md:p-3">${content}</article>
            <div class="leading-[60px] my-6 mx-3">
              <a
                title="Beli via WhatsApp"
                class="btn btn-primary rounded w-full"
                href="${urlShop}"
                >${ICON_CHECKOUT} Beli via WhatsApp</a
              >
              <a
                title="Rating kami di Google Maps"
                class="btn rounded w-full"
                href="${urlShop}"
                >${ICON_STAR} Rating kami di Google Maps</a
              >
              <a
                title="Rating kami di Google Maps"
                class="btn rounded w-full"
                href="${urlShop}"
                >${ICON_COMMENT} Comment on this Blog</a
              >
            </div>
          </div>
          <div class="p-3 md:ml-auto w-full md:w-fit max-w-sm">
            <h2
              class="capitalize font-extrabold text-xl mb-6 border border-b-black border-spacing-3">
              Menu yang bisa dibeli ditempat :
            </h2>
            ${MenuLayouts(MENU,'menu-onsite')}
          </div>
        </div>
        <div class="md:flex">${About(aboutArgs) + contact(contactArgs)}</div>
      </div>
    `,
    isHome: false,
  })
}