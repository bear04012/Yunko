const board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
        ];



let count=1

function clicked(r,c,btn){
    
    board[r][c] = count;
    
    if (count == 1) {
        count = 2;
    } else {
        count = 1;
    }
    
    render();
    
    btn.disabled = true;
    
    checkWinner();
}


function render() {
    let buttons = document.querySelectorAll("button");
    
    for(let r=0; r<board.length; r++){
        for (let c=0; c<board.length; c++){
            let button = buttons[c + r*board.length];
            switch (board[r][c]) {
                case 1:
                    button.innerText="O";
                    button.style.color="blue";
                    break;
                case 2:
                    button.innerText="X";
                    button.style.color="green";
                    break;
            }   
        }
    }
}

function checkWinner() {
    //horizontal
    for (let r=0; r<board.length; r++){
        let winner = true;
        
        for (let c=1 ; c<board.length; c++){
            if (board[r][c] == 0 || board[r][c]!= board[r][0]) {
                winner = false;
                break;
            }
        }
        
        if (winner) {
            showWinner(board[r][0]);
            return;
        }
    }
    
    //vertical
    for (let c=0; c<board.length;c++){
        let winner = true;
        
        for (let r=1; r<board.length; r++){
            if (board[r][c] == 0 || board[r][c] != board[0][c]) {
                winner = false;
                break;
            }
        }
        
        if (winner) {
            showWinner(board[0][c]);
            return;
        }
    }
    
    //diagonal1
    if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 0){
        showWinner(board[0][0]);
        return;
    }
    
    //diagonal2
    if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != 0){
        showWinner(board[0][2]);
        return;
    }
}

function showWinner(winner) {
    alert("winner is " + winner);
}