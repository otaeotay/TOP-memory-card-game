import React, {useEffect, useState} from 'react';
import Tiles from './Tiles'

const Game = () => {
    const [level, setLevel] = useState(3);
    const [lostAtSameLevel, setlostAtSameLevel] = useState(false);
    const [resetSameLevel, setResetSameLevel] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(1);    
    const [tilesElement, setTilesElement] = useState([]);
    const [ready, setReady] = useState(false);
    const [tilesData, setTilesData] = useState([]);
    const [lost, setLost] = useState(false);
    const [gameStatusElement, setGameStatusElement] = useState();
    const [won, setWon] = useState(false);
    const [readyButton, setReadyButton] = useState(true);

    const increaseLevel = () => {
        setWon(false);
        setLevel(level + 1);
        setGameStatusElement();
    }
    const reset = () => {
        setResetSameLevel(true);
        setLevel(3);
        if (level===3){
            setlostAtSameLevel(!lostAtSameLevel);
        }
        setLost(false);
        setGameStatusElement();
    }

    // Fisher-Yates shuffle algorithm
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const readyToggle = () => {
        setReady(true);
        setReadyButton(false);
    };

    useEffect(()=>{
        setReady(false);
        // Create an array of ascending integers and shuffle them
        let tiles = [];
        tiles = Array.from(Array( level + 1 ).keys());
        tiles.shift();
        shuffle(tiles);
        setTilesData(tiles);
        setCurrentNumber(1);
    }, [level, lostAtSameLevel]);

    useEffect(()=>{
        setTilesElement(tilesData.map(x => <Tiles key={x} level={level} tiles={x} current={currentNumber} setCurrent={setCurrentNumber} ready={ready} setLost={setLost} resetSameLevel={resetSameLevel} setResetSameLevel={setResetSameLevel}></Tiles>))
    }, [ready, currentNumber, tilesData]);

    useEffect(()=>{
        if (lost) {
            setGameStatusElement(<div className='lost'>YOU LOSE! to try again, click "RESET"</div>)
        }
    }, [lost]);

    useEffect(()=>{
        if (currentNumber>level){
            setWon(true);
            setGameStatusElement(<div className='lost'>NICE! Click the "+"</div>)
        }
    }, [currentNumber]);

    return (
        <div className='game-container'>
            <div className='buttons'>
                <button  className='increase-level-button' onClick={increaseLevel} disabled={won ? false: true}>+</button>
                <button  className='reset-button' onClick={reset}>RESET</button>
            </div>       
            <div className='tiles-container'>
                {tilesElement}
            </div>           
                {gameStatusElement}    
            <div>
                <button className='ready-button' onClick={readyToggle} disabled={ready ? true: false}>READY</button>
            </div>            
        </div>        
    )
}

export default Game