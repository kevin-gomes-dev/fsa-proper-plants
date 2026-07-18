import PLANTS from "../data";
import Plant from "./Plant";
export default function PlantList({ addPlant }) {
  return (
    <>
      <ul>
        {PLANTS.map((plant) => (
          <li key={plant.id} className="plant">
            <Plant plant={plant} addPlant={addPlant} />
          </li>
        ))}
      </ul>
    </>
  );
}
