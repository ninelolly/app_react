import React from 'react';
import Profile from "./components/profile/Porofile"
import Tasks from "./components/tasks/Tasks"
import Toolbar from "./components/toolbar/Toolbar"

export default class App extends React.Component {
    render() {
        return (
            <div className="wrapper container">
                <Profile />
                <Tasks />
                <Toolbar />
            </div>
        )
    }
}
