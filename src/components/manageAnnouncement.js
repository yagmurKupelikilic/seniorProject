import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Form, Divider, Button, Icon } from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
import FileUpload from '../FileUpload';
import '../../css/admin/manageAnnouncement.css';
import axios from "axios";
import { Link } from "react-router-dom";
import deneme from '../../images/fotos/course.jpg';



const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

export default class manageAnnouncement extends Component {
    constructor() {
        super()
        this.state = {
            date: '',
            title: '',
            content: '',
            startdate: '',
            enddate: '',
            regdate: '',
            add: false,
            edit: true,
            delete: false,
            announcements: [],
            announcement:"",
            deleted:""
            
        }
        this.btnClicked = this.btnClicked.bind();
        this.getIndex = this.getIndex.bind();   
    }

    componentDidMount() {
        axios.get("http://localhost:8081/announcements")
            .then(response => this.setState({
                announcements: response.data
            }))
            console.log("Re-rendered");
            
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    btnClicked = (e) => {
        if (e.target.id == "add") {
            this.setState({ add: true, edit: false, delete: false })
        } else if (e.target.id == "edit") {
            this.setState({ add: false, edit: true, delete: false })
        } else {
            this.setState({ add: false, edit: false, delete: true })
        }
    }

    getIndex = (e) => {
        console.log(e.target.id)
        if(this.state.add){
            //ADD
        }else if(this.state.edit){
            //EDIT
            axios.get("http://localhost:8081/announcements/"+  e.target.id)
            .then(response => this.setState({
                announcement: response.data
            }))
        }else if(this.state.delete){
            //DELETE
            console.log("DELETE")
            axios.delete("http://localhost:8081/announcements/"+ e.target.id)
            .then(response => {
                console.log(response.data);
            })
        }
        const { match } = this.props
        var str  = match.url.split('/');
        var index = parseInt(str[3]);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
    } 

    render() {
        const add = this.state;
        // this.componentRendered()
        const href = '/announcement/manage/';
        const { announcements } = this.state;
        const { match } = this.props
        console.log(this.state);
        return (
            <div style={{ marginTop: "100px", marginRight: "50px", marginLeft: "50px", backgroundColor: "white", padding: "5%", borderRadius: "1%" }}>
                <header style={{ marginBottom: "70px" }}><h2 style={{ float: "left" }}>Manage Announcement</h2>
                    <div style={{ float: "right" }}>
                        <Button primary size="big" id="add" value={this.state.add} onClick={this.btnClicked}>ADD&nbsp;&nbsp;&nbsp;&nbsp;<Icon style={{ margin: "0px" }} name="plus" /></Button>
                        <Button primary size="big" id="edit" value={this.state.edit} onClick={this.btnClicked}>EDIT&nbsp;&nbsp;&nbsp;&nbsp;<Icon style={{ margin: "0px" }} name="edit outline" /></Button>
                        <Button primary size="big" id="delete" value={this.state.delete} onClick={this.btnClicked}>DELETE&nbsp;&nbsp;&nbsp;&nbsp;<Icon style={{ margin: "0px" }} name="delete" /></Button>
                    </div>
                </header>
                <Divider />
                <MainLayout />
                {this.state.add ? <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' placeholder='Enter announcement title' onChange={this.handleChange} />
                        <DateInput
                            label="Start Date"
                            name="startdate"
                            placeholder="Date"
                            value={this.state.date}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />
                        <DateInput
                            label="End Date"
                            name="enddate"
                            placeholder="Date"
                            value={this.state.date}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <div style={{ float: "left", marginTop: "20px" }}>
                            <span>Announcement Photo</span>
                            <FileUpload />
                        </div>
                        <div style={{ float: "right", width: "100%", marginLeft: "50px" }}>
                            <Form.TextArea style={{ height: "400px" }} label='Content' placeholder='Announcement Content' />

                        </div>
                    </Form.Group>
                    <Form.Button color="blue" size="large" style={{ float: "right" }}>Submit</Form.Button>
                    <Divider style={{ marginTop: "100px" }} />
                </Form> : null}
                {

                    this.state.edit ?
                        <div>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Title' placeholder='Enter announcement title' onChange={this.handleChange} />
                                    <DateInput
                                        label="Start Date"
                                        name="startdate"
                                        placeholder="Date"
                                        value={this.state.date}
                                        iconPosition="left"
                                        onChange={this.handleChange}
                                    />
                                    <DateInput
                                        label="End Date"
                                        name="enddate"
                                        placeholder="Date"
                                        value={this.state.date}
                                        iconPosition="left"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <div style={{ float: "left", marginTop: "20px" }}>
                                        <span>Announcement Photo</span>
                                        <FileUpload />
                                    </div>
                                    <div style={{ float: "right", width: "100%", marginLeft: "50px" }}>
                                        <Form.TextArea style={{ height: "400px" }} label='Content' placeholder='Announcement Content' />

                                    </div>
                                </Form.Group>
                                <Form.Button color="blue" size="large" style={{ float: "right", marginBottom: "50px" }}>Submit</Form.Button>
                            </Form>
                            <Divider style={{ marginTop: "100px" }} />
                            <div className="general">
                                {announcements.map((x, index) =>
                                    <div className='mngannspecial' key={x.id} onClick={console.log("SADAS")} >
                                        <div style={{position:"absolute"}}><Link to={href + `${x.id}`}><span onChange={this.componentRendered}><Icon size="large" name="edit" style={{marginLeft:"5px",marginTop:"5px",color:"#1678C2"}}/></span></Link></div>
                                        <figure ><img src={deneme} style={{ width: "80%" }} /></figure>
                                        <h3 style={{margin:"0px"}}>{x.text}</h3>
                                        <p style={{marginTop:"5px" ,padding:"2%"}}>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. </p>
                                    </div>)
                                }
                            </div>
                        </div> : null
                }
                { this.state.delete ? <div className="general">
                                {announcements.map((x, index) =>
                                    <div className='mngannspecial' key={x.id} onClick={console.log("SADAS")} >
                                        <div style={{position:"absolute"}} onClick={this.getIndex}><Link to={href + `${x.id}`}><Icon id={x.id} size="big" name="delete"/></Link></div>
                                        <figure ><img src={deneme} style={{ width: "80%" }} /></figure>
                                        <h3 style={{margin:"0px"}}>{x.text}</h3>
                                        <p style={{marginTop:"5px" ,padding:"2%"}}>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. </p>
                                    </div>)
                                }
                            </div> : <div></div>
                
                }


            </div>
        )
    }
}

