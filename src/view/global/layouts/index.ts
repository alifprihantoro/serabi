import Footer from '../footer'
import Nav from '../nav'
import navArgs from '../../global/nav/dummy'
import footerArgs from '../../global/footer/dummy'
import WaBtn from '../waBtn'

type TArgs = {
  childern: string
  isHome: boolean
}
export default function Layouts({ childern, isHome }: TArgs) {
  return html`
    <div class="shadow-primary/30 shadow mx-3 max-w-4xl md:m-auto">
      ${Nav({ ...navArgs, isHome }) + childern + Footer(footerArgs) + WaBtn}
    </div>
  `
}