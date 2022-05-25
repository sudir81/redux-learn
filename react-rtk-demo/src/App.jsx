import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";
import UsersView from "./features/user/UsersView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UsersView />
    </div>
  );
}

export default App;
