import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Serabi Ngampin Bu Yuni',
    brandUrl: '/',
    brandImage: 'https://www.serabingampinbuyuni.biz.id/favicon.ico',
    brandTarget: '_self',
  }),
})
