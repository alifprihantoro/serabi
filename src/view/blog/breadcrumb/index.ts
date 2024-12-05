export default function BreadCrumb(childern: string) {
  return html`
    <div class="breadcrumbs max-w-xs text-sm">
      <ul>
        ${childern}
      </ul>
    </div>
  `
}
