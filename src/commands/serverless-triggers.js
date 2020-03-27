
const command = {
  name: 'serverless-triggers',
  run: async toolbox => {
    const { print } = toolbox

    const message = `
      Version: ${toolbox.meta.version()}
      Usage: serverless-triggers <command>
    `
    
    print.info(message)
  }
}

module.exports = command
