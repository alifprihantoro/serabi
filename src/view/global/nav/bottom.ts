import type { TLinksNav, TLinksNavObj } from '../../../configs/links/nav'
import Link from '../link'

const renderLink = (List: TLinksNavObj[]) => {
  let LIST_LINK = ''
  for (let i = 0; i < List.length; i++) {
    const { name, url, icon } = List[i]
    const LINK = Link({
      name: `${icon}<span>${name}</span>`,
      url,
      className: `capitalize font-Rokkit font-bold flex
        justify-center items-center flex-col md:flex-row [&>svg]:w-3 w-fit`,
      Attr: `data-tip="${name}"`,
    })

    LIST_LINK += html`
      <li class="m-auto align-middle max-w-full text-white">${LINK}</li>
    `
  }
  return LIST_LINK
}

export default function NavBottom(List: TLinksNav, isHome?: boolean) {
  const LINK = isHome ? renderLink(List.home) : renderLink(List.other)
  return html`
    <nav
      class="fixed bottom-0 left-0 z-50 md:w-full
        flex justify-center items-center
        md:static md:justify-end md:items-end
        "
      title="Navigasi Utama"
      data-aos="zoom-in">
      <div class="w-screen md:w-fit h-fit m-auto md:mr-0">
        <ul
          class="menu menu-xs md:menu-md menu-horizontal bg-primary md:bg-transparent align-middle w-full gap-3">
          ${LINK}
        </ul>
      </div>
    </nav>
  `
}