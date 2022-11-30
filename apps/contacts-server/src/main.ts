import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import ContactsRoute from './app/routes/ContactsRoute';

const app = express();
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// api
app.use('/contacts', ContactsRoute);

// 404
app.use((err, res) => {
  res.status(404).json({ message: '404' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
