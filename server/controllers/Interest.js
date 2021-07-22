const { check, validationResult } = require('express-validator'); // Used for server-side data validation
const bcrypt = require('bcryptjs'); // Used for hashing User passwords
const models = require('../models/index.js'); // Import Models initiazation file


//////////////////////////
//  FIND ALL INTERESTS  //
//////////////////////////
exports.getAllInterests  = async (req, res) => {
    let interests = await models.Interest.findAll();
    let allInterests = interests;
    res.json(allInterests);
}


exports.saveInterests = async (req, res) => {
    try {
        const userInterest = await models.User.findAll({
            where: {
                gender: req.body.email
            }
        })
        console.log(userInterest)
        res.end('We did it in Interest.js')
    } catch (err) {
        throw new Error(err)
    }
}