const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.jsx',
    './src/**/*.js',
    './public/index.html'
  ],
  css: ['./src/styles/css/tailwind.css'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});


module.exports = {
  plugins: [
    require("tailwindcss")("./src/tailwind.config.js"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      browsers: "last 2 versions"
    }),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ],
}