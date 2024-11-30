export default function bloggerHref(VAR: string) {
  if (VAR.match(/^\/.*/)) {
    return `expr:href='data:blog.homepageUrl+${VAR}'`
  }
  if (VAR.match(/^https?:\/\//) || VAR.match(/^mailto:/)) {
    return `href='${VAR}'`
  }
  return `expr:href='${VAR}'`
}
