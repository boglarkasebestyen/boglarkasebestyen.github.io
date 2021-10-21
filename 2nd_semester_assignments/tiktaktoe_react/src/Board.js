
import React, {useState, useEffect} from "react";
import checkWinner from "./checkWinner";

//new web component for the squares
//child component
const Square = ({id, player, newState}) => { 

    const [color, setColor] = useState('green');

    const [status, setStatus] = useState(null);
    const XorOArr = ["0", "X"];     //--> we're going to put either an X or an 0 into the status

    
    //color palette
    const palet = ['red', 'blue', 'green'];

    const getRandomColor = () => palet[Math.floor(Math.random() * 3)]; 

  
    useEffect(() => {
        console.log(`useEffect rendering square ${id}`); //will tell us which square is being re-rendered
        //when useEffect() is returning, we can pass it a function which will be called when it's unmounting the component
        return () => console.log(`useEffect unmounting square ${id}`) 
    });

    
    return (
        <button onClick={(e) => {
            let col = getRandomColor();
            setColor(col);

            //catching the next player (either an 0 or an X / a 0 or a 1)
            let nextPlayer = newState(id); 

            setStatus(nextPlayer);
            e.target.style.background = col;
        }}>
            <h1>{XorOArr[status]}</h1>
        </button>
    )
}


//parent component
const Board = () => {
    const [player, setPlayer] = useState(1); //initialize player to 1
    console.log('Board (re-)rendering');


    const [stateOfGame, setStateOfGame] = useState(Array(9).fill(null)); //change from empty array 

    let status = `Next player: ${player}`;
    let winner = checkWinner(stateOfGame);

    if (winner != null) status = `Player ${winner} wins`
    
   
    //changing obj parameter to idOfSquare
    const newState = (idOfSquare) => {
        //new
        let presentPlayer = player;

        //adding new change of state
        //rearranging the overall order 
        stateOfGame[idOfSquare] = player; //player is present player/"old" player, that's been set in memory (0 or 1)

        //set state again
        setStateOfGame(stateOfGame); //state is array of 0 or 1 or null

        let nextPlayer = (player + 1) % 2;

        setPlayer(nextPlayer);

        return presentPlayer;
    }
    

    //a function that creates the squares; square "factory"
    function renderSquare(i) { //*without the index argument, it doesn't work
        return <Square id={i} player={player} newState={newState}></Square>; //adding the newState function here
    }
    return (
        <div
        className="game-board">
            {/* creating a grid row in which we'll put the blue squares */}
            <div className="grid-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="grid-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="grid-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        <div id="info">
        {/* deleting the Show/Hide and Re-render buttons, we don't need them anymore*/}
            <h1>{status}</h1>
        </div>
        </div>
    );
};

export default Board;
