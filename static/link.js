const ccls = ()=>{
	// The URL changed...
  const link = this.window.location.href
  // console.log(link)
  const cls = link.split("#")[1]
  // console.log(cls)
  const body =  document.getElementsByTagName("BODY")[0]
  // console.log(body)
  body.className = cls
}
ccls()
// samakan kayak klick url
window.addEventListener('popstate', function () {
ccls()
});
