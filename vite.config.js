import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      routes: path.resolve(__dirname, 'src/routes'),
      pages: path.resolve(__dirname, "src/pages"),
    },
  },
});