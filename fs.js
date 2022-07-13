const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What is your name?`, (name) => {
  fs.writeFileSync('text.txt', name)  
  readline.question('What is your surname?', (surname) => {
    fs.writeFileSync('text.txt', surname)  
  })
})

