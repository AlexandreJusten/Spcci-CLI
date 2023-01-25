const command = {
  name: 'spcci',
  run: async (toolbox) => {
    const { print} = toolbox
    print.info('Welcome to your CLI')
    const spinners = toolbox.print.spin('time for fun')
    await toolbox.system.run('sleep 5')
    spinners.succeed('foi')
    
    
    const { prompt } = require('enquirer');
 
const response = await prompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?'
});
 
console.log(response.username);
const Listr = require('listr');
const execa = require('execa');
const tasks = new Listr([
  {
    title: 'Checking node version',
    task: () => execa('ls').then(result => {
      print.info(result.stdout)
    })
},
 
]);
tasks.run().catch(err => {
  console.error(err);
});
  },
}

module.exports = command
