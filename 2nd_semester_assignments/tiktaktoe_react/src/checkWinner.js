import React from "react";

function checkWinner(state) {
    //state is an array of 0 and 1 and null

    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < win.length; i++) {
        const [a,b,c] = win[i]; // const [a,b,c] is each of the numbers, win[i] is the row
        if (state[a] == state[b] && state[a] == state[c] && state[a]) //and state of a is not null (the last one)
            return state[a]; //state[a] will either be a 0 or a 1, we've got a winning combination
    }
    return null;
}

export default checkWinner;