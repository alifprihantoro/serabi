import Layouts from '../../global/layouts'
import About, { type TArgs as TAbout } from '../about'
import contact, { type TArgs as TContact } from '../contact'
import Heroes, { type TArgs as THeroes } from '../heroes'
import Menu, { type TArgs as TMenu } from '../menu'

export type TArgs = {
  heroesArgs: THeroes
  menuArgs: TMenu
  aboutArgs: TAbout
  contactArgs: TContact
  telp: number
}

export default function HomePage({
  heroesArgs,
  menuArgs,
  aboutArgs,
  contactArgs,
}: TArgs) {
  return Layouts({
    childern: html`
      ${Heroes(heroesArgs) + Menu(menuArgs)}
      <div class="md:flex">${About(aboutArgs) + contact(contactArgs)}</div>
    `,
    isHome: true,
  })
}
