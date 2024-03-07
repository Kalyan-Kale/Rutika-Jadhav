import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBTableHead,
  MDBTableBody,
  MDBTable,
  MDBTextArea
} from 'mdb-react-ui-kit';
function App() {
  const [appointments, setAppointments] = useState([]);
  const [empData, setEmpData] = useState();


  const getAllData = async () => {
    try {
      const appointments = await fetch(
        `${process.env.REACT_APP_BASE_URL}/appointments`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await appointments.json();
      console.log(res);
      setEmpData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  console.log(empData);

  return (
    <div className='w-full bg-[#84CEEB]'>
      <div className='w-full max-w-[80%] mx-auto pt-12'>
      <h1 className='text-center pb-6 font-[Nexa]'>Appointment Data</h1>

      <div className='flex flex-col items-start gap-8'>
        <h1 className='font-[Nexa]'>Fab Lab Appointment Data</h1>
        <MDBTable align='middle'>

          <MDBTableHead>
            <tr>
              <th scope='col'><p>Lab</p></th>
              <th scope='col'><p>Name</p></th>
              <th scope='col'><p>Email</p></th>
              <th scope='col'><p>Contact</p></th>
              <th scope='col'><p>Service</p></th>
              <th scope='col'><p>Date</p></th>


            </tr>
          </MDBTableHead>
          {empData?.data.map(appointment => {
            if (appointment.lab === "FabLab") {

              return (
                <MDBTableBody key={appointment._id}>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{appointment.lab}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>{appointment.name}</p>
                    </td>
                    <td>
                      <p>{appointment.email}</p>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.contact}</p>
                      </div>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.service}</p>
                      </div>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.date}</p>
                      </div>
                    </td>
                  </tr>
                </MDBTableBody>)
            }
            return null; // Add this line if you want to skip rendering for other cases
          })}
        </MDBTable>
        {/* fablab */}

        <h1 className='font-[Nexa]'>Software Appointment Data</h1>
        <MDBTable align='middle'>

          <MDBTableHead>
            <tr>
              <th scope='col'><p>Lab</p></th>
              <th scope='col'><p>Name</p></th>
              <th scope='col'><p>Email</p></th>
              <th scope='col'><p>Contact</p></th>
              <th scope='col'><p>Service</p></th>
              <th scope='col'><p>Date</p></th>


            </tr>
          </MDBTableHead>
          {empData?.data.map(appointment => {
            if (appointment.lab === "Software") {

              return (
                <MDBTableBody key={appointment._id}>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{appointment.lab}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>{appointment.name}</p>
                    </td>
                    <td>
                      <p>{appointment.email}</p>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.contact}</p>
                      </div>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.service}</p>
                      </div>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.date}</p>
                      </div>
                    </td>
                  </tr>
                </MDBTableBody>)
            }
            return null; // Add this line if you want to skip rendering for other cases
          })}
        </MDBTable>
        <h1 className='font-[Nexa]'>Industry 4.0 Appointment Data</h1>
        <MDBTable align='middle'>

          <MDBTableHead>
            <tr>
              <th scope='col'><p>Lab</p></th>
              <th scope='col'><p>Name</p></th>
              <th scope='col'><p>Email</p></th>
              <th scope='col'><p>Contact</p></th>
              <th scope='col'><p>Service</p></th>
              <th scope='col'><p>Date</p></th>


            </tr>
          </MDBTableHead>
          {empData?.data.map(appointment => {
            if (appointment.lab === "Industry4.0") {

              return (
                <MDBTableBody key={appointment._id}>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{appointment.lab}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>{appointment.name}</p>
                    </td>
                    <td>
                      <p>{appointment.email}</p>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.contact}</p>
                      </div>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.service}</p>
                      </div>
                    </td>
                    <td>
                      <div className='details'>
                        <p>{appointment.date}</p>
                      </div>
                    </td>
                  </tr>
                </MDBTableBody>)
            }
            return null; // Add this line if you want to skip rendering for other cases
          })}
        </MDBTable>
      </div>

    </div>
    </div>
  );
}

export default App;
