import React, { Component } from 'react'
import Venue from './Venue'
import './Venue.css'

function Venues(props){
        const venues = props.venues.map((venue, i) => {
            return(
                <div key={i} className='col s2'>
                    <Venue venue ={venue} key={i}/>
                </div>
            )
        })
        return (
            <div className='venues'>
            <h1 className='main-header-text'>{props.header}</h1>
                {venues}
            </div>
          )
  
}

export default Venues
