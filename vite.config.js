import {defineConfig} from 'vite'

export default defineConfig({
    base: "/Galiery/",
    optimizeDeps: {
        include: ['react-router-dom'],
    },
})