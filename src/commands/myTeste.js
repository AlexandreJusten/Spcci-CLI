const command = {
    name: 'ta',
    run: async (toolbox) => {
      const { print} = toolbox
      print.info('Welcome to your CLI TA')
      const spinners = toolbox.print.spin('time for fun')
      await toolbox.system.run('sleep 1')
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
  {
    title: 'Success',
    task: () => Promise.resolve('Foo')
},


  ]);
  tasks.run().catch(err => {
    console.error(err);
  });
  await toolbox.system.run('sleep 3')
  console.log('--------------------------------')
  const prompts = require('prompts');

    const respons = prompts({
      type: 'number',
      name: 'value',
      message: 'How old are you?',
      validate: value => value < 18 ? `Nightclub is 18+ only` : true
    });



    },
  }

  module.exports = command

