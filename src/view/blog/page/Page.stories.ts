import { IMG_SERABI } from '../../../configs/images'
import Page, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import contactArgs from '../../home/contact/dummy'
import relatedPost from '../relatedPost'
import Skeleton from '../relatedPost/skeleton'

type Story = StoryObj<TArgs>
const args: TArgs = {
  relatedPost,
  commentUrl: '/',
  title: 'Jelajah Kuliner Ambarawa, Semarang, dan Salatiga',
  contactArgs,
  breadCrumb: html`
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/blog">Blog</a>
    </li>
    <li>
      <a href="/blog/jelajah-kuliner-ambarawa-semarang-dan-salatiga"
        >Jelajah Kuliner Ambarawa, Semarang, dan Salatiga</a
      >
    </li>
  `,
  content: html`
    <img
      alt="gambar serabi rasa pandan"
      class="image-full"
      src="${IMG_SERABI}" />
    <p>
      Daerah Ambarawa, Semarang, dan Salatiga tidak hanya kaya akan sejarah dan
      keindahan alam, tetapi juga menawarkan beragam kuliner yang menggugah
      selera. Mulai dari makanan khas daerah hingga sajian modern, di sini Anda
      akan menemukan surga bagi para pecinta kuliner.
    </p>

    <h2>Kuliner Khas Ambarawa</h2>
    <p>
      Ambarawa terkenal dengan serabi Ngampin yang unik. Kue serabi ini memiliki
      ukuran kecil-kecil dan disajikan dengan kuah santan yang gurih. Salah satu
      tempat yang wajib Anda kunjungi untuk mencicipi serabi Ngampin adalah
      <strong>Warung Serabi Ngampin Bu Yuni</strong>. Lokasinya sangat strategis
      dan mudah dijangkau. Untuk menemukannya, Anda bisa menggunakan Google Maps
      melalui link berikut:
      <a href="https://maps.app.goo.gl/qSc7Rvcf79dD2h5S7"
        >https://maps.app.goo.gl/qSc7Rvcf79dD2h5S7</a
      >
    </p>

    <h2>Kuliner Legendaris Semarang</h2>
    <p>
      Semarang memiliki banyak pilihan kuliner legendaris yang sudah terkenal
      hingga ke luar kota. Beberapa di antaranya adalah lumpia Semarang, tahu
      gimbal, dan bandeng presto. Selain itu, Anda juga bisa menemukan berbagai
      macam makanan laut segar di sepanjang pantai Semarang.
    </p>

    <h2>Kuliner Unik Salatiga</h2>
    <p>
      Salatiga menawarkan kuliner yang tak kalah menarik dengan kota-kota
      lainnya. Beberapa makanan khas Salatiga yang wajib Anda coba adalah sate
      Suruh, pecel keong, dan gecok kambing. Rasa unik dan cita rasa otentik
      dari makanan-makanan ini akan membuat Anda ketagihan.
    </p>

    <h2>Ajakan untuk Mencoba</h2>
    <p>
      Jika Anda sedang berkunjung ke daerah Ambarawa, Semarang, atau Salatiga,
      jangan lewatkan kesempatan untuk mencicipi beragam kulinernya. Rasakan
      sensasi kelezatan makanan khas daerah yang autentik. Kunjungi
      <strong>Warung Serabi Ngampin Bu Yuni</strong> dan nikmati serabi Ngampin
      yang lezat. Dijamin Anda tidak akan kecewa!
    </p>
  `,
}

const DEFAULT: Story = {
  args,
  render: (Args) => {
    return Page(Args)
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const page: Story = {}
const skeletonArgs = {
  ...args,
  relatedPost: Skeleton,
}
export const skeleton: Story = {
  args: skeletonArgs,
}
