import { ICON_CONTACT } from '../../../configs/icons'

export default function WaBtn(telp: number) {
  return html`
    <div class="fixed bottom-24 md:bottom-0 right-0 z-50 w-screen">
      <div class="w-full max-w-4xl m-auto text-right">
        <a
          href="https://wa.me/${telp}"
          class="text-white btn btn-circle bg-primary">
          ${ICON_CONTACT}
        </a>
      </div>
    </div>
  `
}
