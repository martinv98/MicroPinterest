const express = require('express');

const app = express();

const port = 8081;

var phpExpress = require('php-express')({

    // assumes php is in your PATH
    binPath: 'php'
  });

app.use(express.static('public'))

app.set('views', './views');
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');
app.all(/.+\.php$/, phpExpress.router);

app.get('/', (req, res) => {
    res.sendFile('./public/Index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
