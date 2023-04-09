import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

import "./style/App.scss"
import "./style/header.scss"
import "./style/home.scss"
import "./style/footer.scss"
import "./style/contact.scss"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
