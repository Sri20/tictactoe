const tictactoeWinner = require('./tictactoe.js')

test(" winner is in first row", () => {
    const gameboard =  [['X', 'X', 'X'],           //Arrange
                        ['O', 'X', 'O'],
                        ['X', 'O', 'X']]

    expect(tictactoeWinner(gameboard)).toBe('X')  //Act & Assert
})

test(" winner is in second row ", () => {
    const gameboard =  [['X', null, 'X'],           //Arrange
                        ['O', 'O', 'O'],
                        ['X', 'O', 'X']]

    expect(tictactoeWinner(gameboard)).toBe('O')  //Act & Assert
})

test(" winner is in third  row ", () => {
    const gameboard =  [['X', null, 'X'],           //Arrange
                        ['O', 'X', 'O'],
                        ['X', 'X', 'X']]

    expect(tictactoeWinner(gameboard)).toBe('X')  //Act & Assert
})

test(" winner is in first column ", () => {
    const gameboard =  [['X', null, 'X'],           //Arrange
                        ['X', 'X', 'O'],
                        ['X', null, 'X']]

    expect(tictactoeWinner(gameboard)).toBe('X')  //Act & Assert
})

test(" winner is in second column ", () => {
    const gameboard =  [['X', 'X', null],           //Arrange
                        [null, 'X', 'O'],
                        ['X', 'X', 'O']]

    expect(tictactoeWinner(gameboard)).toBe('X')  //Act & Assert
})

test(" winner is in third column ", () => {
    const gameboard =  [['X', 'X', 'O'],           //Arrange
                        [null, null, 'O'],
                        ['X', 'X', 'O']]

    expect(tictactoeWinner(gameboard)).toBe('O')  //Act & Assert
})

test(" winner is in diagnol ", () => {
    const gameboard =  [['X', 'X', 'O'],           //Arrange
                        [null, 'X', 'O'],
                        ['X', 'O', 'X']]

    expect(tictactoeWinner(gameboard)).toBe('X')  //Act & Assert
})