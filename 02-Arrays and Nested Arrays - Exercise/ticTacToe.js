function ticTacToe(input) {
    
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isFirstPlayer = true;
    for (let coordinates of input) {
        let [x, y] = coordinates.split(' ');

        if (board[x][y]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        let marker = isFirstPlayer ? "X" : "O";
        board[x][y] = marker;
        if (checkWin(board, marker)) {
            console.log(`Player ${marker} wins!`);
            return printBoard(board);
        }

        if (!freeSpace(board)) {
            console.log("The game ended! Nobody wins :(");
            return printBoard(board);
        }

        isFirstPlayer = !isFirstPlayer;
    }

    function printBoard(board) {
        board.forEach(row => {
            console.log(row.join('\t'));
        });
    }


    function freeSpace(board) {
        return !!board.flat().filter(x => !x).length;
    }


    function checkWin(board, marker) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] == marker && board[i][1] == marker && board[i][2] == marker) {
                return true;
            } else if (board[0][i] == marker && board[1][i] == marker && board[2][i] == marker) {
                return true;
            } else if (board[0][0] == marker && board[1][1] == marker && board[2][2] == marker) {
                return true;
            } else if (board[0][2] == marker && board[1][1] == marker && board[2][0] == marker) {
                return true;
            }
        }
    }

    for (let el of board) {
        console.log(el.join('\t'));
    }
}


ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);

// ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// ticTacToe(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 2",
// "1 1",
// "2 1",
// "2 2",
// "0 0"]);