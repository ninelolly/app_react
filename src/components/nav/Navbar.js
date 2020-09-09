import React from 'react';
import "./nav.scss"
import { CSSTransition } from "react-transition-group"

class Submenu extends React.Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = { isOpen: false }
    }

    static Item(props) {
        return (<li>
            {props.children}
            <i type="button" className="fal fa-chevron-right"></i>
        </li>)
    }

    toggle() {
        this.setState(state => ({
            isOpen: !state.isOpen
        }))
    }

    render() {
        return (
            <div className={`submenu${this.state.isOpen ? " open" : ""}`}>
                <button onClick={this.toggle} className="item">
                    <span>
                        {this.props.toggle.props.children}
                    </span>
                    <i className="l-icon fal fa-chevron-right"></i>
                </button>
                <CSSTransition
                    in={this.state.isOpen}
                    timeout={200}
                    classNames="submenu"
                    unmountOnExit
                    mountOnEnter
                >
                    <ul>{this.props.children}</ul>
                </CSSTransition>
            </div>
        )
    }
}

function Item(props) {
    return (
        <button className="item">
            <span>
                {props.children}
            </span>
            <i className="fal fa-chevron-right"></i>
        </button>
    )
}

function Navbar(props) {
    return (
        <nav className="nav-bar">
            <Item>
                <i class="t-icon fas fa-calendar-check"></i>
                Files Manager
            </Item>
            <Item className="da">
                <i className="t-icon fa fa-folder"></i>
                Files Manager
            </Item>
            <Item>
                <i class="t-icon fas fa-bell"></i>
                Messanger
            </Item>
            <div className="scroll">
                <Submenu
                    toggle=
                    {<Item key="button">
                        <i className="t-icon fa fa-comments"></i>
                    Messanger
                </Item>}>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                </Submenu>
                <Submenu
                    toggle=
                    {<Item key="button">
                        <i className="t-icon fa fa-comments"></i>
                    Messanger
                </Item>}>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                </Submenu>
                <Submenu
                    toggle=
                    {<Item key="button">
                        <i className="t-icon fa fa-comments"></i>
                    Messanger
                </Item>}>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                </Submenu>
                <Submenu
                    toggle=
                    {<Item key="button">
                        <i className="t-icon fa fa-comments"></i>
                    Messanger
                </Item>}>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                    <Submenu.Item>Item 1</Submenu.Item>
                </Submenu>
            </div>
            <Item>
                <i class="t-icon fas fa-badge-check"></i>
                Files Manager
            </Item>
        </nav >
    )
}

export default Navbar
