export const addToCart = (product, quantity, variant) => (dispatch, getState) => {
    const cartItem = {
        name: product.name,
        _id: product._id,
        image: product.image,
        variant: variant,
        quantity: Number(quantity),
        prices: (product.prices),
        price: Number(product.prices[0][variant]) * Number(quantity)
    }

    if(cartItem.quantity <= 0){
        dispatch({type: 'REMOVE_FROM_CART', payload: product})
    }
    else{

        dispatch({type: 'ADD_TO_CART', payload: cartItem});
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const removeFromCart = product => (dispatch, getState) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: product})
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}