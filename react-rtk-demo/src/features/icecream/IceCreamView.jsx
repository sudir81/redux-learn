import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const noIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>IceCream View</h1>
      <h3>No of Ice Creams - {noIceCreams}</h3>
      <button onClick={() => dispatch(ordered(1))}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(10))}>Restock IceCream</button>
    </div>
  );
};

export default IceCreamView;
