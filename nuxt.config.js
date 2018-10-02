module.exports = {
  mode: 'spa',
  build: {
    extend(config, ctx) {
      config.module.rules.push({test: /\.ts$/, loader: 'ts-loader', options: {appendTsSuffixTo: [/\.vue$/]}})
    }
  }
}