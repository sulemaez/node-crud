const Product = require('../models/product.model')


exports.all = (req,res) =>{
   Product.find({},(err,products)=>{
      if (err) {
         res.status(500).send({ error: "Error Getting products !" });
       }else{
         res.send(products)
       }
   })
}

exports.create = (req,res) =>{
  let product = new Product({
    name : req.body.name,
    price : req.body.price
  })

  product.save(err=>{
   if (err) {
      res.status(500).send({ error: "Not Saved !" });
    }else{
      res.send({ message : 'Product Created successfully'})
    }
    
  })
}

exports.product = (req,res) =>{
   Product.findById(req.params.id,(err,product)=>{
      if(err){
         res.status(500).send({ error: "Product Not Found!" })
      }else{
         res.send(product);
      }
   })
}

exports.update = (req,res) =>{
   Product.findByIdAndUpdate(req.params.id,{$set : req.body},(err,product)=>{
      if(err){
         res.status(500).send({ error: "Product Not Updated!" });
      }else{
         res.send({ message : 'Product updated !'})
      }
   })
}

exports.delete = (req,res) =>{
   Product.findByIdAndDelete(req.params.id,(err)=>{
      if(err){
         res.status(500).send({ error: "Product Not Deleted!" });
      }else{
         res.send({ message : 'Product deleted !'})
      }
   })
}
