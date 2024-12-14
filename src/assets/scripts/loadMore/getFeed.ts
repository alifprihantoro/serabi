import { MAX_LIST_ARTICLE } from '../../../configs/global'
import BreadCrumbList from '../../../view/list/breadCrumb'

const getLabelFromUrl = (id: string) => {
  if (id === 'menu-onsite') {
    return 'onsite'
  }
  if (id === 'menu-preorder') {
    return 'preorder'
  }
  const PATH_NAME = new URL(window.location.href).pathname
  const Regex = /\/search\/label\//gim
  if (PATH_NAME.match(Regex)) {
    const LABEL_NAME = PATH_NAME.replace(Regex, '')
    document.getElementById('title-list')!.innerHTML = BreadCrumbList(LABEL_NAME)
    return LABEL_NAME
  }
  return ''
}
export default async function getFeed(PAGE_NUM: number, id: string) {
  const LABEL_NAME = getLabelFromUrl(id)

  const getUrl = window.location.origin
  const MAX_LIST = MAX_LIST_ARTICLE
  const isSearch = getUrl.match(/\?q=(.*)/)
  const ORDER_BY = 'updated' // updated, starttime
  const START_INDEX = PAGE_NUM === 1 ? 1 : PAGE_NUM * MAX_LIST - 5
  const SEARCH = isSearch ? `&q=${isSearch[1]}` : ''
  const LABEL = `&category=${LABEL_NAME}`
  const URL_FEED = `${getUrl}/feeds/posts/summary?alt=json&max-results=${MAX_LIST}&start-index=${START_INDEX}&orderby=${ORDER_BY}${LABEL}${SEARCH}`
  const CONTENT = await fetch(URL_FEED).then((res) => res.json())

  const FEED = CONTENT.feed
  const isNext: boolean = FEED.link.some(({ rel }: { rel: string }) => {
    if (rel === 'next') {
      return true
    }
  })

  const LIST_CONTET = FEED.entry
  return { isNext, LIST_CONTET }
}
