import Footer from '../../view/global/footer'
import Layout from '../../view/global/layouts'
import Nav from '../../view/global/nav'
import navArgs from '../../view/global/nav/dummy'
import footerArgs from '../../view/global/footer/dummy'
import Build from '../../utils/esbuild/build'

type TArgs = {
  home: string
  mainEl: string
  notFound: string
  list: string
}
const script = await Build('loadMore/index.ts', 'loadmore.js')
export default function Layouts({ home, mainEl, notFound, list }: TArgs) {
  return Layout({
    isBlogger: true,
    childern: html`
      <b:if cond="data:view.isHomepage">
        ${Nav({ ...navArgs, isHome: true })}
        <b:else />
        ${Nav({ ...navArgs, isHome: false })}
      </b:if>
      <b:if cond="data:view.isError">${notFound} </b:if>
      <b:if cond="data:view.isHomepage"> ${home} </b:if>
      <b:if cond="data:view.isMultipleItems"> ${list} </b:if>
      ${mainEl} ${Footer(footerArgs)}
      <b:if cond="data:view.isHomepage or data:view.isPost">
        <script type="text/javascript">
          /*<![CDATA[*/
          ${script}
          /*]]>*/
        </script>
      </b:if>
    `,
  })
}
