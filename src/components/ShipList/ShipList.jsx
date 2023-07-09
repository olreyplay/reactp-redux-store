import React from "react";

const ShipList = () => {
  const ships = [];

  const handleRemoveShip = (ship) => {
    // Logic to remove a ship
  };

  return (
    <div>
      <ul>
        {ships.map((ship) => (
          <li key={ship.id}>
            <h2>
              <span>Name:</span> {ship.name}
            </h2>
            <p>
              <span>Type:</span> {ship.type}
            </p>
            <button onClick={() => handleRemoveShip(ship)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
