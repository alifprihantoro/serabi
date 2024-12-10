import { IMG_SERABI, IMG_SERABI_MIN } from '../../../configs/images'
import Link from '../../global/link'

export type TArgs = {
  img: string
  title: string
  description: string
  button: {
    name: string
    url: string
  }
  isBlogger?: boolean
}
export default function Heroes({
  title,
  description,
  button,
  isBlogger,
}: TArgs) {
  const LINK = Link({
    name: button.name,
    title: 'pesan sekarang',
    url: button.url,
    className: 'btn btn-primary uppercase text-white',
  })

  const imgEl = (url: string) => html`
    <img
      alt="${title}"
      loading="eager"
      rel="preload"
      as="image"
      title="${title}"
      src="${url}"
      class="w-full h-full rounded-lg bg-white object-cover" />
  `

  const IMG = isBlogger
    ? html`
        <b:if cond="data:blog.isMobile">
          ${imgEl(IMG_SERABI_MIN)}
          <b:else />
          ${imgEl(IMG_SERABI)}
        </b:if>
      `
    : html` ${imgEl(IMG_SERABI)} `

  return html`
    <div class="hero text-primary">
      <div class="hero-content flex-col md:flex-row">
        <figure
          class="w-80 max-w-full h-80 rounded-lg bg-white skeleton m-auto">
          ${IMG}
        </figure>
        <div>
          <h1 tabindex="0" class="text-5xl font-bold uppercase">${title}</h1>
          <p tabindex="0" class="my-6 text-[#333]">${description}</p>
          ${LINK}
        </div>
      </div>
    </div>
  `
}