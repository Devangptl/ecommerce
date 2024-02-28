import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Wishlist from "./page/Wishlist";

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
