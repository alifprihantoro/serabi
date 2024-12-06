import { MAX_LIST_ARTICLE } from '../../../configs/global'

const SKELETON = html`
  <div
    class="flex rounded-md w-full max-w-md md:max-w-59 shadow-xl mb-3 p-3 gap-3">
    <div class="skeleton mt-3 mb-6 h-16 w-full max-w-24 "></div>
    <div class="w-full mt-3">
      <div class="skeleton my-3 h-3 w-full "></div>
      <div class="skeleton my-3 h-3 w-1/3 "></div>
    </div>
  </div>
`
let result = ''
for (let i = 0; i <= MAX_LIST_ARTICLE; i++) {
  result += SKELETON
}
result += html`<div class="skeleton mt-6 mb-9 h-9 w-full "></div> `

export default result
