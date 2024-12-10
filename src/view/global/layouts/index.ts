import Footer from '../footer'
import Nav from '../nav'
import navArgs from '../../global/nav/dummy'
import footerArgs from '../../global/footer/dummy'
import WaBtn from '../waBtn'
import tabBtn from '../skipLink'

type TArgs = {
  childern: string
  isHome?: boolean
  isBlogger?: boolean
}
export default function ViewLayouts({ childern, isHome, isBlogger }: TArgs) {
  const content = isBlogger
    ? childern
    : Nav({ ...navArgs, isHome }) + childern + Footer(footerArgs) + WaBtn

  return html`
    ${tabBtn}
    <div class="shadow-primary/30 shadow max-w-4xl md:m-auto">${content}</div>
  `
}