import * as express from 'express';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Root } from '../app-core/root/Root';

const app = express();

const PORT = 9000;

const createApp = (req: any, context: any) => (
  <StaticRouter location={req.location} context={context}>
    <Root />
  </StaticRouter>
);
app.use('/', (req: any, res: any) => {
  const context = {};
  const app = createApp(req, context);
  const html = renderToStaticMarkup(app);
  res.send(html);
});

app.listen(PORT, () => {
  console.log('Server is listening on port 9000...');
});
