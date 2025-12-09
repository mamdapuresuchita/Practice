

const express= require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const {auth,admin}=require('../middleware/auth')

router.post('/register',userController.register);
router.post('./login',userController.login);

router.get('/getAllUsers',auth,admin,userController.getAllUsers);
router.get('/getUserInfo',auth,userController.getUserInfo);

router.put('/updateUser/:id',auth,userController.updateUser);
router.delete('/deleteUser/:id',auth,userController.deleteUser);


module.exports = router;