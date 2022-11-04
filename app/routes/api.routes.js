const apiController = require("../controllers/api.controller");
const verifySignUp = require("../middleware/verifySignUp");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
        );
        next();
      });
    
      app.post(
        "/api/user/signup",
        [
          verifySignUp.checkDuplicateUsernameOrEmail
        ],
        apiController.signup
      );
    
      app.post("/api/user/signin", apiController.signin);
      app.get("/api/task/get-all", apiController.showAllTasks);
      app.post("/api/task/create", apiController.saveTask);
      app.post("/api/task/update", apiController.updateTask);
      app.get("/api/task/delete", apiController.deleteTask);
  
      app.get("/api/location/get-all", apiController.showAllLocations);
      app.post("/api/location/create", apiController.saveLocation);
      app.post("/api/location/update", apiController.updateLocation);
      app.get("/api/location/delete", apiController.deleteLocation);

};