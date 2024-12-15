import { test, expect } from '@playwright/test'

const WEB_URL = 'https://www.serabingampinbuyuni.biz.id/'
test('home', async ({ page, browserName, viewport, browser }) => {
  const PATH =
    'preview/' +
    browserName +
    '-' +
    viewport?.width +
    'x' +
    viewport?.height +
    '-'
  // const dir = 'out/video/' + browserName + '/' + viewport?.width + '/'
  // const ctx = await browser.newContext({
  //   recordVideo: {
  //     dir,
  //   },
  // })
  await page.goto(WEB_URL)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Serabi Ngampin Bu Yuni/)
  await page.screenshot({
    path: PATH + 'home.png',
  })
  await page.screenshot({
    path: PATH + '/full-' + 'home.png',
    fullPage: true,
  })
  await page.mouse.move(0, 100, {
    steps: 100,
  })
  // await ctx.close()
  // await page.video()?.path()
})