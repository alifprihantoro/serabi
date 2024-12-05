import heading from '../../global/heading'
import Layouts from '../../global/layouts'
import contact, { type TArgs as TContact } from '../../home/contact'

export type TArgs = {
  content: string
  title: string
  commentUrl: string
  contactArgs: TContact
}
export default function Blog({
  content,
  title,
  commentUrl,
  contactArgs,
}: TArgs) {
  const TITLE = heading({
    title,
    className: 'mb-3',
  })
  return Layouts({
    childern: html`
      <div class="my-6 mx-3">
        <div class="md:flex gap-6">
          <div>
            ${TITLE}
            <article class="prose lg:prose-xl break-words max-w-md">
              ${content}
            </article>
            <a class="btn btn-primary w-full my-6" href="${commentUrl}"
              >Beri Komentar</a
            >
          </div>
          <div>
            <div class="p-3">
              ${heading({ title: 'Lihat Postingan Lainnya :' })}
              <ul class="list-disc prose pl-9 my-3">
                <li>
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore.
                </li>
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
