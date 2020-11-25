import React from 'react';
import { CSSTransition } from "react-transition-group"
import "./task_create.scss"

export default class TaskCreate extends React.Component {


    render() {
        return (
            <CSSTransition
                in={true}
                unmountOnExit
                classNames="task-create"
                timeout={120}
                onEnter={() => { }}
                onExited={() => { }}
            >
                <div className="task-create">
                    <ul className="task-create__types">
                        <li className="task-create__type">
                            Personal
                        </li>
                        <li className="task-create__type">
                            Work
                        </li>
                        <li className="task-create__type">
                            Meeting
                        </li>
                        <li className="task-create__type">
                            Study
                        </li>
                        <li className="task-create__type">
                            Shopping
                        </li>
                        <li className="task-create__type">
                            Party
                        </li>
                    </ul>
                    <div className="task-create__date">
                        <button className="task-create__date-title">
                            Choose date
                            <i className="fal fa-chevron-down"></i>
                        </button>
                        <div className="task-create__date-selected">
                            Today, 19:00 - 21:00
                        </div>
                    </div>
                    <button className="task-create__btn">
                        Add task
                    </button>
                </div>
            </CSSTransition>
        )
    }
}
