const cli = require('./config')

const { version: packageVersion } = require('./../../package.json')

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain(packageVersion)
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain(packageVersion)
})
