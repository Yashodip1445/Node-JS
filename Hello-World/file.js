const fs = require("fs")
const { text } = require("stream/consumers")

fs.writeFileSync("text.txt", "Hello champ kasa hai", (err) => {
    if (err) {
        console.log("Error", err.message);
        return;

    }
    console.log("File create Successfuly  ")
})

 fs.readFileSync("text.txt", "utf8", (err , data)=> {
    if(err){
        console.log("Error", err.message);

        return 
    }
    console.log("Read file Successfuly!", data);
})

 const result = fs.readFileSync("context.txt", "utf8" );
 console.log(result);




// const fs = require("fs")

// const result = fs.read("context.txt", "utf-8", (err, result) => {
// console.log(result);
// });