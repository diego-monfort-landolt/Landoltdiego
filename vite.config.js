import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://diego-monfort-landolt.github.io/Landoltdiego/Home',
  plugins: [react()]
})
