import style from '../../assets/css/main/init.css?inline'
import { IMG_SERABI, IMG_SERABI_MIN } from '../../configs/images'
import seo from './seo'

export default html`
  <b:if cond="data:view.isHomepage">
    <b:if cond="data:blog.isMobile">
      <link rel="preload" as="image" href="${IMG_SERABI_MIN}" />
      <b:else />
      <link rel="preload" as="image" href="${IMG_SERABI}" />
    </b:if>
  </b:if>
  ${seo}
  <b:skin> <![CDATA[ ${style} ]]> </b:skin>
`
