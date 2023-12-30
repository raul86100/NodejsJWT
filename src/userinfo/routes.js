const { Router }=require('express');
const controller=require('./controller');
const Autherization=require('../../Autherization/verifyjwt');


const router=Router();
router.post('/login',controller.login);
router.post('/newtoken',controller.refreshtoken);
router.get('/getall',Autherization,controller.getUser);
router.delete('/delete/:email',Autherization,controller.del);
router.put('/update',Autherization,controller.update);
router.get('/getbyid/:email',Autherization,controller.getbyid);
module.exports=router;