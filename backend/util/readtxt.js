const fs = require('fs');

fs.readFile('../assets/test.txt', 'utf8', (err,data)=>{
    if(err) throw err;
    console.log(data)
})