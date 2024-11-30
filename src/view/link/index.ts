import bloggerHref from '../../utils/blogger/href'

interface TArgs {
  name: string
  url: string
  isTargetBlank: boolean
  className?: string
  rel?: string
}
const isBlogger = process.env.isBlogger === 'true'
export default function Link({
  name,
  url,
  isTargetBlank,
  className,
  rel,
}: TArgs) {
  const href = isBlogger ? bloggerHref(url) : `href="${url}"`
  const REL = rel ? `rel="${rel}"` : ''
  const CLASS = className ? `class="${className}"` : ''
  return html`
    <a ${href} ${isTargetBlank ? 'target="_blank"' : ''} ${REL} ${CLASS}
      >${name}</a
    >
  `
}
