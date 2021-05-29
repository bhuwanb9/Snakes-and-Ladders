import React from 'react';
import './Tile.scss';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={'tile-' + this.props.cell.num} className={'tile ' + this.props.cell.color}>
                {this.props.cell.num}
            </div>
        );
    }

}

export default Tile;
