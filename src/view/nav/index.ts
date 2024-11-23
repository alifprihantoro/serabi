import NavBottom from './bottom'

export default function Nav(url: string, title: string) {
  return html`
    <div class="navbar bg-primary">
      <header class="text-white">
        <a class="btn btn-ghost text-xl" title="${title}" href="${url}">
          ${title}
        </a>
      </header>
      ${NavBottom}
    </div>
  `
}
