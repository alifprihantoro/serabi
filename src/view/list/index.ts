import heading from '../global/heading'
import contact, { type TArgs as TContact } from '../home/contact'

export type TArgs = {
  content: string
  title: string
  contactArgs: TContact
}
export default function List({ content, title, contactArgs }: TArgs) {
  const TITLE = heading({
    title,
    className: 'mb-3 w-full max-w-md',
    id: 'title-list-article',
  })
  return html`
    <div class="my-6 mx-3">
      <div class="md:flex gap-6">
        <div>${TITLE + content}</div>
        <div class="max-w-md">${contact(contactArgs)}</div>
      </div>
    </div>
  `
}
