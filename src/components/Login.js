import React, { Component } from "react";
import bilkentImage from '../images/bilkentImage.png';
import bilsportlogo from '../images/fotos/BilSport_white.png';
import "../css/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import store from "store";

const placeholders = {
    idPlaceHolder:"Id",
    passwordPlaceHolder:"Password"
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            err:false,
            placeholders
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: event.target.value });
    }

    validate = () => {
        let {idPlaceHolder,passwordPlaceHolder} = this.state.placeholders;

        if (!this.state.id && !this.state.password) {
            idPlaceHolder = "Id is required";
            passwordPlaceHolder = "Password is required";
            this.setState({placeholders:{idPlaceHolder,passwordPlaceHolder},err:true})
            return false;
        } 
        return true;
    }

    handleSubmit(event) {
        const isValid = this.validate();
        if (!isValid) {
            console.log(this.state);
        } else {
            const { history } = this.props;
            const user = {
                id: this.state.id,
                password: this.state.password,
            }

            axios.post("http://localhost:8081/login", { user })
                .then(res => {
                    if (res.status === 200) {
                        store.set('loggedIn', true);
                        history.push('/homepage');
                    }
                    console.log(res);
                });
        }




    }

    componentDidMount() {
        // this.handleSubmit();
    }

    render() {
        let {idPlaceHolder,passwordPlaceHolder} = this.state.placeholders;
        var handleChange = this.handleChange;
        var handleSubmit = this.handleSubmit;
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
                                        <input id = {!this.state.err ? "normal" : "err" }name="id" type="text" className="form-control" placeholder={idPlaceHolder} onChange={handleChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                        </div>
                                        <input id = {!this.state.err ? "normal" : "err" }name="password" type="password" className="form-control" placeholder={passwordPlaceHolder} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-secondary btn-block" onClick={handleSubmit}>LOGIN</button>
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