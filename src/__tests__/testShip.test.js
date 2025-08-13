import {Carrier, Patrol_Boat} from "../assets/Ship.js"


test("Ships should have hit() function that increases the number of 'hits' in ship.", () =>{
    expect(Carrier.hit()).toEqual(1);
    expect(Patrol_Boat.hit()).toEqual(1);
    expect(Patrol_Boat.hit()).toEqual(2);
});

test("isSunk() should dbe a function that calculates whether a ship is considered sunk based on its length and no. of hits it has received", () => {
    expect(Carrier.isSunk()).toBeFalsy();
    expect(Patrol_Boat.isSunk()).toBeTruthy();
});

