const {  createUser,login } = require('./userController');

const router = require('express').Router();


router.post("/signup",createUser);

module.exports = router;