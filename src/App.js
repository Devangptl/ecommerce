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
import { fetchDataFromApi } from "./utils/api";
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);


  // console.log(data);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      // setProducts(res);
      // console.log(res);
      setData(res.data);
    });
  };

  
  useEffect(() => {
    getProducts();
  }, []);

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
        <Route path="/item" element={<NoItemCart />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/category/:title"  element={<Categories data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
