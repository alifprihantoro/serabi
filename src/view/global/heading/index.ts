interface TArgs {
  content?: string
  btn?: string
  title: string
  id?: string
  className?: string
  btnAlign?: 'left' | 'right' // default left
}

export default function heading({
  content,
  btn,
  title,
  id,
  className,
  btnAlign,
}: TArgs) {
  id = id ? id : title.replace(' ', '-').toLowerCase()
  btn = btn ? html`<span class="ml-auto">${btn}</span>` : ''
  if (btnAlign === 'left') {
    className += ' flex-row-reverse'
    btn = html`<span class="mr-3">${btn}</span>`
  }
  return html`
    <h2
      class="text-2xl font-thin flex bg-primary/10 p-3 my-3 justify-start ${className ||
      ''}"
      id="${id}">
      <span class="self-center font-bold uppercase mr-auto"> ${title} </span>
      ${btn}
    </h2>
    ${content || ''}
  `
}
