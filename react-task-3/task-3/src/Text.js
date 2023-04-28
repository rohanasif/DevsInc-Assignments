import React from 'react';

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "red" }
    }
    render() {
        return <h2>I am a {this.state.color} car</h2>;
    }

}

export default Text;