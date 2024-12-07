import heading from '../../global/heading'
import Layouts from '../../global/layouts'
import contact, { type TArgs as TContact } from '../../home/contact'

// TODO: isBlank pages
export type TArgs = {
  content: string
  title: string
  contactArgs: TContact
}
export default function Laman({ content, title, contactArgs }: TArgs) {
  const TITLE = heading({
    title,
    className: 'mb-3 w-full max-w-md',
    id:'content',
  })
  return Layouts({
    childern: html`
      <div class="my-6 mx-3">
        <div class="md:flex gap-6">
          <div>
            ${TITLE}
            <article class="prose prose-xl break-words max-w-md">
              ${content}
            </article>
          </div>
          <div class="max-w-md">${contact(contactArgs)}</div>
        </div>
      </div>
    `,
    isHome: false,
  })
}