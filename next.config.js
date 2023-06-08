const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/d4rkr0n1n/d4rkr0n1n.github.io/my-blog/gh-pages/' : '',
}