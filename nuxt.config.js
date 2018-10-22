const path = require('path')

module.exports = {
  mode: 'spa',
  srcDir: 'app/',
  build: {
    extend(config, ctx) {
      config.module.rules.push({test: /\.ts$/, loader: 'ts-loader', options: {appendTsSuffixTo: [/\.vue$/]}})
      config.resolve.alias['@js']  = path.join(__dirname, 'app/assets/javascripts')
      config.resolve.alias['@css'] = path.join(__dirname, 'app/assets/stylesheets')
      config.resolve.extensions.push('.scss')
    }
  }
}