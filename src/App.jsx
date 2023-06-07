import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyFooter from "./components/Footer/MyFooter";
import MyNavbar from "./components/Navbar/MyNavbar";
import MyHome from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Project from "./pages/Project/Project";
import ScrollTop from "./utils/scrollTop";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <ScrollTop />
          <MyNavbar />
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <MyFooter />
        </Router>
      </div>
    </>
  );
}

export default App;
