import reactRefresh from '@vitejs/plugin-react-swc'

import MillionLint from '@million/lint'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import eslint from 'vite-plugin-eslint'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
	base: './',
	plugins: [
		MillionLint.vite({ auto: true }),
		eslint(),
		reactRefresh(),
		ViteMinifyPlugin({}),
		splitVendorChunkPlugin(),
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
