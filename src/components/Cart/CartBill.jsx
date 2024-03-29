import "./CartBill.css";
import { HashLink } from "react-router-hash-link";
import { 
    formatProductPrice, 
    calculateTotalPrice, 
    calculateDiscountAmt, 
    calculateTotalDeliveryPrice 
} from "common/helpers";

const CartBill = ({ cartItemsData, cartListItemsCount }) => {
    const calculateFinalAmt = () => {
        return parseFloat(Number(totalPrice - discountAmt + deliveryCharges).toFixed(2));
    }

    const calculateTotalAmtSaved = () => {
        return parseFloat(Number(discountAmt - deliveryCharges).toFixed(2));
    }

    const totalPrice = calculateTotalPrice(cartItemsData);
    const discountAmt = calculateDiscountAmt(cartItemsData);
    const deliveryCharges = calculateTotalDeliveryPrice(cartItemsData);

    return (
        <div className="cart-bill">
            <h1 className="cart-bill-heading heading-2">PRICE DETAILS</h1>
            <hr className="divide-nav-items" />
            <div className="bill-item flex-row-container">
                <p className="bill-item-txt">Price ({ cartListItemsCount } items)</p>
                <p>{formatProductPrice(totalPrice)}</p>
            </div>
            <hr className="divide-nav-items" />
            <div className="bill-item flex-row-container">
                <p className="bill-item-txt">Discount</p>
                <p>- {formatProductPrice(discountAmt)}</p>
            </div>
            <hr className="divide-nav-items" />
            <div className="bill-item flex-row-container">
                <p className="bill-item-txt">Delivery Charge</p>
                <p>{formatProductPrice(deliveryCharges)}</p>
            </div>
            <hr className="divide-nav-items" />
            <div className="bill-item flex-row-container">
                <h2 className="bill-item-heading">Total Amount</h2>
                <h3 className="bill-item-txt heading-4">{formatProductPrice(calculateFinalAmt())}</h3>
            </div>
            <hr className="divide-nav-items" />
            <p className="amt-saved-txt">
                You will save <b>{formatProductPrice(calculateTotalAmtSaved())}</b> on this order.
            </p>
            <HashLink to="#">
                <button className="btn btn-primary rounded-med" id="place-order-btn">PLACE ORDER</button>
            </HashLink>
        </div>
    );
}

export { CartBill };