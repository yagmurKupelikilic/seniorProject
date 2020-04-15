import React, { Component } from 'react'
import "../css/register.css";

class AnnouncementForm extends Component {


    constructor(props){
        super(props);
        this.state = {
           Name: '',
           Content: '',
           Image:'',
           
           placeHolders,
           err:false
        };
        this.handleChange = this.handleChange.bind(this);
     
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render () {
        console.log(this.state);
        var handleChange = this.handleChange;
          
        return (
        <div className="main">
        <div className="login">
        <div className="regcontainer">
          <div className="input-group mb-3">
                 <div className="input-group-prepend">
                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                 </div>
                 <input placeholder= "Enter announcement title" name="Name" type="text" className="form-control"  onChange={handleChange}/>
                 <input placeholder= "Enter announcement content" name="Content" type="text" className="form-control"  onChange={handleChange}/>
               <input  name="Content" type="text" className="form-control"  onChange={handleChange}/>
              </div>
 
            </div>
            </div>
            </div>
        )
    }
}

export default AnnouncementForm