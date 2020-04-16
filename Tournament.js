import React, { Component } from 'react';
import MainLayout from '../layouts/MainLayout';
import "../css/tournaments.css";
import basketbol from '../images/sporticons/basketball.png'
import futbol from '../images/sporticons/futboll.png'
import voleybol from '../images/sporticons/voleybol.png'
import racket from '../images/sporticons/racket.png'

const images = [
    {
        photo: basketbol,
        name: "Basketball"
    },
    {
        photo: futbol,
        name: "Football"

    },
    {
        photo: voleybol,
        name: "Volleyball"
    },
    {
        photo: racket,
        name: "Racket"
    }
];

class Tournament extends Component {
    render() {
        return (
            <div>
                <MainLayout />
                <div className="tourmain">
                    <ul className="imgUl">
                        {
                            images.map((x, index) =>
                                <li className="item" key={index}>
                                        <img src={x.photo} key={index} className="deneme" />
                                        <span>{x.name}</span>
                                </li>
                            )
                        }
                    </ul>

                    {/* <img className='basketbol' src={basketbol} />
                    <img className='futbol' src={futbol} />
                    <img className='voleybol' src={voleybol} />
                    <img className='racket' src={racket} /> */}
                </div>
            </div>
        );
    }
}

export default Tournament;