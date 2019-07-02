const express = require('express')
const router = express.Router()

//require the controller
const product_controller = require('../controllers/product.controller')

router.get('/',product_controller.all)
router.post('/',product_controller.create)
router.get('/:id',product_controller.product)
router.put('/:id',product_controller.update)
router.delete('/:id',product_controller.delete)
module.exports = router