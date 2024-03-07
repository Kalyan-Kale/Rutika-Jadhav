const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
	lab:{
		type:String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: false,
	},
    contact: {
		type: String,
		required: true,
		unique: false,
	},
	service: {
		type: String,
		required: true,
	},
    date: {
		type: String,
		required: true,
		
	},
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
