const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

const productsRouter = require("./routes/products.route")
app.use("/products",productsRouter)






app.listen(5000,()=>{
    console.log("listening on port 5000");
})


