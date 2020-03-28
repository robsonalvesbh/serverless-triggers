const { system, filesystem } = require('gluegun')

const src = filesystem.path(__dirname, '../../')

const cli = async cmd =>
  system.run(
    'node ' + filesystem.path(src, 'bin', 'serverless-triggers') + ` ${cmd}`
  )

module.exports = cli
