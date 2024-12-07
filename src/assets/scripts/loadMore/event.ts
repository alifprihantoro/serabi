import RenderLoadmore from './Render'

type TArgs = {
  prev?: string
  PAGE_NUM: number
  isMenu: boolean
  id: string
  btn: string
}
export default async function LoadMoreEvent({
  PAGE_NUM,
  prev,
  isMenu,
  id,
  btn,
}: TArgs) {
  const ElList = document.getElementById(id)
  if (!ElList) {
    return
  }
  let OLD_EL = prev || ''

  const [CONTENT_LIST, isNext] = await RenderLoadmore(PAGE_NUM,id)
  OLD_EL = OLD_EL + CONTENT_LIST

  if (isNext) {
    ElList.innerHTML = OLD_EL + btn
    const ElListBtn = document.getElementById(`${id}-loadmore-btn`)!
    ElListBtn.onclick = () => {
      LoadMoreEvent({
        PAGE_NUM: PAGE_NUM + 1,
        isMenu,
        id,
        btn,
      })
    }
  } else {
    ElList.innerHTML = OLD_EL
  }
}
