// Useful for Formatting the price acc to Indian pricing system to be displayed on Product Cards.
const formatProductPrice = (price) => {
    return price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 2});
}

export { formatProductPrice };