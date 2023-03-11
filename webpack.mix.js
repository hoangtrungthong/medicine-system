const mix = require('laravel-mix');
const path = require('path');

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel applications. By default, we are compiling the CSS
| file for the application as well as bundling up all the JS files.
|
*/

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@_components' : path.resolve(__dirname, 'resources/js/components'),
            'sass': path.resolve(__dirname, 'resources/sass'),
        }
    }
});

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
       //
]);

