const scripts =
  '<script >/*<![CDATA[*/ var relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array;function related_results_labels(e){for(var t=0;t<e.feed.entry.length;t++){var l=e.feed.entry[t];relatedTitles[relatedTitlesNum]=l.title.$t;for(var r=0;r<l.link.length;r++)if("alternate"==l.link[r].rel){relatedUrls[relatedTitlesNum]=l.link[r].href,relatedTitlesNum++;break}}}function removeRelatedDuplicates(){for(var e=new Array(0),t=new Array(0),l=0;l<relatedUrls.length;l++)contains(e,relatedUrls[l])||(e.length+=1,e[e.length-1]=relatedUrls[l],t.length+=1,t[t.length-1]=relatedTitles[l]);relatedTitles=t,relatedUrls=e}function contains(e,t){for(var l=0;l<e.length;l++)if(e[l]==t)return!0;return!1}function printRelatedLabels(){for(var e=Math.floor((relatedTitles.length-1)*Math.random()),t=0;t<relatedTitles.length&&t<20;){var l=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("a");a.setAttribute("href",relatedUrls[e]),a.setAttribute("target","_blank"),a.innerText=relatedTitles[e],l.appendChild(r),r.appendChild(a),document.querySelector(".postTextRelated").appendChild(l),e<relatedTitles.length-1?e++:e=0,t++}} /*]]>*/</script>'

export default html`
  <!-- letakkan kode ini harus di bawah kode <data:post.body/> -->
  ${scripts}
  <b:if cond="data:post.labels">
    <b:loop index="i" values="data:post.labels" var="label">
      <b:if cond="data:i&lt;1">
        <script
          expr:src='"/feeds/posts/default/-/" + data:label.name + "?alt=json-in-script&amp;callback=related_results_labels&amp;max-results=3"'
          rel="preload"></script>
      </b:if>
    </b:loop>
  </b:if>
  <script>
    removeRelatedDuplicates()
    printRelatedLabels()
  </script>
  <script>
    /*<![CDATA[*/
    // (postBody) sesuaikan dengan kode di template kalian, biasanya dapat di lihat pebungkus kode ini <data:post.body/> contoh <div class='postBody'><data:post.body/></div>
    !(function () {
      let c = document.querySelector('#postTextRelated')
      if (c) {
        let a = document.querySelectorAll('.postBody p'),
          b = parseInt(a.length / 2)
        if (a.length > 0) {
          c.style.display = 'block'
          'P' == a[b].nodeName
            ? a[b].parentNode.insertBefore(c, a[b])
            : a[b].parentNode.insertBefore(c, a[b].nextSibling)
        }
      }
    })()
    /*]]>*/
  </script>
`
