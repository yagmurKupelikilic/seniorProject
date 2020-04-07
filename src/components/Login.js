import React, { Component } from "react";
import bilkentImage from '../images/bilkentImage.png';
import bilsportlogo from '../images/fotos/BilSport_white.png';
import "../css/Login.css";
import {Link} from "react-router-dom";



class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            Surname:'',
            Id:'',
            Email:'',
            Password:'',
            PasswordControl:''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        console.log(this.state.value);
        var handleChange = this.handleChange;
        return (
            <div className="main">
            <div className="login">
            <div className="logcontainer">
                <div className="bilkentsportreglogo">
                            <img className="bilkentimage" src={bilkentImage} alt="bilkentImage" /> 
                </div>
                <div className="form-box">
                    <div className="header-form">
                        <div className="logimage">
                            <img className="bilkentlogo" src={bilsportlogo} alt="bilkentImage" /> 
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" onChange={handleChange}/>
                            </div>
                            <div>
                                <Link to="/login"><button type="button" className="btn btn-secondary btn-block">LOGIN</button></Link>
                                <Link to="/register"><button type="button" className="btn btn-secondary btn-block">REGISTER</button></Link>
                            </div>
                            <div className="message">
                                <div><input type="checkbox" /> Remember ME</div>
                                <div><a href="#">Forgot your password</a></div>
                            </div>
                        </form>
                        <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}


export default Login;