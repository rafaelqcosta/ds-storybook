import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DS-Storybook',
      fileName: (format) => `ds-storybook.${format}.js`,
    },
    rollupOptions: {
      // Certifique-se de externalizar as dependências que você não deseja incluir no pacote final
      external: ['react', 'react-dom'],
      output: {
        // Forneça variáveis globais para essas dependências no caso de UMD
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
