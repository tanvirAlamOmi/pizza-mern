export const addToCart = (product, quantity, variant) => (dispatch, getState) => {
    const cartItem = {
        name: product.name,
        _id: product._id,
        image: product.image,
        variant: variant,
        quantity: quantity,
        prices: product.prices,
        price: product.prices[0][variant] * quantity
    }

    dispatch({type: 'ADD_TO_CART', payload: cartItem});

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}