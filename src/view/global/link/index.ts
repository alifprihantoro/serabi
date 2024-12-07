import bloggerHref from '../../../utils/blogger/href'

interface TArgs {
  name: string
  url: string
  isTargetBlank?: boolean
  className?: string
  rel?: string
  Attr?: string
  title?: string
}
export default function Link({
  title,
  name,
  url,
  isTargetBlank,
  className,
  rel,
  Attr,
}: TArgs) {
  const href = bloggerHref(url)
  const REL = rel ? `rel="${rel}"` : ''
  const CLASS = className ? `class="${className}"` : ''
  return html`
    <a
      title="${title || 'url'}"
      ${href}
      ${REL}
      ${CLASS}
      ${isTargetBlank ? 'target="_blank"' : ''}
      ${Attr || ''}
      >${name}</a
    >
  `
}