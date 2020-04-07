import React, { Component } from "react";
import bilkentImage from '../images/bilkentImage.png';
import bilsportlogo from '../images/fotos/BilSport_white.png';
import "../css/register.css";
import {Link} from "react-router-dom";


class Register extends Component {

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
            <div className="regcontainer">
                <div className="bilkentsportlogo">
                            <img className="bilkentimage" src={bilkentImage} alt="bilkentImage" /> 
                </div>
                <div className="form-box">
                    <div className="header-form">
                        <div className="regimage">
                            <img className="bilkentlogo" src={bilsportlogo} alt="bilkentImage" /> 
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Name" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Surname" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Id" onChange={handleChange}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="E-mail" onChange={handleChange}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" onChange={handleChange}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="PasswordControl" onChange={handleChange}/>
                            </div>
                            <div>
                                <Link to="/register"><button type="button" className="btn btn-secondary btn-block">REGISTER</button></Link>
                                <Link to="/login"><button type="button" className="btn btn-secondary btn-block">LOGIN</button></Link>
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


export default Register;