module.exports = {
  mode: 'universal',
  srcDir: './frontend',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  build: {
    analyze: false
  }
}
