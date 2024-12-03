interface TArgs {
  content: string
  btn: string
  title: string
  id?: string
  className?: string
}

export default function heading({ content, btn, title, id, className }: TArgs) {
  id = id ? id : title.replace(' ', '-').toLowerCase()
  return html`
    <h2
      class="text-2xl font-thin flex bg-primary/10 p-3 my-3 ${className || ''}"
      id="${id}">
      <span class="self-center !bold uppercase">${title}</span>
      <span class="ml-auto">${btn}</span>
    </h2>
    ${content}
  `
}