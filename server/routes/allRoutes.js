const express = require("express");
const router = express.Router();
const {jwtAuthMiddleware, generateToken} = require('./../jwt');
const { createAppointment } = require("../controllers/createAppointment");
const { getAppointments } = require("../controllers/getAppointments");
const { signUp, login, profile, deleteProfile} = require('../controllers/createUser');

router.post("/createAppointment", jwtAuthMiddleware, createAppointment);
router.get('/appointments',jwtAuthMiddleware, getAppointments);
router.post("/createUser",signUp);
router.post('/loginUser', login);
router.get('/profile', profile);
router.delete('/deleteProfile', deleteProfile);

module.exports = router;
