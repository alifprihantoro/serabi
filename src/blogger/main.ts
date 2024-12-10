import { TELP } from '../configs/links/contact'
import owner from '../configs/links/owner'
import HomePage from '../view/home/page'
import head from './global/head'
import heroesArgs from '../configs/heroes'
import contactArgs from '../view/home/contact/dummy'
import skeleton from '../view/home/menu/skeleton'
import ListLoadmore from '../view/list/Loadmore/Skeleton'
import Layouts from './global/layouts'
import MainWidget from './widget/main'
import notFound from '../view/notFound'
import Blog from '../view/blog/page'
import listBreadcrumb from './post/breadCrumb'
import Laman from '../view/laman/page'
import List from '../view/list'
import menuPage from '../view/menuPage'
import { URL_SHOP } from '../configs/links/menu'
import { GMAPS } from '../configs/global'
import relatedSkeleton from '../view/blog/relatedPost/skeleton'
import relatedPost from './post/relatedPost'

const home = HomePage({
  Menu: skeleton,
  telp: TELP,
  aboutArgs: owner,
  heroesArgs: { ...heroesArgs, isBlogger: true },
  contactArgs,
})

const blog = Blog({
  title: '<data:post.title />',
  content: '<data:post.body />',
  commentUrl: 'data:post.addCommentUrl',
  contactArgs,
  listBreadcrumb,
  relatedPost: html`<div id="postSkeletonRelated">${relatedSkeleton}</div>
    ${relatedPost}`,
})
const laman = Laman({
  content: '<data:post.body />',
  title: '<data:post.title />',
  contactArgs,
})

const mainEl = MainWidget({
  menu: menuPage({
    title: '<data:post.title />',
    content: '<data:post.body />',
    contactArgs,
    menu: skeleton,
    url: {
      shop: URL_SHOP,
      comment: 'data:post.addCommentUrl',
      wa: TELP,
      gmaps: GMAPS,
    },
    aboutArgs: owner,
  }),
  blog,
  laman,
})

const list = List({
  title: '<data:post.title />',
  content: `<div id="list-article">${ListLoadmore}</div>`,
  contactArgs,
})

const CONTENT = Layouts({
  home,
  mainEl,
  notFound,
  list,
})
export default html`
  ${'<!DOCTYPE html>'}
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
