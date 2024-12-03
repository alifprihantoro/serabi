import Footer, { type TArgs as TFooter } from '../../global/footer'
import Nav, { type TArgs as TNav } from '../../global/nav'
import About, { type TArgs as TAbout } from '../about'
import contact, { type TArgs as TContact } from '../contact'
import Heroes, { type TArgs as THeroes } from '../heroes'
import Menu, { type TArgs as TMenu } from '../menu'

export type TArgs = {
  navArgs: TNav
  heroesArgs: THeroes
  menuArgs: TMenu
  aboutArgs: TAbout
  contactArgs: TContact
  footerArgs: TFooter
}

export default function HomePage({
  navArgs,
  heroesArgs,
  menuArgs,
  aboutArgs,
  contactArgs,
  footerArgs,
}: TArgs) {
  return html`
    <div class="shadow-primary/30 shadow mx-3 max-w-4xl md:m-auto">
      ${Nav(navArgs) + Heroes(heroesArgs) + Menu(menuArgs)}
      <div class="md:flex">${About(aboutArgs) + contact(contactArgs)}</div>
      ${Footer(footerArgs)}
    </div>
  `
}