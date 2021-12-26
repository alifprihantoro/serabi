// samakan kayak klick url
window.addEventListener('popstate', function (event) {
	// The URL changed...
  console.log(event)
  const link = this.window.location.href
  console.log(link)
const cls = link.split("#")[1]
  console.log(cls)
  const body =  document.getElementsByTagName("BODY")[0]
  console.log(body)
  body.className = cls

  // alert(`ganti link ${window.location.href}`)
});
