import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })

// https://vite.dev/config/
export default {
  plugins: [react()],
  base: '/Recipe-Search/',
}