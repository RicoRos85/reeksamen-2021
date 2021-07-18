/*
 * SERVER INITIALIZATION FILE
 */
const express        = require('express');
const { check } = require('express-validator'); // Used for server-side data validation
const UserController = require('./controllers/User.js'); // Import User Controller
const router         = express.Router();


// Create User AND Login User AFTER authentication
router.post(
    '/api/users', 
    [
        check('email') // Use 'check()' from express-validator to validate input values
            .isEmail() // Make sure the string is an email
            .normalizeEmail(), // Make sure all uppercase letters are transformed to lowercase
    
        check('password')
            .isLength({ min: 6 }) // Make sure Password has min. 6 characters
    ],
    UserController.create // Create the User using the UserController (controllers/User.js)
)

// Log in the User
router.post(
    '/api/users/login', 
    [
        check('email') // Use 'check()' from express-validator to validate input values
            .isEmail() // Make sure the string is an email
            .normalizeEmail(), // Make sure all uppercase letters are transformed to lowercase
        
        check('password')
            .isLength({ min: 6 }) // Make sure Password has min. 6 characters
    ],
    UserController.login // Log in the User using the UserController (controllers/User.js)
)


// Logout the User
router.post(
    '/api/logout', 
    UserController.logout // Log in the User using the UserController (controllers/User.js)
)



// Get all Users
router.get(
    '/api/users/all', 
    UserController.getAll // Log in the User using the UserController (controllers/User.js)
)

module.exports = router;