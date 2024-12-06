import Link from '../link'

export interface TArgs {
  title: string
  description?: string
  btn?: {
    name: string
    url: string
  }
  img: {
    url: string
    alt: string
    name: string
  }
}
export default function Card({ img, btn, title, description }: TArgs) {
  /* prettier-ignore-start */
  const BUTTON = btn
    ? Link({
      name: html`<button class="btn btn-primary btn-xs [&>svg]:w-3">
          ${btn.name}
        </button>`,
      url: btn.url,
    })
    : ''
  /* prettier-ignore-end */

  return html`
    <div class="card card-compact w-full max-w-md md:max-w-40 shadow-xl mb-3">
      <figure class="max-h-40">
        <img src="${img.url}" alt="${img.alt}" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-xs text-wrap">${title}</h2>
        <p>${description || ''}</p>
        <div class="card-actions justify-end">${BUTTON}</div>
      </div>
    </div>
  `
}
