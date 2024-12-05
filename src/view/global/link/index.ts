import bloggerHref from '../../../utils/blogger/href'

interface TArgs {
  name: string
  url: string
  isTargetBlank?: boolean
  className?: string
  rel?: string
  Attr?: string
}
const isBlogger = import.meta.env.BLOGGER === 'true'
export default function Link({
  name,
  url,
  isTargetBlank,
  className,
  rel,
  Attr,
}: TArgs) {
  const href = isBlogger ? bloggerHref(url) : `href="${url}"`
  const REL = rel ? `rel="${rel}"` : ''
  const CLASS = className ? `class="${className}"` : ''
  return `
    <a
      ${href + REL + CLASS}
      ${isTargetBlank ? 'target="_blank"' : ''}
      ${Attr || ''}
      >${name}</a
    >
  `
}
