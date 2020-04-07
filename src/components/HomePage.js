import React, { Component } from "react";
import '../css/homepage.css';
import annoucementlogo from '../images/fotos/announcement.png'
import AwesomeSlider from 'react-awesome-slider';
import Bbuilding from '../images/fotos/Bbuilding.jpg'
import sportcenter from '../images/fotos/sportcenter.jpg'
import 'react-awesome-slider/dist/styles.css';
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import {Link} from "react-router-dom";
import store from 'store';





const slider = (
	<AwesomeSlider animation="cubeAnimation">
	  <div data-src={Bbuilding} />
	  <div data-src={sportcenter} />
	</AwesomeSlider>
  )

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
			announcements: []
		}

		this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
	}

	componentDidMount() {
		axios.get("http://localhost:8081/announcements")
			.then(response => this.setState({
				announcements: response.data
			}))

			console.log(store.get('loggedIn'));
		
	}

	onChangeFileHandler(event) {
		this.setState({
			selectedFile: event.target.files[0],
		});
		console.log(event.target.files[0])
	}




	render() {
		//Self Image Upload
		// const divStyle = {
		//     color: 'blue',
		//     backgroundImage: 'url(' + this.state.selectedFile + ')',
		//     position: 'absolute',
		//     top: '10%',
		//     width: '100%',
		//     height: '100%',
		// };
		// console.log(this.state.selectedFile);
		// this.state.announcements ? announcements = this.state.announcements : "null";

		const { announcements } = this.state;
		const href = "/announcements/";

		if (this.state.announcements) {
			return (
				< div className="home" >
					<MainLayout />
					<div className="img" > {slider} </div>
					<div className='tablo' >
						<div className='tbl' >
							<div className="announce" >
								<img className='announcementlogo' src={annoucementlogo} />
							</div >
							<table className='hometable' >
								<tbody>
									<tr >
										<th> Content </th> <th > Date </th > </tr >
									{announcements.map((x, index) =>
										<tr className='specialtrhome' key={index} >
											<td> <Link to={href + index} > {x.text} </Link></td >
											<td> {x.date} </td></tr >
									)
									} </tbody>
							</table >

						</div> </div >



					{
						/* <div className="main">
												HELLO
											</div> */
					}


					{
						/* <div style={divStyle}>
												<input className="uploadbtn" type="file" name="file" onChange={this.onChangeFileHandler} />
											</div> */
					}
				</div>

			);
		} else {
			return (<div > No Announcements </div>)
		}


	}
}