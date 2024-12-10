import { MAPS_SEARCH } from '../../configs/global'

const URL_MAP = `https://maps.google.com/maps?q=${MAPS_SEARCH.replace(/ /g, '%20')}&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed`
const createLink = (href: string, rel: string, isCrossOrigin?: boolean) => {
  const fonts = document.getElementById('gmaps')!
  const link = document.createElement('link')
  link.href = href
  link.rel = rel
  if (isCrossOrigin) {
    link.crossOrigin = 'anonymous'
  }
  fonts.appendChild(link)
}
window.addEventListener('load', function () {
  // GMAPS
  const map = document.getElementById('gmaps')!
  const frame = document.createElement('iframe')
  frame.src = URL_MAP
  frame.title = 'lokasi ${maps}'
  frame.className = 'w-full h-96'
  map.appendChild(frame)
  // FONT
  createLink('https://fonts.googleapis.com', 'preconnect')
  createLink('https://fonts.gstatic.com', 'preconnect')
  createLink(
    'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap',
    'stylesheet',
  )
})
