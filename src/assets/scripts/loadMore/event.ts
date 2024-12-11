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
  let CONTENT = prev || ''

  const [NEW_CONTENT, isNext] = await RenderLoadmore(PAGE_NUM, id)
  CONTENT = CONTENT + NEW_CONTENT

  if (isNext) {
    ElList.innerHTML = CONTENT + btn
    const ElListBtn = document.getElementById(`${id}-loadmore-btn`)
    if (ElListBtn) {
      ElListBtn.onclick = () => {
        LoadMoreEvent({
          PAGE_NUM: PAGE_NUM + 1,
          isMenu,
          id,
          btn,
        })
      }
    }
  } else {
    ElList.innerHTML = CONTENT
  }
}
