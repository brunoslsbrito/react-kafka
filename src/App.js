import React, {Component} from 'react';
import Messages from "./components/messages";

class App extends Component {
    render() {
        return (
            <Messages contacts={this.state.messages} />
        )
    }

    state = {
        messages: []
    };

    componentDidMount() {
        fetch('http://localhost:8888/consumer')
            .then(res => res.json())
            .then((data) => {
                this.setState({ messages: data })
            })
            .catch(console.log)
    }
}

export default App;