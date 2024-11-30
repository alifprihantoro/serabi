import { ICON_ABOUT, ICON_BLOG, ICON_CONTACT, ICON_HOME } from '../icons'

export type TLinksNav = {
  name: string
  url: string
  icon: string
}
export default [
  {
    icon: ICON_HOME,
    name: 'home',
    url: '/',
  },
  {
    icon: ICON_ABOUT,
    name: 'about',
    url: '/p/about.html',
  },
  {
    icon: ICON_CONTACT,
    name: 'contact',
    url: '/p/contact.html',
  },
  {
    icon: ICON_BLOG,
    name: 'Blog',
    url: '/search/label/blog',
  },
] as TLinksNav[]
