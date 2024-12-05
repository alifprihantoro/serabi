import { MAX_LIST_ARTICLE } from '../../../configs/global'

const SKELETON = html`
  <div class="flex w-52 flex-col gap-4 my-3 p-6">
    <div class="flex items-center gap-4">
      <div class="skeleton h-16 w-16 shrink-0 rounded-full bg-primary/10"></div>
      <div class="flex flex-col gap-4">
        <div class="skeleton h-4 w-20 bg-primary/10"></div>
        <div class="skeleton h-4 w-28 bg-primary/10"></div>
      </div>
    </div>
  </div>
`
let result = ''
for (let i = 0; i <= MAX_LIST_ARTICLE; i++) {
  result += SKELETON
}
result += html`<div class="skeleton mt-3 mb-6 h-9 w-full bg-primary/10"></div> `

export default result
