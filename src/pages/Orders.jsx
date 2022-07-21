import React from "react";
import OrderItem from "@components/OrderItem";
import "@styles/Orders.scss";
import useInitialState from "../hooks/useInitialState";

const API = "http://api.escuelajs.co/api/v1/products";

const Orders = () => {
  const { state } = useInitialState();
  console.log(state);
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My orders</h1>
        <div className="Orders-content">
          {state.cart.map((item) => (
            <OrderItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
