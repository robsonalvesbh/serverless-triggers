const { filesystem } = require('gluegun')

const cli = require('./../config')

const templates = [
  'dynamo-stream',
  'sqs',
  'sns',
  'sns-to-sqs'
]

const ERROR_MESSAGE = 'You must pass a valid template'

test('Validate generate command', async () => {
  const output = await cli('generate')

  templates.map(template => {
    expect(output).toContain(`Generated ${template.toUpperCase()} payload at tests/triggers/${template}.json`)
  })

  const { separator, listAsync } = filesystem
  const triggersPath = `${process.cwd()}${separator}tests${separator}triggers`

  const files = await listAsync(triggersPath)

  const fileNames = files.filter(file => {
    const result = templates.some(template => `${template}.json` === file)
    
    if (result) return true

    expect(output).toContain(ERROR_MESSAGE)
  }).map(file => file.split('.').shift())

  expect(fileNames.sort()).toEqual(templates.sort())
})
