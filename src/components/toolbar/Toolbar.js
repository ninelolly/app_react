import React from 'react';
import TaskCreate from "../task_create/TaskCreate"
import "./toolbar.scss"

export default function Toolbar(props) {
    return (
        <>
            <div className="toolbar-wrapper">
                <div className="container toolbar-container">
                    <div className="toolbar">
                        <button className="toolbar-link active">
                            <i className="fa fa-home"></i>
                            Home
                        </button>
                        <button className="toolbar__create-task">
                            <i className="fa fa-plus"></i>
                        </button>
                        <button className="toolbar-link">
                            <i class="fas fa-th-large"></i>
                             Task
                        </button>
                    </div>
                    <TaskCreate />
                </div>

            </div>
        </>
    )
}
