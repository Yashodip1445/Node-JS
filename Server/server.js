const express = require("express");

const app = express();

app.get("./" , (req , res)=> {
    console.log("welcome to Express")
});


app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 }
    ]);
});
app.get("/contact", (req, res) => {
    res.send("Contact Us");
});


app.listen(4500 , ()=> {
    console.log("listen a Express Server")
})