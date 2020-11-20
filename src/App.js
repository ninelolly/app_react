import React from 'react';
import NoteList from "./components/Notes/NoteList"
import Toolbar from "./components/Toolbar"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { notes: null, isLoading: true }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    this.setState({ notes: json, isLoading: false })
                }, 500)
            })
    }

    render() {
        return (
            <div className="container main-content">
                <Toolbar />
                <NoteList notes={this.state.notes} isLoading={this.state.isLoading} />
            </div>
        )
    }
}
