const command = {
    name: 'component',
    run: async (toolbox) => {
      const { print,parameters} = toolbox
      print.info('Welcome to component')
      print.error("teste")
      print.success("d")
      
  }
}
  module.exports = command
