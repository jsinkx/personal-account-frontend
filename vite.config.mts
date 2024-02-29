import reactRefresh from '@vitejs/plugin-react-swc'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import eslint from 'vite-plugin-eslint'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
	base: './',
	plugins: [reactRefresh(), eslint(), ViteMinifyPlugin({}), splitVendorChunkPlugin()],
	build: {
		outDir: './build/',
		sourcemap: false,
		chunkSizeWarningLimit: 1600,
	},
	server: {
		port: 3000,
		strictPort: true,
	},
	preview: {
		port: 3000,
	},
})
