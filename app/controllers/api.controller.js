
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/auth.config");
const User = db.user;
const task = db.task;
const location = db.location;

exports.signup = async (req, res) => {
    console.log("Body", req.body);
    // save User to Database
    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
  
          return res.status(200).json({
            status: 200,
            success: true,
            message: "User registered successfully!"
          });
      
    } catch (error) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: error.message
      });
    }
  };
  
  exports.signin = async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!user) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: "User Not found."
        });
      }
  
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
  
      if (!passwordIsValid) {
        return res.status(200).json({
          status: 200,
          success: false,
          message: "Invalid Password!"
        });
  
      }
  
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
        
      return res.status(200).json({
        status: 200,
        success: true,
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          token: token,
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: error.message
      });
    }
  };

exports.saveTask = async (req, res) => {
    console.log(req)
    await task.create(req.body).then(data => {
        res.status(200).json({
            status: 200,
            success: true,
            message: "Created Successfully",
            data: data
        });
    })
        .catch(err => {
            res.status(500).json({
                status: 500,
                success: false,
                message: err.message || "Something Went wrong while requesting!"
            });
        });
    };

exports.showAllTasks = async (req, res) => {
    const userId = req.query.userId;

    if (!userId) {
        res.status(403).json({
            status: 403,
            success: false,
            message: "Unauthorize"
        });
    } else {
        await task.findAll({
            where: { userId }
        })
        .then(data => {
            res.status(200).json({
                status: 200,
                success: true,
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                success: false,
                message: err.message || "Something Went wrong while requesting!"
            });
        });
    }
};

exports.updateTask = async (req, res) => {
    const id = req.body.id;
    const userId = req.body.userId;
    const {
        summary,
        description,
        date
    } = req.body;

    try {
        const newTask = await task.findOne({
            where: { id, userId }
        });

        newTask.summary = summary;
        newTask.description = description;
        newTask.date = date;

        await newTask.save().then(data => {
            res.status(200).json({
                status: 200,
                success: true,
                message: "Updated Successfully",
                data: data
            });
        })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    success: false,
                    message: err.message || "Something Went wrong while requesting!"
                });
            });
    } catch (err) {
        res.status(500).json({
            status: 500,
            success: false,
            message: err.message || "Something Went wrong while requesting!"
        });
    }
};

exports.deleteTask = async (req, res) => {
    const id = Number(req.query.id);
    try {
        const newTask = await task.findOne({
            where: { id }
        });
        await newTask.destroy().then(data => {
            res.status(200).json({
                status: 200,
                success: true,
                message: "Deleted Successfully",
                data: data
            });
        }).catch(err => {
            res.status(500).json({
                status: 500,
                success: false,
                message: err.message || "Something Went wrong while requesting!"
            });
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            success: false,
            message: err.message || "Something Went wrong while requesting!"
        });
    }
};


exports.saveLocation = async (req, res) => {
    await location.create(req.body).then(data => {
        res.status(200).json({
            status: 200,
            success: true,
            message: "Created Successfully",
            data: data
        });
    })
        .catch(err => {
            res.status(500).json({
                status: 500,
                success: false,
                message: err.message || "Something Went wrong while requesting!"
            });
        });
    };

exports.showAllLocations = async (req, res) => {
    const userId = req.query.userId;

    if (!userId) {
        res.status(403).json({
            status: 403,
            success: false,
            message: "Unauthorize"
        });
    } else {
        await location.findAll({
            where: { userId }
        })
        .then(data => {
            res.status(200).json({
                status: 200,
                success: true,
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                success: false,
                message: err.message || "Something Went wrong while requesting!"
            });
        });
    }
};

exports.updateLocation = async (req, res) => {
    const id = req.body.id;
    const userId = req.body.userId;

    try {
        const newLocation = await location.findOne({
            where: { id, userId }
        });

        newLocation.location = req.body.location;
        newLocation.conds = req.bodyconds;

        await newLocation.save().then(data => {
            res.status(200).json({
                status: 200,
                success: true,
                message: "Updated Successfully",
                data: data
            });
        })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    success: false,
                    message: err.message || "Something Went wrong while requesting!"
                });
            });
    } catch (err) {
        res.status(500).json({
            status: 500,
            success: false,
            message: err.message || "Something Went wrong while requesting!"
        });
    }
};

exports.deleteLocation = async (req, res) => {
    const id = req.query.id;
    try {
        const newLocation = await location.findOne({
            where: { id }
        });
        await newLocation.destroy().then(data => {
            res.status(200).json({
                status: 200,
                success: true,
                message: "Deleted Successfully",
                data: data
            });
        }).catch(err => {
            res.status(500).json({
                status: 500,
                success: false,
                message: err.message || "Something Went wrong while requesting!"
            });
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            success: false,
            message: err.message || "Something Went wrong while requesting!"
        });
    }
};
