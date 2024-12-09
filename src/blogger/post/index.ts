import Blog from '../../view/blog/page'
import breadCrumb from './breadCrumb'
import contactArgs from '../../view/home/contact/dummy'
import relatedPost from './relatedPost'

//TODO: comment url
export default Blog({
  listBreadcrumb: breadCrumb,
  title: '<data:post.title />',
  content: '<data:post.body />',
  commentUrl: 'data:post.addCommentUrl',
  relatedPost,
  contactArgs,
})
