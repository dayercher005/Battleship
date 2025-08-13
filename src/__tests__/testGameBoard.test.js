import {GameBoard} from "../assets/GameBoard.js";
import {Carrier, BattleShip, Destroyer, Submarine, Patrol_Boat} from "../assets/Ship.js";

const newGrid = new GameBoard();

test("Creating GameBoard Grid", ()=> {
    expect(newGrid.gameGrid).toEqual(
        [[0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0]]
    )
});

test("GameBoards should be able to place ships at specific coordinates by calling the Ship class.", () => {
    expect(newGrid.placeShips(Submarine, "horizontal", 1, 1)).toEqual(
        [[0, 0, 0, 0, 0, 0, 0], 
         [0, 4, 4, 4, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0]]
    );

    expect(newGrid.placeShips(Destroyer, "vertical", 2, 2)).toEqual(
        [[0, 0, 0, 0, 0, 0, 0], 
         [0, 4, 4, 4, 0, 0, 0], 
         [0, 0, 3, 0, 0, 0, 0], 
         [0, 0, 3, 0, 0, 0, 0], 
         [0, 0, 3, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0]]
    );
});

test("GameBoards should determine whether or not attack hit a ship and send hit function to correct ship.", () => {
    
})