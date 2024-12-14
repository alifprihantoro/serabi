export default function BreadCrumbList(labelName: string) {
  return html`
    <div class="breadcrumbs max-w-md text-sm">
      <ul>
        <li><a href="/">Home</a></li>
        <li>
          <a href="/search/label/${labelName}"
            >${labelName.replace('%', ' ')}</a
          >
        </li>
      </ul>
    </div>
  `
}
