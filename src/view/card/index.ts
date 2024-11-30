import Link from '../link'

export interface TArgs {
  title: string
  description?: string
  btn: {
    name: string
    url?: string
  }
  img: {
    url: string
    alt: string
    name: string
  }
}
export default function Card({ img, btn, title, description }: TArgs) {
  const BUTTON = html`<button class="btn btn-primary text-white">
    ${btn.name}
  </button>`
  return html`
    <div class="card bg-secondary/30 w-full md:max-w-60 shadow-xl">
      <figure>
        <img src="${img.url}" alt="${img.alt}" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p>${description || ''}</p>
        <div class="card-actions justify-end">
          ${btn.url ? Link({ name: BUTTON, url: btn.url }) : BUTTON}
        </div>
      </div>
    </div>
  `
}
