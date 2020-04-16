import React, { Component, Fragment } from "react";
import '../css/mainLayout.css';
import bilkentuniversity from '../images/fotos/bilkentuniversity.png'
import 'react-awesome-slider/dist/styles.css';
import bilkentImage from '../images/bilkentImage.png';
import { Link } from "react-router-dom";
import { Icon, Button } from 'semantic-ui-react';
import store from "store";
import { Menu, Dropdown } from "semantic-ui-react";

function ElementList(props) {
    const element = props.elements;
    const listItems = element.map((element) =>
        <li key={element.toLowerCase()}>
            <Link to={element.toLowerCase()} className="a">{element}</Link>
            {
                element.toLowerCase() == "tournaments" ?
                    // <Icon name="angle down" /> +
                    <div className="dropdiv">{dropdown}</div> : ""
            }
        </li>
    );
    return (
        <ul className="menu">{listItems}</ul>
    );
}

const options = [
    { key: 1, text: 'This is a super long item', value: 1 },
    { key: 2, text: 'Dropdown direction can help', value: 2 },
    { key: 3, text: 'Items are kept within view', value: 3 },
]

const dropdown = (
    <ul className="dropdown">
        <li>
            {/* <Icon name="futbol" /> */}
            <a href="/tournaments/football">Football Tournament</a>
        </li>
        <li>
            {/* <Icon name="basketball ball" />  */}
            <a href="/tournaments/football">Basketball Tournament</a>

        </li>
        <li>
            {/* <Icon name="volleyball ball" /> */}
            <a href="/tournaments/football">Volleyball Tournament</a>
        </li>
        <li>
            {/* <Icon name="volleyball ball" /> */}
            <a href="/tournaments/football">Racket Sports Tournament</a>
        </li>


    </ul>);

const elements = ["Courses", "Reservations", "Tournaments", "Announcements"];

class MainLayout extends Component {
    constructor() {
        super();
        this.state = {
            status: "",
            tag: ""
        }

    }

    componentDidMount() {
        const status = store.get("status");
        this.setState({
            status: status,
            tag: status
        })
    }

    render() {
        const { status, tag } = this.state;

        return (
            <div>
                <div className="megamenu">
                    <div className="container">
                        {/* <img className="site-logo2" src={bilkentuniversity} /> */}
                        <Link to="/homepage"><img className="site-logo" src={bilkentImage} /></Link>
                        <ElementList elements={elements} />
                        <h2 className="myAccount">{tag}</h2> 
                        {status == "admin" ?
                            <div className="adminPanel">
                                <ul>
                                    <li>Manage Announcements</li>
                                    <li>Manage Reservations</li>
                                    <li>Manage Tournaments</li>
                                    <li>Manage Accounts</li>
                                    <li>Manage Appointment</li>
                                    <li>Authorize Staff</li>
                                </ul>
                            </div> : <div></div>
                        }
                    </div>

                </div>

            </div>
        )
    }
}

export default MainLayout;