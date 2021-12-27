
const tictactoeWinner = board => {
    // fields in the row are same
    //first row
    if (board[0][0] == board[0][1] && board[0][1] == board[0][2]) {
        return board[0][1]
    }
    //second row
    if (board[1][0] == board[1][1] && board[1][1] == board[1][2]) {
        return board[1][1]
    }
    //third row
    if (board[2][0] == board[2][1] && board[2][1] == board[2][2]) {
        return board[2][1]
    }

    // for loop row wise
    //first column
    if (board[0][0] == board[1][0] && board[1][0] == board[2][0]) {
        return board[1][0]
    }
    if (board[0][1] == board[1][1] && board[1][1] == board[2][1]) {
        return board[1][1]
    }
    if (board[0][2] == board[1][2] && board[1][2] == board[2][2]) {
        return board[1][2]
    }
    //columwise for loop

    // diagnol case 
} 
module.exports = tictactoeWinner