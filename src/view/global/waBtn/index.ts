import { ICON_CONTACT } from '../../../configs/icons'

export default function WaBtn(telp: number) {
  return html`
    <a
      href="https://wa.me/${telp}"
      class="fixed bottom-24 right-3 text-white z-50 btn btn-circle bg-primary">
      ${ICON_CONTACT}
    </a>
  `
}
