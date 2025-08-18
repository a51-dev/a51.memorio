import esbuild from 'esbuild'
import { copy } from 'esbuild-plugin-copy'
import { clean } from 'esbuild-plugin-clean'

esbuild.build(
  {
    entryPoints: ['init.ts'],
    outfile: 'dist/index.js',
    legalComments: 'none',
    color: true,
    bundle: true,
    minify: true,
    sourcemap: false,
    allowOverwrite: true,
    plugins: [
      clean(
        {
          patterns: [
            './dist/*'
          ]
        }
      ),
      copy(
        {
          assets: [
            {
              from: 'types/**/*',
              to: './types'
            },
            {
              from: '.github/**/*',
              to: './'
            },
            {
              from: './package.json',
              to: './package.json'
            },
            {
              from: './index.d.ts',
              to: './index.d.ts'
            }
          ]
        }
      )
    ]
  }
)
  .catch(
    () => process.exit(1)
  )
