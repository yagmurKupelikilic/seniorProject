import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout'
import annoucementlogo from '../images/fotos/announcement.png'
import axios from "axios";
import "../css/announcement.css";
import { Link } from "react-router-dom";
import deneme from '../images/fotos/Bbuilding.jpg';
import store from 'store';

export default class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
            announcement: [],
            bool: false
        }
        this.getAnnouncement = this.getAnnouncement.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8081/announcements")
            .then(response => this.setState({
                announcements: response.data
            }))

    }

    // componentDidUpdate(prevState){
    //     if (prevState.bool) {
    //         axios.get("http://localhost:8081/announcements/" + this.props.location.pathname.split("/")[2])
    //             .then(response => this.setState({
    //                 announcement: response.data
    //             }))
    //         console.log(this.state.announcement);

    //     }
    // }

    getAnnouncement() {
        this.setState({
            bool: true
        });
    }

    render() {
        const status = store.get("status");
        const { announcements } = this.state;
        const href = "/announcements/";
        console.log(status);
        if (status == "admin") {
            return (
                <div>
                    <MainLayout />
                    <div className="announcement">
                        <p>ADMIN</p>
                        {/* <div className="announce" >
                        <img className='announcementlogo' src={annoucementlogo} />
                    </div > */}
                        <div className="announceTable">
                            {/* <table className='table'>
                            <tbody>
                                <tr> */}
                            {/* <th>Image</th> <th> Content </th> <th > Date </th > </tr > */}
                            {announcements.map((x, index) =>
                                <div className='specialtr' key={index} onClick={console.log("SADAS")} >
                                    <figure className="figuree"><img src={deneme} /></figure>
                                    <h3><Link to={href + index}>{x.text}</Link></h3>
                                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. </p>
                                </div>
                            )
                            }
                            {/* </tbody> */}
                            {/* </table > */}
                        </div>

                    </div>
                </div>
            )
        } else {



            return (
                <div>
                    <MainLayout />
                    <div className="announcement">
                        {/* <div className="announce" >
                        <img className='announcementlogo' src={annoucementlogo} />
                    </div > */}
                        <div className="announceTable">
                            {/* <table className='table'>
                            <tbody>
                                <tr> */}
                            {/* <th>Image</th> <th> Content </th> <th > Date </th > </tr > */}
                            {announcements.map((x, index) =>
                                <div className='specialtr' key={index} onClick={console.log("SADAS")} >
                                    <figure className="figuree"><img src={deneme} /></figure>
                                    <h3><Link to={href + index}>{x.text}</Link></h3>
                                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. </p>
                                </div>
                            )
                            }
                            {/* </tbody> */}
                            {/* </table > */}
                        </div>

                    </div>
                </div>
            )
        }
    }
}
