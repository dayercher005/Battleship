import {Ship} from "../assets/Ship.js"

const royalCaribbean = new Ship(4, 0);

test("Ships should have hit() function that increases the number of 'hits' in ship.", () =>{
    expect(royalCaribbean.hit()).toBe(1);
});