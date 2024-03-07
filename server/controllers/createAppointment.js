const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  try {

    console.log("req body", req.body);

    const {lab, name, email, contact, service, date } = req.body;

    if ( !lab ||!name || !email || !contact || !service || !date) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }

    const appointment = await Appointment.create({
      lab,
      name,
      email,
      contact,
      service,
      date,
    });

    return res.status(200).json({
      status: 201,
      message: "Appointment created successfully",
      data: appointment,
    });

  } catch (error) {

    console.log("error", error);

    return res.status(500).json({
      status: 500,
      message: error.message,
    });
    
  }
};
