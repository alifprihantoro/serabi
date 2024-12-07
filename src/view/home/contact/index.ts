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

const contactList = (list: TList[]) => {
  return list
    .map(({ name, icon, url }) =>
      Link({
        url,
        name: icon + name,
        isTargetBlank: true,
        className: 'btn btn-primary',
      }),
    )
    .join('')
}

export default function contact({
  ListContact,
  ListSosmed,
  mapsSearch: maps,
}: TArgs) {
  const LIST_CONTACT = contactList(ListContact)
  const LIST_SOSMED = contactList(ListSosmed)
  const CONTENT = heading({
    content: html`
      <div class="flex flex-wrap gap-3 p-3">${LIST_CONTACT + LIST_SOSMED}</div>
    `,
    btn: ICON_CONTACT,
    title: 'contact',
  })
  const URL_MAP = `https://maps.google.com/maps?q=${maps.replace(/ /g, '%20')}&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed`
  return html`
    <div class="md:ml-3">
      <div class="mb-3">${CONTENT}</div>
      <div class="w-11/12 mx-auto h-96 skeleton mb-3">
      <iframe
        loading="lazy"
        title="lokasi ${maps}"
        class="w-full h-96"
        id="gmap_canvas"
        src="${URL_MAP}"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>
      </div>
    </div>
  `
}