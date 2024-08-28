import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  optimizeDeps: {
    include: [
      '@emotion/react',
      '@emotion/styled',
      '@mui/material/Tooltip'
    ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
