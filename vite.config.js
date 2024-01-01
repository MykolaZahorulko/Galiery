import {defineConfig} from 'vite'

export default defineConfig({
    base: "/galiery/",
    optimizeDeps: {
        include: ['react-router-dom'],
    },
})