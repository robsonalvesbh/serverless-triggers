module.exports = {
  name: 'generate:payloads',
  description: 'Generate trigger payload files',
  alias: ['g'],
  run: async toolbox => {
    const {
      template: { generate },
      filesystem,
      print: { info, success, error, warning },
      getPayloadsFolder,
      getTriggersFolder
    } = toolbox

    info('Generating files...')

    const { separator, listAsync, read } = filesystem

    try {
      const payloadsFolder = getPayloadsFolder()
      const triggersFolder = getTriggersFolder()

      const files = await listAsync(payloadsFolder)

      if (files.length === 0) {
        warning('Payload folder is empty!')
        return
      }

      files.map(async (file) => {
        const filePath = `${payloadsFolder}${separator}${file}`
        const payload = read(filePath, 'json')

        await generate({
          template: `${payload.template.toLowerCase()}.js.ejs`,
          target: `${triggersFolder}${separator}${file}`,
          props: { payloads: payload.payloads }
        })

        success(`Generated ${payload.template.toUpperCase()} payload at tests/triggers/${file}`)
      })
    } catch (e) {
      error(`Unexpected error occurred on generated payload files`)
    }
  }
}
