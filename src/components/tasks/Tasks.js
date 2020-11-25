import React from 'react';
import "./tasks.scss"

class Task extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="task work">
                <label className="task__checkbox">
                    <input className="task__checkbox-real" type="checkbox" />
                    <div className="task__checkbox-fake">
                        <i className="fa fa-check" />
                    </div>
                </label>
                <span className="task-time">13:00 PM</span>
                <span className="task-name">
                    Meeting with client
            </span>
                <button className="task-remind">
                    <i className="fa fa-bell"></i>
                </button>
            </div>
        )
    }
}

export default class Tasks extends React.Component {
    render() {
        return (
            <div className="task-list">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        )
    }
}
