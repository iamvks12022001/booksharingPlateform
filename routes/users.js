const express =require('express');// to get current instance of express
const router =express.Router();
const usersController =require('../controllers/users_controller');//path to user_controller file



router.get('/profile',usersController.profile);//home method get imported from home_controller file
// usersController.profile run when client want user/profile request

//routers for sign in and sign up
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//route for signout
router.get('/sign-out',usersController.destroySession);

router.post('/create',usersController.create);
//post the data to database

router.post('/create-session',usersController.createSesion);
//router to creae session

module.exports=router;// to index.js of router


// sare users ke route and controllers iss file me he ha

