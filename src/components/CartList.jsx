import CartPlant from "./CartPlant";

export default function CartList({ cart, addPlant, removePlant }) {
  return (
    <ul className="cartList">
      {cart.map((cartPlant, i) => (
        <li key={i}>
          <CartPlant addPlant={addPlant} removePlant={removePlant} cartPlant={cartPlant} />
        </li>
      ))}
    </ul>
  );
}
