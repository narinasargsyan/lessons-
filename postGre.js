const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const textParser = bodyParser.text({ type: '*/*' });
const pathToFile = 'text.txt';
const pg = require('pg');
app.use(textParser);

const config = {
   host:'localhost',
   user:'postgres',
   password:'tennis',
   database:'postgres',
   port: 4444
};

const client = new pg.Client(config);
client.connect(err => {
   if (err) throw err;
});

app.post('/write', async (req,res) => {
   await client.query( `INSERT INTO inventory (name, quantity) VALUES ('orange', 900);`)
   res.send('hi');
});
app.get('/write', async (req,res) => {
   await client.query( `SELECT * FROM inventory`)
   res.send(await client.query( `SELECT * FROM inventory`))
});


app.listen('4040','localhost', () => {
   console.log('hi');
});