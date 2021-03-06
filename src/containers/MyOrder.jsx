import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "../context/AppContext";
import "@styles/MyOrder.scss";
import icon from "@icons/flechita.svg";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (acc, curr) => acc + curr.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={icon} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderitem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ {sumTotal()}</p>
        </div>
        <Link to={"/checkout"}>
          <button className="primary-button">Checkout</button>
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
