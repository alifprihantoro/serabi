import { TELP } from '../configs/links/contact'
import owner from '../configs/links/owner'
import HomePage from '../view/home/page'
import head from './global/head'
import heroesArgs from '../configs/heroes'
import contactArgs from '../view/home/contact/dummy'
import skeleton from '../view/home/menu/skeleton'
import Layouts from './global/layouts'
import MainWidget from './widget/main'
import notFound from '../view/notFound'
import Blog from '../view/blog/page'
import relatedPost from './post/relatedPost'
import listBreadcrumb from './post/breadCrumb'
import Laman from '../view/laman/page'
import List from '../view/list'

const home = HomePage({
  Menu: skeleton,
  telp: TELP,
  aboutArgs: owner,
  heroesArgs,
  contactArgs,
})

const blog = Blog({
  title: '<data:blog.pageTitle />',
  content: '<data:blog.body />',
  commentUrl: 'data:blog.addCommentUrl',
  relatedPost,
  contactArgs,
  listBreadcrumb,
})

const laman = Laman({
  content: '<data:page.body />',
  title: '<data:page.pageTitle />',
  contactArgs,
})

const mainEl = MainWidget({
  menu: skeleton,
  blog,
  laman,
})

const list =List({
  title: '<data:blog.pageTitle />',
  content:'<div id="list-article"></div>',
  contactArgs,
})

const CONTENT = Layouts({
  home,
  mainEl,
  notFound,
  list,
})
export default html`
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:b="http://www.google.com/2005/gml/b"
    xmlns:data="http://www.google.com/2005/gml/data"
    xmlns:expr="http://www.google.com/2005/gml/expr">
    &lt;!--<head>
      --&gt;&lt;head&gt; ${head} &lt;!--</head
    >--&gt;&lt;/head&gt; &lt;!--
    <body>
      --&gt;&lt;body&gt; ${CONTENT} &lt;!--
    </body>
    --&gt;&lt;/body&gt;
  </html>
`