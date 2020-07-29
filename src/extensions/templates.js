module.exports = toolbox => {
  const templatesAvailable = [
    'dynamo-stream',
    'sqs',
    'sns',
    'sns-to-sqs'
  ]

  toolbox.isTemplateValid = (template) => {
    if (template === undefined) return false

    return templatesAvailable.some(templateName => templateName === template.toLowerCase())
  }
}
