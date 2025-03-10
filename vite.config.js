import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://diego-monfort-landolt.github.io/Landoltdiego/',
  plugins: [react()],
    // ...existing configuration...
    server: {
      historyApiFallback: true,
    },
})