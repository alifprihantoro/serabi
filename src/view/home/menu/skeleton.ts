import { BTN, Layouts } from '.'
import skeleton from '../../global/card/skeleton'
import heading from '../../global/heading'

let cardSkeleton = ''
for (let i = 0; i <= 5; i++) {
  cardSkeleton += skeleton
}
const LISTS = `${heading({
  title: 'Menu di Warung',
  btn:BTN('/#menu-onsite'),
  content:Layouts(cardSkeleton,'menu-onsite'),
})}<br/>${heading({
  title: 'Menu Pre-order',
  btn:BTN('/#menu-preorder'),
  content:Layouts(cardSkeleton,'menu-preorder'),
})}`

export default html` <div>${LISTS}</div> `