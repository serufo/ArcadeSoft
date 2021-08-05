
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['62K6G9suXKbFX66JVqqrAZ'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  