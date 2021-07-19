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