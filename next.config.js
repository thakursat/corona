const path = require('path')
require('dotenv').config()
const withReactSvg = require('next-react-svg')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'assets/svg'),
  webpack(config, options) {
    return config
  }
})

