let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'],
    'popper.js/dist/umd/popper.js': ['Popper'],
    'bootstrap/dist/js/bootstrap.js': ['Bootstrap']
    });

mix.sass('resources/scss/bootstrap.scss', 'public/css')
    .js('resources/js/app.js', 'public/js')
    .extract(['jquery', 'bootstrap']);