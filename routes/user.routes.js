module.exports = app =>{
const users = require('../controller/user.controller');
var router = require('express').Router();

router.post("/" , users.create);
router.get("/" , users.findAll);


app.use('/api/user' ,router)

}