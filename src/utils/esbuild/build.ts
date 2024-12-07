import { build } from 'esbuild'
import { readFileSync } from 'fs'
import esbuildConf, { type TPkg } from './conf'

/**
 * all input start with `src/assets/scripts/`
 * all output start with `out/`
 * @returns path output
 */
export default async function Build(input: string, output: string) {
  const OUT_FILE = `out/${output}.js`

  const bundleFile = async () => {
    const PKG_JSON = readFileSync('./package.json').toString()
    const getPkg = JSON.parse(PKG_JSON) as TPkg

    const Opts = esbuildConf(getPkg, {
      entryPoints: [`src/assets/scripts/${input}`],
      outfile: OUT_FILE,
    })

    await build(Opts)
  }
  await bundleFile()
  return OUT_FILE
}
