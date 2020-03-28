module.exports = {
  name: 'generate:payloads',
  description: 'Generate trigger payload files',
  alias: ['g'],
  run: async toolbox => {
    const {
      template: { generate },
      filesystem,
      print: { success }
    } = toolbox

    const { separator, listAsync, read } = filesystem
    const payloadsPath = `${process.cwd()}${separator}tests${separator}payloads`
    const triggersPath = `${process.cwd()}${separator}tests${separator}triggers`

    const files = await listAsync(payloadsPath)

    files.map(async (file) => {
      const filePath = `${payloadsPath}${separator}${file}`
      const payload = read(filePath, 'json')

      await generate({
        template: `${payload.template.toLowerCase()}.js.ejs`,
        target: `${triggersPath}${separator}${file}`,
        props: { payloads: payload.payloads }
      })

      success(`Generated ${payload.template.toUpperCase()} payload at tests/triggers/${file}`)
    })
  }
}
