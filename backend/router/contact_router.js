const express=require('express')
const contactController= require('../controller/contact_controller')
const router=express.Router()

router.route('/contact').get(contactController.getData)
router.route('/contact').post(contactController.createData)
router.route('/project').post(contactController.project)



module.exports=router