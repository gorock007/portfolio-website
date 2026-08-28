import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Bind IPv4 loopback explicitly. Left to its default, Vite here binds only
    // [::1], and a browser resolving "localhost" to 127.0.0.1 gets nothing.
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
