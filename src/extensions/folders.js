module.exports = toolbox => {
  const { filesystem } = toolbox
  const { separator } = filesystem

  toolbox.getPayloadsFolder = () => `${process.cwd()}${separator}tests${separator}payloads`

  toolbox.getTriggersFolder = () => `${process.cwd()}${separator}tests${separator}triggers`
}
