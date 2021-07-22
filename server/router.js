/*
 * SERVER INITIALIZATION FILE
 */
const express = require('express'); // Initiate Express
const { check } = require('express-validator'); // Used for server-side data validation
const { celebrate, Joi, errors, Segments } = require('celebrate'); // Used for making form validation easier
const UserController = require('./controllers/User.js'); // Import User Controller
const InterestController = require('./controllers/Interest.js'); // Import Interest Controller
const UserInterestController = require('./controllers/UserInterest.js'); // Import Interest Controller
const router = express.Router();


////////////////////////////////////////
//                USERS               //
////////////////////////////////////////

// Create User AND Login User AFTER authentication
// router.post(
//     '/api/users', // This is our Route Method
//     celebrate({
        
//         [Segments.BODY]: Joi.object().keys({
//           email: Joi.string().required().email(),
//           password: Joi.string().required().min(6),
//           firstName: Joi.string().min(3),
//           lastName: Joi.string().min(3),
//           age: Joi.number().integer().min(2),
//           gender: Joi.string().required()
//         },
//         console.log("Celebrate finished. Segments.BODY = " + [Segments.BODY]))  
//     }),
//     UserController.create // Create the User using the UserController (controllers/User.js)
// )

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

// Get all Users
router.post(
    '/api/users/filterAll', 
    UserController.getAll // Log in the User using the UserController (controllers/User.js)
)


// Delete the User
router.get(
    '/api/users/deleteUser', 
    UserController.deleteUser // Log in the User using the UserController (controllers/User.js)
)



////////////////////////////////////////
//              INTERESTS             //
////////////////////////////////////////

// Display all Interests
router.get(
    '/api/interests/all', 
    InterestController.getAllInterests // Display all Interests (controllers/Interest.js)
)

// Display all Interests
router.get(
    '/api/interests/filterAll', 
    InterestController.getAllInterests // Display all Interests (controllers/Interest.js)
)

// Save User's Interests
router.post(
    '/api/interests/save',
    InterestController.saveInterests // Save Interests (controllers/Interest.js)
)



////////////////////////////////////////
//         USERS INTERESTS            //
////////////////////////////////////////

// Display all Interests
router.post(
    '/api/userInterest/saveUserInterest', 
    UserInterestController.update // Display all Interests (controllers/Interest.js)
)



module.exports = router;    