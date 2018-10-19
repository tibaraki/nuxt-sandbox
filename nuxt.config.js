module.exports = {
  mode: 'spa',
  srcDir: 'src/',
  build: {
    extend(config, ctx) {
      config.module.rules.push({test: /\.ts$/, loader: 'ts-loader', options: {appendTsSuffixTo: [/\.vue$/]}})
    }
  }
}