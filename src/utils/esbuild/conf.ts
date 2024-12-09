import type { BuildOptions, SameShape } from 'esbuild'

export type TPkg = {
  dependencies?: string[]
  peerDependencies?: string[]
}
type TOpts = SameShape<BuildOptions, BuildOptions>
export default function (pkg: TPkg, opts: TOpts): TOpts {
  return {
    bundle: true,
    minify: true,
    // outdir: 'dist',
    platform: 'browser',
    format: 'cjs',
    external: [
      'vite',
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    ...opts,
  }
}
