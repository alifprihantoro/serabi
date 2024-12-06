const LIST = html`
  <div class="my-6">
    <div class="h-3 mb-3 skeleton w-full"></div>
    <div class="h-3 skeleton w-1/3"></div>
  </div>
`
let result = ''
for (let i = 0; i < 5; i++) {
  result += LIST
}
export default result
