const {GameController} = require('../assets/App.js');

const newGame = GameController();

test('HumanRandomPlacementController() should generate a random board filled with Ship Objects', () => {
    expect(newGame.HumanRandomPlacementController()).toEqual(
        
    )
})

test('ComputerAttackController() should generate a board filled both previous ships and computer attacks', () => {
    expect(newGame.ComputerAttackController()).toEqual(
        
    )
})