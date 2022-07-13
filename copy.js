const fs = require('fs');
const readFile = fs.createReadStream("text.txt");
const writeFile = fs.createWriteStream(`${__dirname}/copy.txt`);
readFile.on('open', fd => {
   console.log('readFile open');
});
readFile.on('close', () => {
   console.log('readFile  closed');
});
readFile.on('error', (err) => {
   console.dir(err);
   console.log('error readFile');
});
writeFile.on('open', fd => {
   console.log('writeFile open');
});
writeFile.on('close', () => {
   console.log('writeFile closed');
});
writeFile.on('error', (err) => {
   console.dir(err);
   console.log('error writeFile')
});
readFile.pipe(writeFile);