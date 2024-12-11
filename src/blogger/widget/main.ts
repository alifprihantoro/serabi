type TArgs = {
  blog: string
  laman: string
  menu: string
}
const LABEL_NAME = 'menu'
// if you have mobile ver. you need 2 id for mobile and desktop
// WARNING:dont remove b:include, because that will be auto generate in blogger template
export default function MainWidget({ blog, laman, menu }: TArgs) {
  const BODY = html`
    <b:if cond="data:view.isPost">
      <b:if
        cond='data:post.labels any (label =&gt; label.name == "${LABEL_NAME}")'>
        ${menu}
        <b:else />
        ${blog}
      </b:if>
    </b:if>
    <b:if cond="data:view.isPage"> ${laman} </b:if>
  `
  return html`
    <b:section class="main" id="main" showaddelement="yes">
      <b:widget
        id="Blog1"
        locked="false"
        title="Postingan Blog"
        type="Blog"
        version="1">
        <b:includable id="mobile-index-post" var="post"> </b:includable>
        <b:includable id="mobile-nextprev "> </b:includable>
        <b:includable id="mobile-post" var="post">${BODY} </b:includable>
        <b:includable id="nextprev"> </b:includable>
        <b:includable id="post" var="post"> ${BODY} </b:includable>
        <b:includable id="status-message"> </b:includable>
        <b:includable id="feedLinks"></b:includable>
      </b:widget>
    </b:section>
  `
}
