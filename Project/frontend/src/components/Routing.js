import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.js";
import Explore from "../pages/Explore.js";
import Cart from "../pages/Cart.js";
import ProductItem from "../pages/ProductItem.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import Shipping from "../pages/Shipping.js";
import NotFound from "../pages/NotFound.js";

const Routing = () =>{
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productitem" element={<ProductItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<Shipping />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    );
};

export default Routing;