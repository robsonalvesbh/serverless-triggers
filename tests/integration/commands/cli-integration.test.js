const cli = require('./../config')

const { version: packageVersion } = require('./../../../package.json')

test('Validate version command', async () => {
  const output = await cli('--version')
  expect(output).toContain(packageVersion)
})

test('Validate outputs command', async () => {
  const output = await cli('--help')
  expect(output).toContain(packageVersion)
})
