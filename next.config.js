const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})

// module.exports = {
//   images: {
//     disableStaticImages: true
//   }
// }

module.exports = {
  reactStrictMode: true,
}