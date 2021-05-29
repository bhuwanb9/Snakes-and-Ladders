import React from 'react';
import './Ladder.scss';
import * as Utils from '../../lib/utils'

class Ladder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            styles: {}
        }
    }

    componentDidMount() {
        this.setState({
            styles: Utils.calculateLadderStyle(this.props.data)
        })
    }

    render() {
        return (
            <div className='ladder' style={this.state.styles}></div>
        );
    }

}

export default Ladder;
