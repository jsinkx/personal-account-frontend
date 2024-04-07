import million from 'million/compiler'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import eslint from 'vite-plugin-eslint'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import tsconfigPaths from 'vite-tsconfig-paths'

import reactRefresh from '@vitejs/plugin-react-swc'

export default defineConfig({
	base: './',
	plugins: [
		tsconfigPaths(), // Load paths (aliases) from tsconfig
		million.vite({}), // Load million compiler
		eslint(), // Linting
		reactRefresh(), // HMR
		ViteMinifyPlugin({}), // Minify
		splitVendorChunkPlugin(), // Split vendor chunks
	],
	build: {
		outDir: './build/',
		sourcemap: false,
		chunkSizeWarningLimit: 1600,
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 3000,
	},
	preview: {
		port: 3000,
	},
})
