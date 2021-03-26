const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')

router.post('/registration', [
    check('username', 'Username can not be empty').notEmpty(),
    check('password', 'Password should be more than 4 symbols and less 10').isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router