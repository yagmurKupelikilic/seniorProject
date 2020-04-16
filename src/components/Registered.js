import React, { Component } from "react";
import "../css/registered.css";
import bilkentImage from '../images/bilkentImage.png';
import bilsportlogo from '../images/fotos/BilSport_white.png';


class Registered extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    
    render() {
        
        return (
            <div className="main">
                <div className="login">
                    <div className="logcontainer">
                        <div className="bilkentsportreglogo">
                            <img className="regbilkentimage" src={bilkentImage} alt="bilkentImage" />
                        </div>
                        <div className="form-box">
                            <div className="header-form">
                                <div className="logimage">
                                    <img className="bilkentlogo" src={bilsportlogo} alt="bilkentImage" />
                                </div>
                            </div>
                           <span id="registeredText">Your registration request has been received by Admin. After the verification, you are going to be informed via e-mail,<br/> Please check your e-mail to verify.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Registered;