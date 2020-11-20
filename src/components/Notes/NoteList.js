import React from 'react';
class Note extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { isChecked: this.props.note.completed }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        const { note } = this.props
        const classes = ["list-group-item", "note-list__item"]; if (this.state.isChecked) classes.push("done")
        return (
            <li className={classes.join(' ')}>
                <span className="note-list__item-name">
                    {note.title}
                </span>
                <div className="float-right">
                    <input onChange={this.handleChange} type="checkbox" className="checkbox note-list__item-checkbox" checked={this.state.isChecked} />
                </div>
            </li>
        )
    }
}

export default class NoteList extends React.Component {
    render() {
        const { notes, isLoading } = this.props
        return (
            <ul className="list-group note-list">
                {isLoading && <p>Загрузка...</p>}
                {Array.isArray(notes) && (notes.length > 0 ? notes.map(note => <Note key={note.id} note={note} />) : "Пусто...")}
            </ul>
        )
    }
}