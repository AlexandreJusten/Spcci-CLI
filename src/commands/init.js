const command = {
  name: 'init',
  run: async (toolbox) => {
    const { print } = toolbox;
    const inquirer = require('inquirer');
    const http = require('http');
    
    const spinners = toolbox.print.spin('Fazendo verificacoes!')
    http.get('http://www.google.com', (res) => {
    if (res.statusCode === 200) {
        

    } else {
      spinners.fail('Sem conexão à internet.');
      process.exit(1);
    }
      }).on("error", (err) => {
        spinners.fail('Sem conexão à internet.');
        process.exit(1);
      });

    const gitPath = toolbox.system.which('git');
      if (!gitPath) {
        spinners.fail('Git não está instalado, essa é uma dependencia importante para a geração do projeto.');
        process.exit(1);
          } 
          await toolbox.system.run('sleep 5')
          spinners.succeed('Verificação concluída com sucesso.');
         
   
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Qual é o nome do seu projeto?'
      },
      {
        type: 'list',
        name: 'linguagem',
        message: 'Selecione a Linguagem',
        choices: ['JavaScript', 'TypeScript']
      },
      {
        type: 'list',
        name: 'variant',
        message: 'Selecione o Banco de dados',
        choices: ['Mysql', 'PostgreSQL', 'H2']
      },
      {
        type: 'list',
        name: 'entitie',
        message: 'deseja criar entidade?',
        choices: ['Sim', 'Nao']
      },
      {
        type: 'input',
        name: 'entityIn',
        message: 'qual o nome da entidade?',
        when: answers => answers.entitie === 'Sim'
      },
    
    ];
    const answers = await inquirer.prompt(questions);
    try {
      const spinners = toolbox.print.spin('criando')
      await toolbox.system.run(`mkdir ${answers.name}`);
      await toolbox.system.run(`cd ${answers.name} && git clone https://github.com/AlexandreJusten/spcci-teamplates && mv spcci-teamplates ${answers.name}-App`);
      spinners.succeed('sucesso!!')
      print.info(`Aplicativo ${answers.name}-App foi criado com sucesso, verifique o diretório ${answers.name}`);
      process.exit(1);
    } catch (error) {
      spinners.fail(`Erro ao criar o aplicativo: ${error}`);
        process.exit(1);
    }
}
}
module.exports = command
