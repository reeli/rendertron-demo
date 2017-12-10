import * as express from 'express';
import * as path from 'path';
import * as rendertron from 'rendertron-middleware';

const app = express();

app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:3000/render',
}));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/*', (_: any, res: any) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
