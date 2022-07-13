const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What is your name?`, (name) => {

  readline.question(`What is your surname?`, (surname) =>{
    
    readline.question(`What isyour weight?`,(weight)=>{
      readline.question(`what is your age?`, (age) => {
        readline.question(`What is your height?`, (height) => {
          readline.question(`What colour are your eyes?`, (colour) => { 
            readline.question(`What kind of books do you like?`, (books) => {
        console.log(`Hi ${name} ${surname} your weight is ${weight}, your age is ${age} your height is ${height} your eyes colour is ${colour} you like ${books}`) 
        readline.close();
      }) 
      })
      })
      })
    });
  })

  
  
})

