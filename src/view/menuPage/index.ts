import { ICON_CHECKOUT, ICON_COMMENT, ICON_STAR } from '../../configs/icons'
import heading from '../global/heading'
import Link from '../global/link'
import About, { type TArgs as TAbout } from '../home/about'
import contact, { type TArgs as TContact } from '../home/contact'

export type TArgs = {
  title: string
  menu: string
  content: string
  isOnsite?: true
  aboutArgs: TAbout
  contactArgs: TContact
  url: {
    comment: string
    gmaps: string
    wa: number
    shop: string
  }
}

export default function PageMenu({
  title,
  menu,
  content,
  aboutArgs,
  contactArgs,
  url,
}: TArgs) {
  const TITLE = heading({
    title,
    btn: `<a title="Beli via WhatsApp" class="btn btn-primary" href="${url.shop}">${ICON_CHECKOUT}</a>`,
    className: 'mb-3',
    id: 'menu',
  })
  const COMMENT_BLOGGER = Link({
    name:`${ICON_COMMENT} Comment on this Blog`,
    className: 'btn rounded w-full mb-3',
    url: url.comment,
  })

  return html`
    <div>
      <div class="md:flex max-md:p-3">
        <div class="w-full max-w-md rounded">
          ${TITLE}
          <article class="prose prose-xl md:p-3">${content}</article>
          <div class="my-6 mx-3">
            <a
              title="Beli via WhatsApp"
              class="btn btn-primary rounded w-full mb-3"
              href="https://wa.me/${url.wa}"
              >${ICON_CHECKOUT} Beli via WhatsApp</a
            >
            <a
              title="Rating kami di Google Maps"
              class="btn rounded w-full mb-3"
              href="${url.gmaps}"
              >${ICON_STAR} Rating kami di Google Maps</a
            >
            ${COMMENT_BLOGGER}
          </div>
        </div>
        <div class="p-3 md:ml-auto w-full md:w-fit max-w-sm">${menu}</div>
      </div>
      <div class="md:flex">${About(aboutArgs) + contact(contactArgs)}</div>
    </div>
  `
}