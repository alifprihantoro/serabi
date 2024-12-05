import heading from '../../global/heading'
import Layouts from '../../global/layouts'

export type TArgs = {
  content: string
  title: string
  commentUrl: string
}
export default function Blog({ content, title, commentUrl }: TArgs) {
  const TITLE = heading({
    title,
    className: 'mb-3',
  })
  return Layouts({
    childern: html`
      <div class="my-6 mx-3">
        ${TITLE}
        <article>${content}</article>
        <a class="btn btn-primary w-full" href="${commentUrl}">Beri Komentar</a>
      </div>
    `,
    isHome: false,
  })
}