import Link from '../link'

export type TArgs = {
  name: string
  links: { name: string; url: string }[]
}
export default function Footer({ name, links }: TArgs) {
  const LINKS = links
    .map(({ name, url }) => Link({ name, url, className: 'uppercase bold' }))
    .join('')
  return html`
    <footer class="footer footer-center bg-primary rounded p-10 text-white">
      <nav class="flex flex-wrap gap-3 justify-center">${LINKS}</nav>
      <aside>
        <p>Copyright &#169; ${Link({ name, url: '/' })} - All right reserved</p>
      </aside>
    </footer>
  `
}
