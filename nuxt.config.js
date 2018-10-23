const path = require('path')

module.exports = {
  mode: 'spa',
  srcDir: 'app/',
  head: {
    titleTemplate: function (title) {
      return title ? `${title} - myatelier` : 'myatelier'
    },
    meta: [
      { charset: 'utf-8' }
    ]
  },
  build: {
    extend(config, ctx) {
      config.module.rules.push({test: /\.ts$/, loader: 'ts-loader', options: {appendTsSuffixTo: [/\.vue$/]}})
      config.resolve.alias['@js']  = path.join(__dirname, 'app/assets/javascripts')
      config.resolve.alias['@css'] = path.join(__dirname, 'app/assets/stylesheets')
      config.resolve.extensions.push('.scss')
      config.module.rules.push({
        test: /\.yaml$/,
        use: ['json-loader', 'yaml-loader']
      })
    }
  },
  modules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/i18n.ts'
  ]
}