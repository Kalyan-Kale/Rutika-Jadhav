// import { response } from "express";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import DatePicker from "react-date-picker";

const AppointmentFormFabLab = () => {
  const { register, handleSubmit } = useForm();
  const [dateValue, onDateChange] = useState(new Date());
  const [selectedService, setSelectedService] = useState(null);
  const [thankYou, setThankYou] = useState("");

  // const handleServiceChange = (event) => {
  //   setSelectedService(event.target.value);
  // };
 
  // const handleSubmit1 = (event) => {
  //   event.preventDefault();

  //   // Perform any necessary validation or processing here
  //   // For example, you can send the form data to a server or update the state

  //   // Pass the selected service to the register function
  //   register(selectedService);

  //   console.log('Selected service:', selectedService);
  // };

  const navigate = useNavigate();

  const createAppointment = async (data) => {
    const token = localStorage.getItem("token");
    const appointmentData = {
      ...data,
      lab: "FabLab", // Set the default value as 'fab lab'
    };

    try {
      const savedAppointmentResponse = await fetch(
        `${process.env.REACT_APP_BASE_URL}/createAppointment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send the token in the headers
          },
          body: JSON.stringify(appointmentData), // Pass the appointmentData with the default value
        }
      );
      if (savedAppointmentResponse.status === 401) {
        setThankYou("Please Login again");
      } else {
        setThankYou("Thank you!! Your Appointment is Booked 🤩");
        console.log("FORM RESPONSE......", savedAppointmentResponse.status);
      }
      navigate("/fab-lab");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const dateStyle = {
    backgroundColor: "#84CEEB",
    width: "13.2rem",
    height: "2rem",
    fontSize: "1.5rem",
  };
  return (
    <div>
      <form onSubmit={handleSubmit(createAppointment)} className="mt-8">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Student Name{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-black bg-transparent py-2 px-3 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black-50  dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter You Full Name"
                {...register("name")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Student Email Id{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-black bg-transparent py-2 px-3 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black-50  dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="contact"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Contact Number{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-black bg-transparent py-2 px-3 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black-50  dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Contact Number"
                {...register("contact")}
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="service"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              Select Service
            </label>
            <div className="mt-2.5">
              <select
                className="flex h-10 w-full rounded-md border border-black bg-transparent py-2 px-3 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black-50  dark:focus:ring-offset-gray-900"
                // value={selectedService}
                // onChange={handleServiceChange}
                {...register("service")}
              >
                <option value="">Select an option</option>
                <option value="Laser cutting">Laser Cutting</option>
                <option value="3D Printing">3D Printing</option>
                <option value="PCB Milling">PCB Milling</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="date"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Select Date{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-black bg-transparent py-2 px-3 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black-50  dark:focus:ring-offset-gray-900"
                type="date"
                style={dateStyle}
                {...register("date")}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Book Appointment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>{" "}
        <p>{thankYou}</p>
      </form>
    </div>
  );
};

export default AppointmentFormFabLab;
