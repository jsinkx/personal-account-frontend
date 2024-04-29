import million from 'million/compiler'
import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import eslint from 'vite-plugin-eslint'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import tsconfigPaths from 'vite-tsconfig-paths'

import reactRefresh from '@vitejs/plugin-react-swc'

const PORT = 3000

export default defineConfig({
	base: '.',
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
	plugins: [
		tsconfigPaths(), // Load paths (aliases) from tsconfig
		million.vite({}), // Load million compiler
		eslint(), // Linting
		reactRefresh(), // HMR
		ViteMinifyPlugin({}), // Minify
		splitVendorChunkPlugin(), // Split vendor chunks
	],
	build: {
		outDir: './dist',
		sourcemap: false,
		chunkSizeWarningLimit: 1600,
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: PORT,
	},
	preview: {
		port: PORT,
	},
})
