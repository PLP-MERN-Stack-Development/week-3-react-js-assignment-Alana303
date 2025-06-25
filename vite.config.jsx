import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // 👈 force .js files to support JSX
    include: /src\/.*\.js$/, // only target your src files
  },
})
