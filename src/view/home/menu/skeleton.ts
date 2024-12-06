import { Layouts } from '.'
import skeleton from '../../global/card/skeleton'
import heading from '../../global/heading'

const btn = html`<div class="h-3 skeleton w-full"></div>`
let cardSkeleton = ''
for (let i = 0; i <= 5; i++) {
  cardSkeleton += skeleton
}
const content = Layouts(cardSkeleton)
const LISTS = `${heading({
  id: 'menu',
  title: 'Menu Makan di Tempat lo',
  btn,
  //TODO: merge content
  content,
})}</br>${heading({
  title: 'Menu Pre-order',
  btn,
  content,
})}`

export default html` <div>${LISTS}</div> `