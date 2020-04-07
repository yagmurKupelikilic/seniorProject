import React, { Component } from "react";
import bilkentImage from '../images/bilkentImage.png';
import bilsportlogo from '../images/fotos/BilSport_white.png';
import "../css/register.css";
import {Link} from "react-router-dom";

const placeHolders = {
    namePlaceholder:'Name',
    surnamePlaceholder:'Surname',
    idPlaceholder:'Id',
    emailPlaceholder:'Email',
    passwordPlaceholder:'Password',
    passwordControlPlaceHolder:'Password Again'
}

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            Name: '',
            Surname:'',
            Id:'',
            Email:'',
            Password:'',
            PasswordControl:'',
            placeHolders,
            err:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate = () => {
        let {namePlaceholder,
        surnamePlaceholder,
        idPlaceholder, 
        emailPlaceholder, 
        passwordPlaceholder, 
        passwordControlPlaceHolder} = this.state.placeHolders;
        let {Name,Surname,Id,Email,Password,PasswordControl} = this.state;
        if(!Name && !Surname && !Id && !Email && !Password && !PasswordControl){
            namePlaceholder = "Name is required";
            surnamePlaceholder = "Surname is required";
            idPlaceholder = "Id is required";
            emailPlaceholder = "Email is required";
            passwordPlaceholder = "Password is required";
            passwordControlPlaceHolder = "Password Check is required";

            this.setState({placeHolders:{namePlaceholder,
                surnamePlaceholder,
                idPlaceholder, 
                emailPlaceholder, 
                passwordPlaceholder, 
                passwordControlPlaceHolder},err:true})
            return false;
        }else{
            if(Password != PasswordControl){
                console.log("NOT SAME");
            }
            return true;
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event){
        let isValid = this.validate();
        if(!isValid){
            console.log("NICE");
        }
    }


    render() {
        var {namePlaceholder,surnamePlaceholder,idPlaceholder, emailPlaceholder, passwordPlaceholder, passwordControlPlaceHolder} = this.state.placeHolders;
        var err = this.state;
        console.log(this.state);
        var handleChange = this.handleChange;
        console.log(namePlaceholder);
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
                                <input id={!this.state.err ? "normal" : "err"} name="Name" type="text" className="form-control" placeholder={namePlaceholder} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input id={!this.state.err ? "normal" : "err"} name="Surname" type="text" className="form-control" placeholder={surnamePlaceholder} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input id={!this.state.err ? "normal" : "err"} name="Id" type="text" className="form-control" placeholder={idPlaceholder} onChange={handleChange}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input id={!this.state.err ? "normal" : "err"} name="Email" type="text" className="form-control" placeholder={emailPlaceholder} onChange={handleChange}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input id={!this.state.err ? "normal" : "err"} name="Password" type="password" className="form-control" placeholder={passwordPlaceholder} onChange={handleChange}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input id={!this.state.err ? "normal" : "err"} name="PasswordControl" type="password" className="form-control" placeholder={passwordControlPlaceHolder} onChange={handleChange}/>
                            </div>
                            <div>
                                <button type="button" className="btn btn-secondary btn-block" onClick={this.handleSubmit}>REGISTER</button>
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