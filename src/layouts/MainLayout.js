import React, { Component, Fragment } from "react";
import '../css/mainLayout.css';
import bilkentuniversity from '../images/fotos/bilkentuniversity.png'
import 'react-awesome-slider/dist/styles.css';
import bilkentImage from '../images/bilkentImage.png';
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

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

const dropdown = (
    <ul className="dropdown">
        <li>
            <Icon name="futbol" /><a href="/tournaments/football">Football</a>
        </li>
        <li>
            <Icon name="basketball ball" /><a href="/tournaments/football">Basketball</a>

        </li>
        <li>
            <Icon name="volleyball ball" /><a href="/tournaments/football">Volleyball</a>
        </li>
        <li>
        <Icon name="volleyball ball" /><a href="/tournaments/football">Volleyball</a>
        </li>
        <li>
        <Icon name="volleyball ball" /><a href="/tournaments/football">Volleyball</a>
        </li>

    </ul>);

const elements = ["Courses", "Reservations", "Tournaments", "Announcements"];

class MainLayout extends Component {
    constructor() {
        super();

    }

    render() {

        return (
            <div>
                <div className="megamenu">
                    <div className="container">
                        {/* <img className="site-logo2" src={bilkentuniversity} /> */}
                        <Link to="/homepage"><img className="site-logo" src={bilkentImage} /></Link>
                        <ElementList elements={elements} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainLayout;