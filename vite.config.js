import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({ command }) => ({
  plugins: command === 'serve' ? [basicSsl()] : [],
  server: {
    https: true
  },
  build: {
    outDir: 'dist'
  }
}));
