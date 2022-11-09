import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Patient from "./pages/Patient";
import OperationDetails from "./pages/OperationDetails";
import Doctor from "./pages/DoctorDetails/Doctor";
import BedAllotment from "./pages/BedAllotment";
import BloodBag from "./pages/BloodBag";
import Medicines from "./pages/Medicines";
import Management from "./pages/Management";
import Nurse from "./pages/Nurse";
import Home from "./pages/DoctorDetails/Home";
import AddEdit from "./pages/DoctorDetails/AddEdit";
import View from "./pages/DoctorDetails/View";
import About from "./pages/DoctorDetails/About";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/patient" element={<Patient />} />
        <Route
          path="/dashboard/operationdetails"
          element={<OperationDetails />}
        />
        <Route path="/management" element={<Management />} />
        <Route path="/management/bedallotment" element={<BedAllotment />} />
        <Route path="/management/bloodbag" element={<BloodBag />} />
        <Route path="/management/medicines" element={<Medicines />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/" element={<Home />} />
        <Route path="/doctor/AddEdit" element={<AddEdit />} />
        <Route path="/doctor/View/:id" element={<View />} />
        <Route path="/doctor/About" element={<About />} />
        <Route path="/nurse" element={<Nurse />} />
      </Routes>
    </Router>
  );
}

export default App;
