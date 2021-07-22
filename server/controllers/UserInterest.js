const { check, validationResult } = require('express-validator'); // Used for server-side data validation
const bcrypt = require('bcryptjs'); // Used for hashing User passwords
const models = require('../models/index.js'); // Import Models initiazation file

///////////////////////////
// SAVE USERS INTERESTS  //
///////////////////////////
exports.update  = async (req, res) => {
    try {
        // Save Users Interests
        let usersInterests = await models.UserInterest.create({
            id_user: "test id_user",
            id_interest: "test id_interest"
        })

        // Make sure the hashed password is not sent to the frontend
        delete user.password;

        // Authenticate User 
        req.session.usersInterests = usersInterests;
        console.log(req.session.usersInterests)

        // If everything is succesfull give status 200 and send json data to frontend
        res.status(200).json(req.session.user);
    } catch (err) {
        console.log(err);
    }          
}
