const express = require("express");
const productsRouter = require("./routes/products.route");

const app = express();
const PORT = 9000

app.use("/", productsRouter);

app.listen(PORT, ()=>{

    console.log(`listening on port ${PORT}`)

})


