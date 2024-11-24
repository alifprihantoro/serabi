import type { TLinksNav } from '../../configs/links/nav'

export default function NavBottom(List: TLinksNav[]) {
  let LIST_LINK = ''
  for (let i = 0; i < List.length; i++) {
    const { name, url, icon } = List[i]
    LIST_LINK += html`
      <li class="m-auto align-middle max-w-full text-white">
        <a
          href="${url}"
          class="m-1 capitalize font-Rokkit font-bold flex
        justify-center items-center flex-col md:flex-row "
          data-tip="${name}">
          ${icon}
          <span>${name}</span>
        </a>
      </li>
    `
  }
  return html`
    <nav
      class="fixed bottom-0 left-0 z-50 w-full
        flex justify-center items-center
        md:static md:justify-end md:items-end
        "
      data-aos="zoom-in">
      <div class="w-fit h-fit m-auto md:mr-0">
        <ul
          class="menu menu-xs md:menu-md menu-horizontal bg-primary md:bg-transparent rounded-box align-middle">
          ${LIST_LINK}
        </ul>
      </div>
    </nav>
  `
}
