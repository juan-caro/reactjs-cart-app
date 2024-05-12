import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"


export const CartRoutes = ({handlerAddProductCart, cartItems, handlerDeleteProduct}) => {
  return (
    <>
        <Routes>
            <Route path="catalog" element={ <CatalogView handler={product => handlerAddProductCart(product)}/> } />
            <Route path="cart" element={(
                cartItems.length > 0 ? (

                    <div className="my-4 w-50">
                        <CartView items={cartItems} handlerDelete={handlerDeleteProduct}/>
                    </div>
    
                ) : (
                    <div className="alert alert-warning">
                        No hay productos en el carro de compra
                    </div>   
                )
            )} />
            <Route path="/" element={ <Navigate to={'catalog'} /> } />
        </Routes>
    </>
  )
}
