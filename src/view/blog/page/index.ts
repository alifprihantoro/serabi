import heading from '../../global/heading'
import Link from '../../global/link'
import contact, { type TArgs as TContact } from '../../home/contact'
import BreadCrumb from '../breadcrumb'

export type TArgs = {
  content: string
  title: string
  commentUrl: string
  contactArgs: TContact
  listBreadcrumb: string
  relatedPost: string
}
export default function Blog({
  content,
  title,
  commentUrl,
  contactArgs,
  listBreadcrumb,
  relatedPost,
}: TArgs) {
  const TITLE = heading({
    title,
    className: 'mb-3 max-w-md',
    id: 'main-content',
    isH1: true,
  })

  const COMENT = Link({
    url: commentUrl,
    name: 'Beri Komentar',
    className: 'btn btn-primary w-full my-6 max-w-md',
  })

  return html`
    <div class="my-6 mx-3">
      <div class="md:flex gap-6">
        <div>
          ${BreadCrumb(listBreadcrumb) + TITLE}
          <article tabindex="0" class="article">${content}</article>
          ${COMENT}
        </div>
        <div class="max-w-md">
          <div class="p-3">
            ${heading({ title: 'Lihat Postingan Lainnya :' })}
            <div class="postTextRelated" id="postTextRelated">
              ${relatedPost}
            </div>
          </div>
          ${contact(contactArgs)}
        </div>
      </div>
    </div>
  `
}
