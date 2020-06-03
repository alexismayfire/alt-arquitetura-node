function getMenu(frontPage) {
  var data = [
    {
      label: 'Quem Somos',
      url: '#quemSomos',
    },
    {
      label: 'Serviços',
      url: '#servicos',
    },
    {
      label: 'Projetos',
      url: '#projetos',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'Contato',
      url: '#contato',
    },
  ];

  if (!frontPage) {
    return data.map((item) => {
      if (item.url.startsWith('#')) {
        return {
          ...item,
          url: '/' + item.url,
        };
      }
      return item;
    });
  }

  return data;
}

module.exports = { getMenu };
