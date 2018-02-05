// MODULES:
const express = require('express');

const app = express();
//-------------------------------------------------------------------
// HELPER MODULES:

//-------------------------------------------------------------------
// MIDDLEWARE USED PRIOR TO ALL ROUTING:

// Mozilla is not compatible with this:
// app.get('*.js', (request, response, next) => {
//   request.url += '.gz';
//   response.set('Content-Encoding', 'gzip');
//   next();
// });

app.use(express.static(`${__dirname}/../client/dist`));
//-------------------------------------------------------------------
// ROUTES:

//------------------------------------------
app.get('/testget', (request, response) => {
  response.redirect('/');
});
//------------------------------------------
app.post('/testpost', (request, response) => {
  response.redirect('/');
});
//------------------------------------------
app.get('/test/:id', (request, response) => {
  response.redirect('/');
});


//-------------------------------------------------------------------
// SETUP CONNECTION TO SERVER:
const port = 80;
//const port = 3000;


app.listen(port, () => {
  console.log(`Connected to Port ${port}`);
});

