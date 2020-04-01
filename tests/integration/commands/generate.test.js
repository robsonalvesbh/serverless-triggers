const { filesystem } = require('gluegun')

const cli = require('./../config')

const templates = [
  'sqs',
  'sns',
  'sns-to-sqs'
]

test('Validate generate command', async () => {
  const output = await cli('generate')

  templates.map(template => {
    expect(output).toContain(`Generated ${template.toUpperCase()} payload at tests/triggers/${template}.json`)
  })

  const { separator, listAsync } = filesystem
  const triggersPath = `${process.cwd()}${separator}tests${separator}triggers`

  const files = await listAsync(triggersPath)

  const fileNames = files.map(file => file.split('.').shift())
  
  templates.push('example')

  expect(fileNames.sort()).toEqual(templates.sort())
})
