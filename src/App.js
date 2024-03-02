import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Wishlist from "./page/Wishlist";
import Cart from "./page/Cart";
import { Toaster, toast } from 'sonner'

function App() {
  return (
    <div>
      <Navbar />
      <Toaster position="top-center"  richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
