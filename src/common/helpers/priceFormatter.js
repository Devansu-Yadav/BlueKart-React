// Useful for Formatting the price acc to Indian pricing system to be displayed on Product Cards.
const formatProductPrice = (price = "") => {
    return price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 2});
}

const calculateTotalPrice = (cartList) => {
    return parseFloat(Number(cartList.reduce((totalPrice, currentItem) => currentItem.price*currentItem.qty + totalPrice, 0)).toFixed(2));
}

const calculateTotalDeliveryPrice = (cartList) => {
    return parseFloat(Number(cartList.reduce((totalPrice, currentItem) => ((currentItem.price * 0.005) + totalPrice), 0)).toFixed(2));
}

const calculateDiscountAmt = (cartList) => {
    return parseFloat(Number(cartList.reduce((totalDiscountPrice, currentItem) => ((currentItem.price * currentItem.discountPercent)/100 + totalDiscountPrice), 0)).toFixed(2));
}

const getDiscountedProductPrice = (productPrice, discountPercent) => {
    return parseFloat(Number(productPrice) - Number((productPrice * discountPercent)/100));
}

export { formatProductPrice, calculateTotalPrice, calculateTotalDeliveryPrice, calculateDiscountAmt, getDiscountedProductPrice };