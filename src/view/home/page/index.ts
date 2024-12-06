import About, { type TArgs as TAbout } from '../about'
import contact, { type TArgs as TContact } from '../contact'
import Heroes, { type TArgs as THeroes } from '../heroes'

export type TArgs = {
  heroesArgs: THeroes
  Menu: string
  aboutArgs: TAbout
  contactArgs: TContact
  telp: number
}

export default function HomePage({
  heroesArgs,
  Menu,
  aboutArgs,
  contactArgs,
}: TArgs) {
  return html`
      ${Heroes(heroesArgs) + Menu}
      <div class="md:flex">${About(aboutArgs) + contact(contactArgs)}</div>
    `}