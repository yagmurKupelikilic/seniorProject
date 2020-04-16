import React, { Component } from "react";
import bilkentImage from '../images/bilkentImage.png';
import bilsportlogo from '../images/fotos/BilSport_white.png';
import "../css/register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const placeHolders = {
    namePlaceholder: 'Name',
    surnamePlaceholder: 'Surname',
    idPlaceholder: 'Id',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    passwordControlPlaceHolder: 'Password Again',
    statusPlaceHolder: "Status"
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Surname: '',
            Id: '',
            Email: '',
            Password: '',
            PasswordControl: '',
            Checkbox: false,
            placeHolders,
            Status: "Status",
            err: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkBool = this.checkBool.bind(this);
        this.chooseStatus = this.chooseStatus.bind(this);
    }


    validate = () => {
        let { namePlaceholder,
            surnamePlaceholder,
            idPlaceholder,
            emailPlaceholder,
            passwordPlaceholder,
            passwordControlPlaceHolder,statusPlaceHolder} = this.state.placeHolders;
        let { Name, Surname, Id, Email, Password, PasswordControl, Status } = this.state;
        if (!Name && !Surname && !Id && !Email && !Password && !PasswordControl && Status == "Status") {
            namePlaceholder = "Name is required";
            surnamePlaceholder = "Surname is required";
            idPlaceholder = "Id is required";
            emailPlaceholder = "Email is required";
            passwordPlaceholder = "Password is required";
            passwordControlPlaceHolder = "Password Check is required";
            statusPlaceHolder = "Status is required";
            this.setState({
                placeHolders: {
                    namePlaceholder,
                    surnamePlaceholder,
                    idPlaceholder,
                    emailPlaceholder,
                    passwordPlaceholder,
                    passwordControlPlaceHolder,
                    statusPlaceHolder
                }, err: true
            })
            return false;
        } else {
            if (Password != PasswordControl) {
                
                passwordPlaceholder = "Passwords are not same!!";
                passwordControlPlaceHolder = "Passwords are not same!!";
                this.setState({ placeHolders: { passwordPlaceholder, passwordControlPlaceHolder }, err: true })
                return false
            }
            return true;
        }
    }

    checkBool(e) {
        let check = this.state.Checkbox;
        check = check ? false : true;
        console.log(check);
        this.setState({ [e.target.name]: check })
    }

    handleChange(e) {
        console.log(event.target.value);
        this.setState({ [e.target.name]: event.target.value });
    }

    handleSubmit(event) {
        let isValid = this.validate();
        if (!isValid) {
            console.log("NICE");
        } else {
            const { history } = this.props;
            const user = {
                name: this.state.Name,
                surname: this.state.Surname,
                bilkentId: this.state.Id,
                email: this.state.Email,
                password: this.state.Password,
                status:this.state.status
            }
            axios.post("http://localhost:8081/register", {
                name: this.state.Name,
                surname: this.state.Surname,
                bilkentId: this.state.Id,
                email: this.state.Email,
                password: this.state.Password,
                status:this.state.status
            })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res);
                        history.push('/registered');
                    }
                })
        }
    }

    chooseStatus(e) {
        this.setState({Status:e.target.value})
        
    }

    render() {
        var { namePlaceholder, surnamePlaceholder, idPlaceholder, emailPlaceholder, passwordPlaceholder, passwordControlPlaceHolder,statusPlaceHolder } = this.state.placeHolders;
        console.log(this.state);
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
                                        <input id={!this.state.err ? "normal" : "err"} name="Id" type="text" className="form-control" placeholder={idPlaceholder} onChange={handleChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fa fa-user"></i></span>
                                        </div>
                                        <input id={!this.state.err ? "normal" : "err"} name="Email" type="text" className="form-control" placeholder={emailPlaceholder} onChange={handleChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                        </div>
                                        <input id={!this.state.err ? "normal" : "err"} name="Password" type="password" className="form-control" placeholder={passwordPlaceholder} onChange={handleChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                        </div>
                                        <input id={!this.state.err ? "normal" : "err"} name="PasswordControl" type="password" className="form-control" placeholder={passwordControlPlaceHolder} onChange={handleChange} />
                                    </div>
                                    {/* <div>
                                    

                                    </div> */}

                                    
<div class="dropdown">
                                        <div class="dropdown-menu">
                                            <label for="cars">Choose a car:</label>

                                            <select id="cars" value={this.state.Status} onChange={this.chooseStatus}>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <select id={!this.state.err ? "status" : "err"} class="form-control" value={this.state.Status} placeholder={statusPlaceHolder} onChange={this.chooseStatus}>
                                                <option class="form-control" value="placeholder">{statusPlaceHolder}</option>
                                                <option class="form-control" value="student">Student</option>
                                                <option class="form-control" value="academic">Academic</option>
                                                <option class="form-control" value="staff">Staff</option>
                                                <option class="form-control" value="admin">Admin</option>
                                            </select>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-secondary btn-block" onClick={this.handleSubmit}>REGISTER</button>
                                        <Link to="/login"><button type="button" className="btn btn-secondary btn-block">LOGIN</button></Link>
                                    </div>
                                    <div className="message">
                                        <div><input type="checkbox"name="Checkbox" onChange={this.checkBool} /><p id="forget" className={!this.state.Checkbox ? "err" : ""}>Remember ME</p></div>
                                        <div><a href="#" >Forgot your password</a></div>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Register;