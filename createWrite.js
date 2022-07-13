const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { response } = require('express');
const app = express();
const textParser = bodyParser.text({ type: '*/*' });
const pathToFile = 'out.txt'
app.use(textParser);

app.post('/write', (req,res) => {

   const writeStream = fs.createWriteStream('text.txt');
   writeStream.write(req.body)
   res.send('hi');
   console.log(req.body);
});
app.get('/write', (req,res) => {
   const readFile = fs.createReadStream('text.txt');
  readFile.pipe(res);
});
app.delete('/write', (req,res) => {
  async function hjbuj(){
   return new Promise((resolve,reject) => {
      resolve(fs.unlinkSync(pathToFile))
   })

  }
  hjbuj()
   
   res.send('deletefile');
})
app.put('/write', (req,res) => {
   fs.rename('copy.txt', 'out.txt', function (err) {
      if (err) throw err;
      console.log('File rename operation completed.');
    });
    res.send('hhh');
})

app.get('/hi', (req,res) => {
   res.send('privet mama') 
})
app.listen('3040','localhost', () => {
   console.log('hi');
});

