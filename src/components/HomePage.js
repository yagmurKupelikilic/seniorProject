import React, { Component } from "react";
import '../css/homepage.css';
import annoucementlogo from '../images/fotos/announcement.png'
import AwesomeSlider from 'react-awesome-slider';
import Bbuilding from '../images/fotos/Bbuilding.jpg'
import sportcenter from '../images/dormitorySportsHall.jpeg';
import 'react-awesome-slider/dist/styles.css';
import bilkentAmblem from '../images/bilkentUniLogo.png';
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import store from 'store';
import sportCenterIcon from "../images/sportcenter.png"
import { Icon } from 'semantic-ui-react'
import { SocialMediaIconsReact } from 'social-media-icons-react';


var Carousel = require('react-responsive-carousel').Carousel;

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

	}

	onChange(e) {
	}

	onClickItem(e) {
	}

	onClickThumb(e) {
	}

	onChangeFileHandler(event) {
		this.setState({
			selectedFile: event.target.files[0],
		});
		console.log(event.target.files[0])
	}

	onClick = (e) => {
	}
	render() {
		
		const { announcements } = this.state;
		const href = "/announcements/";
		const status = store.get("status");
		if (status == "admin") {
			if (this.state.announcements) {
				return (
					< div className="home" >
						
						<MainLayout />
						<div className="main-navbar">
							<img className="bilAmblem" src={bilkentAmblem} />
							<div style={{ float: "right" }}>
								<ul id="ul">
									<li style={{ width: "300px" }}>
										<a style={{ height: "110px" }}>
											<div style={{ float: "left", display: "block" }}>
												<p style={{ float: "right", marginTop: "28px", fontSize: "28px" }}>Sport Halls<Icon name="angle double down" /></p>
												<img style={{ float: "left", width: "80px" }} className="sportIcon" src={sportCenterIcon} />
											</div>
										</a>
									</li>
									<li style={{ paddingTop: "39px" }}><a>Gallery</a></li>
									<li style={{ paddingTop: "39px" }}><a>About</a></li>
								</ul>
							</div>
	
						</div>
						<div className="img" >
							<Carousel width="100%"	autoPlay={true} infiniteLoop={true} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb}>
								<div>
									<img src={Bbuilding} />
									<p className="legend">Bilkent B Building</p>
								</div>
								<div>
									<img src={sportcenter} />
									<p className="legend">Main Campus Sport Center</p>
								</div>
							</Carousel>
						</div>
						<div className="hmpAnnounce">
							{/* <div className="announce" >
							<img className='announcementlogo' src={annoucementlogo} />
						</div > */}
							<div className="hmpAnnounceTable">
								{/* <table className='table'>
								<tbody>
									<tr> */}
								{/* <th>Image</th> <th> Content </th> <th > Date </th > </tr > */}
								<h2>Announcements</h2>
								{announcements.map((x, index) =>
									x.id < 6 ?
										<Link to={href + index}>
											<div className='specialtr' style={{ width: "20%", margin: "0px 40px 0px 40px" }} key={x.id}>
												<h3 style={{ margin: "20px" }}>{x.text}</h3>
												<figure className="figuree"><img src={Bbuilding} /></figure>
	
												<p style={{ height: "20%" }}>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. </p>
											</div>
										</Link>
										: <div></div>
								)
								}
								{/* </tbody> */}
								{/* </table > */}
							</div>							
						</div>
						<div className="hmpAnnounce">

						<div className="hmpAnnounceTable">
								{/* <table className='table'>
								<tbody>
									<tr> */}
								{/* <th>Image</th> <th> Content </th> <th > Date </th > </tr > */}
								<h2>Events</h2>
								{announcements.map((x, index) =>
									x.id < 6 ?
										<Link to={href + index}>
											<div className='specialtr' style={{ width: "20%", margin: "0px 40px 0px 40px" }} key={x.id}>
												<h3 style={{ margin: "20px" }}>{x.text}</h3>
												<figure className="figuree"><img src={Bbuilding} /></figure>
	
												<p style={{ height: "20%" }}>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. </p>
											</div>
										</Link>
										: <div></div>
								)
								}
								{/* </tbody> */}
								{/* </table > */}
							</div>
							</div>
						<footer style={{ textAlign:"center", width: "100%", paddingTop: "30px", paddingBottom: "30px", marginBottom: "50px", marginTop: "100px", backgroundColor: "#dadce8" }}>
								<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="50%" url="https://twitter.com/BilkentUniv" size="60" />&nbsp;&nbsp;&nbsp;
								<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,90,223,1)" iconSize="5" roundness="50%" url="https://tr-tr.facebook.com/pages/Bilkent-Yurtlar-Spor-Salonu/277203525641805" size="60" />&nbsp;&nbsp;&nbsp;
								<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(251,31,0,1)" iconSize="5" roundness="50%" url="https://www.youtube.com/user/BilkentUniversitesi" size="60" />&nbsp;&nbsp;&nbsp;
								<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(248,87,0,1)" iconSize="5" roundness="50%" url="http://instagram.com/bilkentuniv" size="60" />
							</footer>
							<p class="copyright" style={{marginBottom:"50px"}}>Copyright ©  Bilkent Üniversitesi. All Rights Reserved</p>
						{/* <div className='tablo' >
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
	
							</div> </div > */}
	
	
	
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
		}else{
		if (this.state.announcements) {
			return (
				< div className="home" >
					<MainLayout />
					<div className="main-navbar">
						<img className="bilAmblem" src={bilkentAmblem} />
						<div style={{ float: "right" }}>
							<ul id="ul">
								<li style={{ width: "300px" }}>
									<a style={{ height: "110px" }}>
										<div style={{ float: "left", display: "block" }}>
											<p style={{ float: "right", marginTop: "28px", fontSize: "28px" }}>Sport Halls<Icon name="angle double down" /></p>
											<img style={{ float: "left", width: "80px" }} className="sportIcon" src={sportCenterIcon} />
										</div>
									</a>
								</li>
								<li style={{ paddingTop: "39px" }}><a>Gallery</a></li>
								<li style={{ paddingTop: "39px" }}><a>About</a></li>
							</ul>
						</div>

					</div>
					<div className="img" >
						<Carousel width="100%" autoPlay={true} infiniteLoop={true} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb}>
							<div>
								<img src={Bbuilding} />
								<p className="legend">Bilkent B Building</p>
							</div>
							<div>
								<img src={sportcenter} />
								<p className="legend">Main Campus Sport Center</p>
							</div>
						</Carousel>
					</div>
					<div className="hmpAnnounce">
						{/* <div className="announce" >
                        <img className='announcementlogo' src={annoucementlogo} />
                    </div > */}
						<div className="hmpAnnounceTable">
							{/* <table className='table'>
                            <tbody>
                                <tr> */}
							{/* <th>Image</th> <th> Content </th> <th > Date </th > </tr > */}
							{announcements.map((x, index) =>
								x.id < 6 ?
									<Link to={href + index}>
										<div className='specialtr' style={{ width: "20%", margin: "0px 40px 0px 40px" }} key={x.id}>
											<h3 style={{ margin: "20px" }}>{x.text}</h3>
											<figure className="figuree"><img src={Bbuilding} /></figure>

											<p style={{ height: "20%" }}>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. </p>
										</div>
									</Link>
									: <div></div>
							)
							}
							{/* </tbody> */}
							{/* </table > */}
						</div>
						<footer style={{ width: "100%", paddingTop: "30px", paddingBottom: "30px", marginBottom: "50px", marginTop: "100px", backgroundColor: "#dadce8" }}>
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="50%" url="https://twitter.com/BilkentUniv" size="60" />&nbsp;&nbsp;&nbsp;
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,90,223,1)" iconSize="5" roundness="50%" url="https://tr-tr.facebook.com/pages/Bilkent-Yurtlar-Spor-Salonu/277203525641805" size="60" />&nbsp;&nbsp;&nbsp;
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(251,31,0,1)" iconSize="5" roundness="50%" url="https://www.youtube.com/user/BilkentUniversitesi" size="60" />&nbsp;&nbsp;&nbsp;
							<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(248,87,0,1)" iconSize="5" roundness="50%" url="http://instagram.com/bilkentuniv" size="60" />
						</footer>
						<p class="copyright" style={{marginBottom:"50px"}}>Copyright ©  Bilkent Üniversitesi. All Rights Reserved</p>
					</div>
					{/* <div className='tablo' >
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

						</div> </div > */}



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
}