import About, { type TArgs as TAbout } from '../about'
import contact, { type TArgs as TContact } from '../contact'
import Heroes, { type TArgs as THeroes } from '../heroes'

export type TArgs = {
  Menu: string
  aboutArgs: TAbout
  contactArgs: TContact
  telp: number
  heroesArgs: THeroes
}

export default function HomePage({
  Menu,
  aboutArgs,
  contactArgs,
  heroesArgs,
}: TArgs) {
  return html`
    ${Heroes(heroesArgs)}
    <div id="main-content">${Menu}</div>
    <div class="md:flex">${About(aboutArgs) + contact(contactArgs)}</div>
  `
}