const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})

// module.exports = {
//   images: {
//     disableStaticImages: false
//   }
// }

module.exports = {
  reactStrictMode: true,
}
