import React from 'react';
import Tile from '../Tile/Tile';
import Snake from '../Snake/Snake';
import Ladder from '../Ladder/Ladder';
import * as Utils from '../../lib/utils'
import './Board.scss';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='game'>
                <div className='board' id='board'>
                    {
                        Utils.generateTiles().map((row, rowIndex) => (
                            <div className='row' key={rowIndex}>
                                {
                                    row.map((cell, cellindex) => (
                                        <Tile cell={cell} key={cellindex}></Tile>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className='ladders'>
                    {
                        Utils.laddersArray.map((el, index) => {
                            return <Ladder data={el} key={index}></Ladder>
                        })
                    }
                </div>
                <div className='snakes'>
                    {
                        Utils.snakesArray.map((el, index) => {
                            return <Snake data={el} key={index}></Snake>
                        })
                    }
                </div>
            </div>
        );
    }

}

export default Board;
