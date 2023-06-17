const path = require('path')

export default {
  base: '/my-lighthall/',
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}