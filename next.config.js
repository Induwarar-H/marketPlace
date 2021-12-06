const path = require('path');
const withPWA = require('next-pwa');
const withSass = require('sass');
module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        // dest: 'public',
        register: true,
        sw: '/sw.js'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],

    },

    cssModules: true

});