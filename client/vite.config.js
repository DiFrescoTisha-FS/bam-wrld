import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_CLOUDINARY_NAME: process.env.VITE_CLOUDINARY_NAME,
      VITE_BACKEND_URL: process.env.VITE_BACKEND_URL,
      VITE_FRONTEND_URL: process.env.VITE_FRONTEND_URL,
      VITE_PROXY_URL: process.env.VITE_PROXY_URL
    },
  },
});
