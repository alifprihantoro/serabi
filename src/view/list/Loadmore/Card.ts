import Link from '../../global/link'

export interface TArgs {
  title: string
  url: string
  img: {
    url: string
    alt: string
    name: string
  }
}
export default function Card({ img, url, title }: TArgs) {
  const TITLE = Link({
    name: html`<h2 class="card-title text-xs text-wrap">${title}</h2>`,
    url,
  })

  return html`
    <div class="flex rounded-md w-full max-w-md md:max-w-59 shadow-xl mb-3 p-3">
      <figure class="max-w-24">
        <a href="${url}"><img src="${img.url}" alt="${img.alt}" /></a>
      </figure>
      <div class="card-body">${TITLE}</div>
    </div>
  `
}