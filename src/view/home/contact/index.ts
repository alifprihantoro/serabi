import { ICON_CONTACT } from '../../../configs/icons'
import heading from '../../global/heading'
import Link from '../../global/link'

type TList = {
  name: string
  icon: string
  url: string
}
export type TArgs = {
  ListContact: TList[]
  ListSosmed: TList[]
  mapsSearch: string
}
export default function contact({
  ListContact,
  ListSosmed,
  mapsSearch: maps,
}: TArgs) {
  const LIST_CONTACT = ListContact.map(({ name, icon, url }) =>
    Link({
      url,
      name: icon + name,
      isTargetBlank: true,
      className: 'btn btn-primary text-white',
    }),
  ).join('')

  const LIST_SOSMED = ListSosmed.map(({ name, icon, url }) =>
    Link({
      url,
      name: icon + name,
      isTargetBlank: true,
      className: 'btn btn-primary text-white',
    }),
  ).join('')

  const CONTENT = heading({
    className: 'text-primary',
    content: html`
      <div class="flex flex-wrap gap-3 p-3">${LIST_CONTACT + LIST_SOSMED}</div>
    `,
    btn: ICON_CONTACT,
    title: 'contact',
  })
  const URL_MAP = `https://maps.google.com/maps?q=${maps.replace(/ /g, '%20')}&t=&z=19&ie=UTF8&iwloc=&output=embed`
  return html`
    <div class="md:ml-3">
      <div class="mb-3">${CONTENT}</div>
      <iframe
        title="lokasi ${maps}"
        class="w-full mb-3 px-3"
        id="gmap_canvas"
        src="${URL_MAP}"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>
    </div>
  `
}
