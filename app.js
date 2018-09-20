const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectsRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectsRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  const message = err.message;
  const status = err.status;
  const stack = err.stack;
  console.log(`There has been an error called ${err} The code of the error is: ${status}`)
  res.render('error', {message, status, stack});
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
