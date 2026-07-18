import { useState } from "react";
import PlantList from "./components/PlantList";
import CartList from "./components/CartList";
import PLANTS from "./data";

export default function App() {
  // cart has object {plant (an object),quantity}
  const [cart, setCart] = useState([]);

  function addPlant(plant) {
    const newCart = cart.slice();
    const cartPlant = newCart.filter((item) => item.plant === plant)[0];
    cartPlant ? (cartPlant.quantity += 1) : newCart.push({ plant, quantity: 1 });
    setCart(newCart);
  }

  function removePlant(plant) {
    const newCart = cart.slice();
    const cartPlant = cart.filter((item) => item.plant === plant)[0];
    cartPlant?.quantity > 1 ? (cartPlant.quantity -= 1) : newCart.splice(newCart.indexOf(cartPlant), 1);
    setCart(newCart);
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <div>
          <h2>Plants</h2>
          <PlantList addPlant={addPlant} />
        </div>
        <div>
          <h2>Cart</h2>
          <CartList cart={cart} addPlant={addPlant} removePlant={removePlant} />
        </div>
      </main>
    </>
  );
}
