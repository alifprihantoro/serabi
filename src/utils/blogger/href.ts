export default function bloggerHref(VAR: string) {
  // if (VAR.match(/^\/.*/)) {
  //   return `expr:href="data:blog.canonicalHomepageUrl + '${VAR}'"`
  // }
  if (VAR.match(/^https?:\/\//) || VAR.match(/^mailto:/) || VAR.match(/^\//)) {
    return `href='${VAR}'`
  }
  return `expr:href='${VAR}'`
}
