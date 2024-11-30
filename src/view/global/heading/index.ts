interface TArgs {
  content: string
  btn: string
  title: string
}

export default function heading({ content: list, btn, title }: TArgs) {
  return html`
    <h2 class="text-2xl font-thin flex bg-primary/10 p-3 my-3 ">
      <span class="self-center bold uppercase">${title}</span>
      <span class="ml-auto">${btn}</span>
    </h2>
    <div class="flex w-full max-w-4xl gap-4">${list}</div>
  `
}
