const fs = require("fs")

const content = new Date().toString().replace(/[:.]/g,'-')
const path = `./files/${content}.txt`;
fs.writeFile( path,content, err=>{
    if(err){
        console.log("error")
    }
    
})


