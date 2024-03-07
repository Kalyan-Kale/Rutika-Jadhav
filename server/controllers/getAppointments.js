const Appointment = require("../models/Appointment");

exports.getAppointments = async (req, res) => {
  try {
    const appointmentData = await Appointment.find({});
    res.json({ success: true, data: appointmentData });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
