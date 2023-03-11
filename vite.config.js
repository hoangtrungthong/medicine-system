import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    resolve: name => {
        const pages =
            import.meta.glob('./Pages/**/*.vue', {
                eager: true
            })
        return pages[`./Pages/${name}.vue`]
    },
});
