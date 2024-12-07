import LoadMoreEvent from './event'
import btn from '../../../view/list/Loadmore/btn'
import { LOAD_MORE } from '../../../view/home/menu/btn'

LoadMoreEvent({
  PAGE_NUM: 1,
  isMenu: false,
  id: 'list-article',
  btn,
})

LoadMoreEvent({
  PAGE_NUM: 1,
  isMenu: true,
  id: 'menu-onsite',
  btn: LOAD_MORE,
})
LoadMoreEvent({
  PAGE_NUM: 1,
  isMenu: true,
  id: 'menu-preorder',
  btn: LOAD_MORE,
})
