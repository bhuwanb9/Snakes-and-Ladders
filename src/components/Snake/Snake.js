import React from 'react';
import './Snake.scss';
import * as Utils from '../../lib/utils'

class Snake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {}
        }
    }

    componentDidMount() {
        this.setState({
            styles: Utils.calculateSnakeStyle(this.props.data)
        })
    }

    render() {
        return (
            <div className='snake' style={this.state.styles}></div>
        );
    }

}

export default Snake;
