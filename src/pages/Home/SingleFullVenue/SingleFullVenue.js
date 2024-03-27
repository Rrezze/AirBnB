import React, { Component } from 'react'
import './SingleFullVenue.css';
import axios from 'axios';

class SingleFullVenue extends Component{
   async componentDidMount(){
        const vId = this.props.match.params?.vid;
        const url = `${window.apiHost}/venue/${vId}`;
        const axiosResponse = await axios.get(url);
        const singleVenue =axiosResponse.data;
        console.log(singleVenue);
    }

    render(){
        return (
            <div>SingleFullVenue</div>
          )
    }
   
}

export default SingleFullVenue;