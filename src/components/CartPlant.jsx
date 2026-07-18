export default function CartPlant({ cartPlant, addPlant, removePlant }) {
  return (
    <>
      {cartPlant?.quantity > 0 && (
        <>
          <p>
            {cartPlant.plant.image} {cartPlant.plant.name}
          </p>

          <div className="quantity">
            <button onClick={() => removePlant(cartPlant.plant)}>-</button>
            <p>{cartPlant.quantity}</p>
            <button onClick={() => addPlant(cartPlant.plant)}>+</button>
          </div>
        </>
      )}
    </>
  );
}
