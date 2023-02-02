/* eslint-disable no-unused-vars */
require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const pg = require('pg');
const path = require('path');
const uploadsMiddleware = require('./upload-middleware');
const ClientError = require('./client-error');
const Client = require('pg/lib/client');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
const publicPath = path.join(__dirname, 'public');

const app = express();
app.use(express.json());

app.use(staticMiddleware);

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'an unexpected error occurred (check the server terminal)'
  });
});

app.get('/api/users', (req, res, next) => {
  const sql = `
    select *
      from "User"
      order by "userId" desc
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});
// app.post('/api/user', req, res)

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
