import {GameBoard} from "../assets/GameBoard.js"

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
    expect(newGrid.placeShips(1, 1, "horizontal")).toEqual(
        [[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0]]
    );

    expect(newGrid.placeShips(2, 2, "vertical")).toEqual(
        [[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 0, 0, 0], 
         [0, 0, 1, 0, 0, 0, 0], 
         [0, 0, 1, 0, 0, 0, 0], 
         [0, 0, 1, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0]]
    );
});