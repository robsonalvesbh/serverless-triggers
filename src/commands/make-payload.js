module.exports = {
  name: 'make:payload',
  description: 'Create a new payload file',
  alias: ['m:p'],
  run: async toolbox => {
    const {
      template: { generate },
      parameters,
      filesystem,
      print: { info, success, error },
      getPayloadsFolder,
      isTemplateValid
    } = toolbox
    try {
      const fileName = parameters.first || parameters.options.fileName
      const template = parameters.second || parameters.options.template

      if (!isTemplateValid(template)) {
        error('You must pass a valid template')
        return
      }

      info('Creating...')

      const { separator } = filesystem

      const payloadsFolder = getPayloadsFolder()

      await generate({
        template: `payload.js.ejs`,
        target: `${payloadsFolder}${separator}${fileName}.json`,
        props: { template: template.toLowerCase() }
      })

      success(`Generated ${fileName} file in tests/payloads`)
    } catch (e) {
      console.log(e)
      error(`Unexpected error occurred on initializing files`)
    }
  }
}
