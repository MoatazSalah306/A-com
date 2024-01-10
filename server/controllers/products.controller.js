const mysql = require("mysql2")
const categories = require("../data/categories")
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"acom"
})


const GetProducts = (req,res)=>{
    let getQuery = "SELECT * FROM `products`"
    connection.execute(getQuery,(error,data)=>{
        if(error){
            res.send("error => ",error)
        }else{
            res.json(data)
        }
    })
}

const GetSingleProduct = (req,res)=>{
    let id = +req.params.id
    let getDoctorQuery = "SELECT * FROM `products` WHERE id=?"
    

    connection.execute(getDoctorQuery,[id],(error,data)=>{
        if(error){
            res.send("error ==> ",error)
        }
        else{
            res.json(data.length!=0?data:{message:"product not found"})
        }
    })

}

const AddProduct = (req,res)=>{
    let {name,description,price,sale_price,quantity,image,category,type} = req.body
    let insertQuery = "INSERT INTO `products`(`name`,`description`,`price`,`sale_price`,`quantity`,`image`,`category`,`type`) VALUES (?,?,?,?,?,?,?,?)"
    connection.execute(insertQuery,[name,description,price,sale_price,quantity,image,category,type],(error,data)=>{
        if(error){
            res.send("error ==> ",error)
        }
        else{
           res.redirect("/api/products")
        }
    }) 
}

const UpdateProduct = (req,res)=>{
    let productId = +req.params.id
    let {name,description,price,sale_price,quantity,image,category,type} = req.body
    let UpdataQuery = "UPDATE `products` SET `name`= ?,`description`=?,`price`=?,`sale_price`=? ,`quantity`=? ,`image`=?,`category`=?,`type`=? WHERE id=?"
    connection.execute(UpdataQuery,
        [name,description,price,sale_price,quantity,image,category,type,productId]
        ,(error,data)=>{
        if(error){
            res.send("error ==> ",error)
        }
        else if(data.affectedRows===0){
            res.send("product is not found")
        }else{
            res.redirect(`/api/products/${productId}`)
        }
    })
}

const DeleteProduct= (req,res)=>{
    let id = +req.params.id
    let deleteQuery = "DELETE FROM `products` WHERE id=?"
    connection.execute(deleteQuery,[id],(error,data)=>{
        if(error){
            res.send("error ==> ",error)
        }
        else if(data.affectedRows===0){
            res.send("product not found")
        }else{
            res.send(`product with id ${id} deleted succesfully`)
        }
    })
}

const GetProductInCategory = (req,res)=>{
    let category = req.params.category
    let query = "SELECT * FROM `products` WHERE category=?"
    connection.execute(query,[category],(error,data)=>{
        if(error){
            res.send("error => ",error)
        }else{
            res.json(data)
        }
    })
}

const GetCategories = (req,res)=>{
    res.json(categories);
}

module.exports = {
    GetProducts,
    GetSingleProduct,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    GetProductInCategory,
    GetCategories
}