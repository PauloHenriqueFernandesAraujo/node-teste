// run `node index.js` in the terminal
const koa = require('koa2');

app = new Koa();

app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(3000).then((result) => console.log('serve is runnig on:' + 3000));
