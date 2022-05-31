import React, { useEffect, useState} from 'react';
import lossSound from '../Sounds/loss.wav';
import dubSound from '../Sounds/win.wav';
import correctSound from '../Sounds/correct.wav';

const Tiles = (props) => {
    
    const level = props.level;
    const tiles = props.tiles;
    const ready = props.ready;
    const resetSameLevel = props.resetSameLevel;
    
    const [placeholder, setPlaceholder] = useState(false); 

    const current = props.current;
    const setCurrent = props.setCurrent;

    const playLoss = () => {
        new Audio(lossSound).play();
    }

    const playDub = () => {
        new Audio(dubSound).play();
    }

    const playCorrect = () => {
        new Audio(correctSound).play();
    }

    useEffect(() => {
        tiles >= current ? setPlaceholder(false): setPlaceholder(true);
    }, [level]);    

    useEffect(()=>{
        if(resetSameLevel) {
            setPlaceholder(false);
            props.setResetSameLevel(false);
        }
    }, [resetSameLevel])
    
    const checkCorrect = (e) => {      
        if (e.target.id == current && current==level) {
            playDub();
            placeholder ? setPlaceholder(true): setPlaceholder(true);
            setCurrent(current + 1);
        } else if  (e.target.id == current) {
            playCorrect();
            placeholder ? setPlaceholder(true): setPlaceholder(true);
            setCurrent(current + 1);   
        }
        else {
            playLoss();
            props.setLost(true);
        }
    }
    return (
        <button className={`tiles ${placeholder ? 'clicked': null} ${ready ? 'ready-tiles' : null}`} disabled={ready ? (placeholder ? true: false): true} onClick={(e)=>checkCorrect(e)} id={tiles}>{tiles}</button>
    )
}

export default Tiles