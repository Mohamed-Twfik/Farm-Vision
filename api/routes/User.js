const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController.js")
const validID = require("../middlewares/validators/checkValidIDMW")
const createUserValidator = require("../middlewares/validators/createUserValidatorMW")
const updateUserValidator = require("../middlewares/validators/updateUserValidatorMW")
const encryptPassword = require("../middlewares/ecryptPasswordMW")
const authrization = require("../middlewares/checkPermission/authrizationMW")
const checkUserFound = require("../middlewares/checkFound/checkUserFoundMW")
const checkPermission = require("../middlewares/checkPermission/checkPermissionOnUserMW")
const confirmPassword = require("../middlewares/validators/confirmPasswordMW")
const checkValidUserFeatures = require("../middlewares/validators/userFeaturesValidatorMW.js")

router.get("/:id", validID, authrization, checkUserFound, checkPermission, userController.getUserByID)
router.post("/", createUserValidator, checkValidUserFeatures, confirmPassword, encryptPassword, userController.createUser)
router.put("/:id", validID, authrization, checkUserFound, checkPermission, updateUserValidator, checkValidUserFeatures, userController.updateUser)
router.delete("/:id", validID, authrization, checkUserFound, checkPermission, userController.deleteUser)

module.exports = router