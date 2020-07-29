const cli = require('./../config')

test('Validate init command', async () => {
  const output = await cli('init')

  expect(output).toContain('Generated tests/payloads folder')
  expect(output).toContain('Generated example file in tests/payloads')
})
