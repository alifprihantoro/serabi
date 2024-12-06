import heading from '../../global/heading'
import Layouts from '../../global/layouts'
import contact, { type TArgs as TContact } from '../../home/contact'
import BreadCrumb from '../breadcrumb'

export type TArgs = {
  content: string
  title: string
  commentUrl: string
  contactArgs: TContact
  breadCrumb: string
  relatedPost: string
}
export default function Blog({
  content,
  title,
  commentUrl,
  contactArgs,
  breadCrumb,
  relatedPost,
}: TArgs) {
  const TITLE = heading({
    title,
    className: 'mb-3 max-w-md',
  })
  return Layouts({
    childern: html`
      <div class="my-6 mx-3">
        <div class="md:flex gap-6">
          <div>
            ${BreadCrumb(breadCrumb) + TITLE}
            <article class="prose prose-xl break-words max-w-md">
              ${content}
            </article>
            <a class="btn btn-primary w-full my-6 max-w-md" href="${commentUrl}"
              >Beri Komentar</a
            >
          </div>
          <div class="max-w-md">
            <div class="p-3">
              ${heading({ title: 'Lihat Postingan Lainnya :' })}
              <ul class="list-disc list-inside prose my-3 pl-3">
                ${relatedPost}
              </ul>
            </div>
            ${contact(contactArgs)}
          </div>
        </div>
      </div>
    `,
    isHome: false,
  })
}
