var express = require('express');
var hbs = require('express-handlebars');

var { getMenu } = require('./data/menu');

var categories = require('./data/categories');
var home = require('./data/home');
var projects = require('./data/projects');

var app = express();

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultView: 'default',
  }),
);

app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  const v2 = req.query.hasOwnProperty('v2');
  res.render(v2 ? 'home-v2' : 'home', {
    layout: 'default',
    menu: getMenu(true),
    ...home,
  });
});

app.get('/projetos', function (req, res) {
  res.render('projects', {
    layout: 'default',
    menu: getMenu(false),
    projects,
  });
});

app.get('/projetos/:slug', function (req, res) {
  res.render('projects', {
    layout: 'default',
    menu: getMenu(false),
    projects,
  });
});

app.get('/blog', function (req, res) {
  res.render('blog', {
    layout: 'default',
    menu: getMenu(false),
    categories,
  });
});

app.get('/blog/:category', function (req, res) {
  var title;
  var activeClasses = 'is-relative is-active has-text-weight-semibold';
  var mappedCategories = categories.map((cat) => {
    if (cat.slug === req.params.category) {
      title = cat.title;
      return {
        ...cat,
        activeClasses,
      };
    }
    return cat;
  });

  res.render('blog', {
    layout: 'default',
    menu: getMenu(false),
    archiveTitle: title,
    categories: mappedCategories,
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
