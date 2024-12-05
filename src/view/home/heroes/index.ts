import Link from '../../global/link'

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
  const LINK = Link({
    name: html`<button class="btn btn-primary uppercase text-white">
      ${button.name}
    </button>`,
    url: button.url,
  })

  return html`
    <div class="hero text-primary">
      <div class="hero-content flex-col md:flex-row">
        <img title="${title}" src="${img}" class="w-full max-w-sm rounded-lg" />
        <div>
          <h1 class="text-5xl font-bold uppercase">${title}</h1>
          <p class="my-6 text-[#333]">${description}</p>
          ${LINK}
        </div>
      </div>
    </div>
  `
}