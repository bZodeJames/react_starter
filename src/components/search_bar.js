import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Hello World'};
    }

    render() {
        return (
        <div>
            <p>&nbsp;</p>
            <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
        </div>
        );
    }
}
    
export default SearchBar; 