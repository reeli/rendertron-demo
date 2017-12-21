import * as express from 'express';
import * as path from 'path';
import * as rendertron from 'rendertron-middleware';

const app = express();

app.use((req: express.Request, _: any, next: any) => {
  console.log('url: ', req.url);
  console.log('user-agent: ', req.header('User-Agent'));
  next();
});

app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:3000/render',
}));

app.use(express.static(path.resolve(__dirname, '../public')));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
