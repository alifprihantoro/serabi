import { BTN_NAME } from '../../../configs/links/menu'
import Card from '../../../view/global/card'
import CardList from '../../../view/list/Loadmore/Card'
import getFeed from './getFeed'

type TArgsListContent = {
  published: { $t: string }
  updated: { $t: string }
  title: { $t: string }
  summary: { $t: string }
  media$thumbnail?: {
    url: string
  }
  link: { rel: string; href: string }[]
  author: {
    name: { $t: string }
    gd$image: { src: string }
  }[]
}
export type TArgsRender = (Args: TArgsListContent) => string
export default async function RenderLoadmore(PAGE_NUM: number,id:string) {
  const { LIST_CONTET, isNext } = await getFeed(PAGE_NUM,id)
  const ListEl: string[] = LIST_CONTET.map(
    (ArgsListContent: TArgsListContent) => {
      const { link, title } = ArgsListContent
      const IMG = ArgsListContent.media$thumbnail?.url
      const url = link
        .map(({ rel, href }) => {
          if (rel === 'alternate') {
            return href
          }
        })
        .join('')

      if (id==='list-article') {
        return CardList({
          title:title.$t,
          url,
          img: {
            url: IMG || '',
            alt: title.$t,
            name: title.$t,
          },
        })
      }
      return Card({
        title: title.$t,
        img: {
          url: IMG || '',
          alt: title.$t,
          name: title.$t,
        },
        btn: {
          url,
          name:BTN_NAME,
        },
      })
    },
  )
  return [ListEl.join(''), isNext] as const
}