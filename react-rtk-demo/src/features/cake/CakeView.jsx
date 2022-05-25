import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const noCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cake View</h1>
      <h3>No of cakes - {noCakes}</h3>
      <button onClick={() => dispatch(ordered(1))}>Order Cake</button>
      <button onClick={() => dispatch(restocked(10))}>Restock Cake</button>
    </div>
  );
};

export default CakeView;
