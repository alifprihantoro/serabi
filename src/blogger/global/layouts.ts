import Footer from '../../view/global/footer'
import ViewLayout from '../../view/global/layouts'
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
const LoadmoreScript = await Build('loadMore/index.ts', 'loadmore.js')
const AfterLoadScript = await Build('afterLoad.ts', 'afterLoad.js')
export default function BloggerLayouts({ home, mainEl, notFound, list }: TArgs) {
  return ViewLayout({
    isBlogger: true,
    childern: html`
      <b:if cond="data:view.isHomepage">
        ${Nav({ ...navArgs, isHome: true })}
        <b:else />
        ${Nav({ ...navArgs, isHome: false })}
      </b:if>
      <b:if cond="data:view.isError">${notFound} </b:if>
      <b:if cond="data:view.isHomepage"> ${home} </b:if>
      <b:if cond="data:view.isMultipleItems and !data:view.isHomepage"> ${list} </b:if>
      ${mainEl} ${Footer(footerArgs)}
      <b:if cond="!data:view.isError">
        <script type="text/javascript">
          /*<![CDATA[*/
          ${LoadmoreScript}
          /*]]>*/
        </script>
      </b:if>
      <div id="google-fonts"></div>
        <script type="text/javascript">
          /*<![CDATA[*/
          ${AfterLoadScript}
          /*]]>*/
        </script>
    `,
  })
}