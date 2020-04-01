module.exports = {
  name: 'init',
  description: 'initialize payload folders',
  alias: ['i'],
  run: async toolbox => {
    const {
      template: { generate },
      filesystem,
      print: { info, success, error },
      getPayloadsFolder
    } = toolbox

    info('Initializing...')

    const { separator } = filesystem

    try {
      const payloadsFolder = getPayloadsFolder()

      await generate({
        template: `payload.js.ejs`,
        target: `${payloadsFolder}${separator}example.json`,
        props: { template: 'sqs' }
      })

      success(`Generated tests/payloads folder`)
      success(`Generated example file in tests/payloads`)
    } catch (e) {
      error(`Unexpected error occurred on initializing files`)
    }
  }
}
