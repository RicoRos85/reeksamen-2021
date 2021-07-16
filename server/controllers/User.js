const { check, validationResult } = require('express-validator'); // Used for server-side data validation
const bcrypt = require('bcryptjs'); // Used for hashing User passwords
const models = require('../models/index.js'); // Import Models initiazation file


////////////////////////
// CREATE A NEW USER  //
////////////////////////
exports.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).json(errors.array());
    }
    console.log(req.body);

    // Database code below
    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        // Create User
        let user = await models.User.create({
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            gender: req.body.gender  
        })

        user = user.toJSON();
        user.isAuthenticated = true;
        // Make sure the hashed password is not sent to the frontend
        delete user.password;

        // Authenticate User 
        req.session.user = user;
        console.log(req.session.user)

        // If everything is succesfull give status 200 and send json data to frontend
        res.status(200).json(req.session.user);
    } catch (err) {
        console.log(err);
    }            
}


///////////////////
// LOGIN A USER  //
///////////////////
exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).json(errors.array());
    } else {
        // Login here
        // Use findOne to search for a single match
        let user = await models.User.findOne({
            where: {
                // Use the typed in Email to match in the DB
                email: req.body.email
            }
        })
        // If not matching email was found
        if (!user) {
            res.status(401).end('Email does not exist')
        }

        // Match typed in password with password from DB
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (isValid === false) {
            res.status(401).end('Username or password invalid');
        }

        user = user.toJSON();
        user.isAuthenticated = true;
        // Make sure the hashed password is not sent to the frontend
        delete user.password;

        // Authenticate User 
        req.session.user = user;


        // Else continue code
        res.json(req.session.user)
    }
}


/////////////////////
// LOG OUT A USER  //
/////////////////////
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        res.end();
    })
}