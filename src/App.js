import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Wishlist from "./page/Wishlist";
import Cart from "./page/Cart";
import { Toaster} from 'sonner'
import NoItemCart from "./components/NoItemCart";
import ProductDetail from "./page/ProductDetail";
import Categories from "./page/Categories";
import useFetch from "./hooks/useFetch";
import Checkout from "./page/Checkout";
import Profile from "./page/account/Profile";
import EditProfile from "./page/account/EditDetails";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {


  const {data} = useFetch('/api/products?populate=*')



  return (
    <div>
      <Navbar />
      <Toaster position="top-center"  richColors />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item" element={<NoItemCart />} />
        <Route path="/productdetail/:id" element={<ProductDetail data={data} />} />
        <Route path="/:title/:id"  element={<Categories data={data} />} />
        <Route path="/checkout"  element={<Checkout  />} />
        <Route path="/myaccount"  element={<Profile  />} />
        <Route path="/about"  element={<About  />} />
        <Route path="/contact"  element={<Contact  />} />
        

      </Routes>
      <Footer />
    </div>
  );
}



export default App;
