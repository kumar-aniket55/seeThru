import React from "react";
// import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";
import FormatPrice from "../helper/FormatPrice";

const CartItem = ({ id, name, price, quantity,stock}) => {
  const { removeItem,setAmount} = useCartContext();
  const setDecrease = () => {
    setAmount(quantity-1,id,price)
  };

  const setIncrease = () => {
    // console.log(quantity);
    setAmount(quantity+1,id);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div style={{fontSize:"2rem"}}>
        {/* <div> */}
          {name}
        {/* </div> */}
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * quantity} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;