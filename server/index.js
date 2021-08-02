const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');


app.use(compression());
app.use(express.json());

app.use(express.static(PUBLIC_DIR));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
