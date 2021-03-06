import React from 'react';
import "./profile.scss"

export default class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div className="profile__headline">
                    <span className="profile__greeting">
                        <p className="profile__greeting-title">
                            Hello Mickle!
                        </p>
                        <p className="profile__greeting__task-quantity">
                            Today you have 9 tasks
                        </p>
                    </span>
                    <img alt="" className="profile__picture" src="./img/businessman-using-digital-tablet-while-colleague-background_107420-17056.jpg" />
                </div>
                <div className="profile__reminder">
                    <button className="btn profile__reminder-dismiss">
                        <i className="fal fa-times"></i>
                    </button>
                    <div className="profile__reminder-body">
                        <p className="profile__reminder-title">
                            Today Reminder
                        </p>
                        <p className="profile__reminder-task">
                            Meeting with client
                            <span className="profile__reminder-time">
                                13:00 PM
                            </span>
                        </p>
                    </div>
                    <div className="profile__reminder-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="61.107" height="66.578" viewBox="0 0 61.107 66.578">
                            <g id="bell_1_" data-name="bell (1)" transform="translate(-28.098 -27.599) rotate(22)">
                                <g id="Сгруппировать_10" data-name="Сгруппировать 10" transform="translate(71.968)">
                                    <path id="Контур_55" data-name="Контур 55" d="M203.382,370.683a7.821,7.821,0,0,1-7.812-7.812v-7.277a5.9,5.9,0,0,1,5.891-5.891H205.3a5.9,5.9,0,0,1,5.891,5.891v7.277A7.82,7.82,0,0,1,203.382,370.683Z" transform="translate(-195.57 -304.499)" fill="#ff52a8" />
                                    <path id="Контур_56" data-name="Контур 56" d="M215.094,20.979h-.428a5.9,5.9,0,0,1-5.891-5.891V6.1a6.1,6.1,0,1,1,12.209,0v8.984A5.9,5.9,0,0,1,215.094,20.979Z" transform="translate(-207.069)" fill="#ff52a8" />
                                </g>
                                <path id="Контур_57" data-name="Контур 57" d="M123.163,65.614H121.3A18.948,18.948,0,0,0,102.372,84.54V102.1a2.008,2.008,0,0,0,2.008,2.008h35.7a2.008,2.008,0,0,0,2.008-2.008V84.54A18.948,18.948,0,0,0,123.163,65.614Z" transform="translate(-42.452 -57.132)" fill="#feeb70" />
                                <path id="Контур_58" data-name="Контур 58" d="M98.848,347.068H60.71a7.1,7.1,0,0,1-7.092-7.092v-.56a7.1,7.1,0,0,1,7.092-7.092H98.848a7.1,7.1,0,0,1,7.092,7.092v.56A7.1,7.1,0,0,1,98.848,347.068Z" transform="translate(0 -289.365)" fill="#fef7cb" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
