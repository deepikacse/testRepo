
import CartContext from './cart-context';

const CarProvider =props =>{
 const addItemToCartHandler =item =>{};
const removeItemfromCartHandler =id =>{

};
 const cartContext ={
    items:[],
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:removeItemfromCartHandler,
 };
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};

//test

export default CarProvider;