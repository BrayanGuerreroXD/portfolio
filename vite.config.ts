import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served from https://brayanguerreroxd.github.io/portfolio/ → base must match
// the repo name in production. Dev stays at root for convenience.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react()],
}))
