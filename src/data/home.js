var members = require('./members');
var projects = require('./projects');
var services = require('./services');

module.exports = {
  aboutUs: {
    adornmentPosition: 'left',
    beforeTitle: 'quem',
    title: 'somos',
    content: [
      `ALT é um escritório de arquitetura que realiza projetos de
        excelência com foco na transparência e acessibilidade aos
        serviços oferecidos.`,
      `Realizando processos de ponta a ponta, acompanha tudo junto ao
        cliente, desde a idealização do projeto até a finalização da
        obra.`,
    ],
    members,
  },
  services: {
    adornmentPosition: 'right',
    beforeTitle: 'nossos',
    title: 'serviços',
    content: services,
  },
  projects: {
    adornmentPosition: 'left',
    beforeTitle: 'nossos',
    title: 'projetos',
    items: projects,
  },
  contact: {
    adornmentPosition: 'left',
    beforeTitle: 'entre em',
    title: 'contato',
  },
};
