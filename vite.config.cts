/// <reference types="vite/client" />
/// <reference types="vitest" />
import path, { resolve } from 'path';
import react from '@vitejs/plugin-react'
import { libInjectCss} from 'vite-plugin-lib-inject-css';
import { globSync } from 'fs';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';
import vite from 'vite';

const defineConfig = vite.defineConfig;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ exclude: ['**/*.stories.tsx'] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync(['src/components/**/index.tsx', 'src/main.ts']).map((file) => {
          const entryName = path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          )
          const entryUrl = fileURLToPath(new URL(file, import.meta.url))
          return [entryName, entryUrl]
        })
      ),
      output: {
        entryFileNames: '[name].ts',
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      include: ['src/components'],
      exclude: ['**/*.stories.tsx'],
    },
  },
})
