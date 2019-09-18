import React, { Component } from 'react';

class Users extends Component {
    state = {
        name: 'John'
    }
    changeName = () => {
        this.setState({
            name: 'John1'
        })
    }
    stateChangeFromInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
                <div>
                <br /> <br />
                <input type="text" onChange={this.stateChangeFromInput} value={this.state.name}/>
                    <button onClick={this.changeName}>Change state</button>
                    <br /> <br />
                    <div>{this.state.name}</div>
                </div>
                )
    }
}

export default Users;
