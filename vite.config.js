import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Landoltdiego/',
  plugins: [react()],
    // ...existing configuration...
    server: {
      historyApiFallback: true,
    },
})