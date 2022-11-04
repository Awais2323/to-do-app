const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Username
    let user = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (user) {

   return res.status(400).json({
        status: 400,
        success: false,
        message: "Failed! Username is already in use!"
      });
    }

    // Email
    user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user) {
     return  res.status(400).json({
        status: 400,
        success: false,
        message: "Failed! Email is already in use!"
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
          status: 500,
          success: false,
          message: error.message
    });
  }
};



const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
