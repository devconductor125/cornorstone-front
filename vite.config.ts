import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the production build
    assetsInlineLimit: 4096, // The maximum size for inlining assets (in bytes)
    sourcemap: false, // Set to true to generate sourcemaps for the production build
    minify: 'terser', // Choose the minifier for the production build (options: 'terser', 'esbuild', 'uglify-js')
    emptyOutDir: true, // Whether to remove the contents of the output directory before building
  },
  server: {
    port: 3000, // The development server port
    open: true, // Whether to open the browser automatically when running the dev server
  },
});
