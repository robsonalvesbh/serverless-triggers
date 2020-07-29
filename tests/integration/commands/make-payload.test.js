const cli = require('./../config')

const SUCCESS_MESSAGE = 'Generated example file in tests/payloads'
const ERROR_MESSAGE = 'You must pass a valid template'

test('Validate make:payload command with first and second parameter', async () => {
  const output = await cli('make:payload example sqs')

  expect(output).toContain(SUCCESS_MESSAGE)
})

test('Validate make:payload command with options parameters', async () => {
  const output = await cli('make:payload --fileName=example --template=sqs')

  expect(output).toContain(SUCCESS_MESSAGE)
})

test('Validate make:payload command with options parameters otherwise', async () => {
  const output = await cli('make:payload --fileName example --template sqs')

  expect(output).toContain(SUCCESS_MESSAGE)
})

test('Validate make:payload command with options parameters otherwise two', async () => {
  const output = await cli('make:payload example --template sqs')

  expect(output).toContain(SUCCESS_MESSAGE)
})

test('Validate make:payload command with options parameters otherwise three', async () => {
  const output = await cli('make:payload --fileName example sqs')

  expect(output).toContain(ERROR_MESSAGE)
})

test('Validate make:payload command without template', async () => {
  const output = await cli('make:payload --fileName example')

  expect(output).toContain(ERROR_MESSAGE)
})
