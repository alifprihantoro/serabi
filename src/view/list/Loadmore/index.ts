import btn from './btn'
import Card from './Card'

type TList = {
  title: string
  url: string
  img: string
}

type TArgs = {
  List: TList[]
  isLoadmore: boolean
}
export default function Loadmore({ List, isLoadmore }: TArgs) {
  const LIST = List.map(({ title, url, img }) =>
    Card({
      title,
      url,
      img: {
        url: img,
        alt: `thumbnail ${title}`,
        name: `thumbnail ${title}`,
      },
    }),
  ).join('')
  const BTN = isLoadmore ? btn : ''
  return LIST + BTN
}