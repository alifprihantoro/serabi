import Link from '../link'

export type TArgs = {
  name: string
  links: { name: string; url: string }[]
}
export default function Footer({ name, links }: TArgs) {
  const LINKS = links.map(({ name, url }) => Link({ name, url })).join('')
  return html`
    <footer
      class="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav class="grid grid-flow-col gap-4">${LINKS}</nav>
      <aside>
        <p>Copyright &#169; ${Link({ name, url: '/' })} - All right reserved</p>
      </aside>
    </footer>
  `
}
