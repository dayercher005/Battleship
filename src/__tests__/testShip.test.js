import {Ship} from "../assets/Ship.js"

const royalCaribbean = new Ship(4, 0);
const terribleCaribbean = new Ship(5, 4);

test("Ships should have hit() function that increases the number of 'hits' in ship.", () =>{
    expect(royalCaribbean.hit()).toEqual(1);
    expect(terribleCaribbean.hit()).toEqual(5);
});

test("isSunk() should dbe a function that calculates whether a ship is considered sunk based on its length and no. of hits it has received", () => {
    expect(royalCaribbean.isSunk()).toBeFalsy();
    expect(terribleCaribbean.isSunk()).toBeTruthy();
})