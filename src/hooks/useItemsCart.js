import { useEffect, useReducer, useState } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {
    // const [cartItems, setCartItems] = useState(initialCartItems);
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        console.log(hasItem);
        if(hasItem){
            // setCartItems([...cartItems.filter( (i) => i.product.id !== product.id ),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            )
        }else{
            dispatch({
                type: AddProductCart,
                payload: product,
            })
        }
        
    }

    const handlerDeleteProduct = (id) => {
        dispatch({
            type: DeleteProductCart,
            payload: id
        })
        
    }
  return{
        cartItems,
        handlerAddProductCart,
        handlerDeleteProduct
  }
}
