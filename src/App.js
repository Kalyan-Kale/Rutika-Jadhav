import logo from "./logo.svg";
import "./App.css";
import "./fonts/Nexa-Heavy.ttf";
import "./fonts/Nexa-ExtraLight.ttf";
import Landing from "./pages/Landing";
import Industry from "./pages/industry4-0";
import FabLab from "./pages/fab-lab";
import Automation from "./pages/automation";
import Login from "./Login/Login-SignUp";
import Software from "./pages/software";
import Admin from "./pages/admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppointmentFormFabLab from "./components/FabLab/AppointmentFormFabLab";
import AppointmentFormIndustry4_0 from "./components/FabLab/AppointmentFormIndustry4_0";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="landing" element={<Landing />} />
        <Route path="admin" element={<Admin />} />
        <Route path="industry-4-0" element={<Industry />} />
        <Route path="fab-lab" element={<FabLab />} />
        <Route path="automation" element={<Automation />} />
        <Route path="software" element={<Software />} />
        <Route
          path="AppointmentFormFabLab"
          element={<AppointmentFormFabLab />}
        />
        <Route
          path="AppointmentFormIndustry4_0"
          element={<AppointmentFormIndustry4_0 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
