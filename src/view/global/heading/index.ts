interface TArgs {
  content?: string
  btn?: string
  title: string
  id?: string
  className?: string
  btnAlign?: 'left' | 'right' // default left
  isH1?: boolean // default h1
}

export default function heading({
  isH1,
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
  const TAG = isH1 ? 'h1' : 'h2'
  return html`
    <${TAG}
      tabindex="0"
      class="text-2xl font-thin flex bg-primary/10 p-3
      my-3 justify-start text-primary ${className || ''}"
      id="${id}">
      <span class="self-center font-bold uppercase mr-auto"> ${title} </span>
      ${btn}
    </${TAG}>
    ${content || ''}
  `
}
