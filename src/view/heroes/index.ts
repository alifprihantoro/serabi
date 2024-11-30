import Link from '../link'

export type TArgs = {
  img: string
  title: string
  description: string
  button: {
    name: string
    url: string
  }
}
export default function Heroes({ img, title, description, button }: TArgs) {
  return html`
    <div class="hero bg-secondary/15 min-h-screen text-primary">
      <div class="hero-content flex-col md:flex-row">
        <img src="${img}" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold uppercase">${title}</h1>
          <p class="py-6">${description}</p>
          <button class="btn btn-primary uppercase text-white">
            ${Link({ name: button.name, url: button.url })}
          </button>
        </div>
      </div>
    </div>
  `
}
