import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { useItemsCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";



export const CartApp = () => {


    const {cartItems, handlerAddProductCart, handlerDeleteProduct} = useItemsCart();
    

    return(
    <>
        <Navbar/>
        <div className="container">
            <h3>Cart App</h3>
            <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProduct={handlerDeleteProduct}/>
                        

            
            

            
        </div>
    
    </>
    )
}