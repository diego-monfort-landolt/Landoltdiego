import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://diego-monfort-landolt.github.io/Landoltdiego/Home',
  'https://diego-monfort-landolt.github.io/Landoltdiego/About':
  'https://diego-monfort-landolt.github.io/Landoltdiego/Contact'
  
})
