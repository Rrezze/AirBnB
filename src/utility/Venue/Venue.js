import React, { Component } from "react";
import { Link } from "react-router-dom";

class Venue extends Component {
  render() {
    const { id, title, location, pricePerNight, imageUrl, rating } =
      this.props.venue;
    return (
      <div className="venue col s12">
        <Link to={`/venue/${id}`}>
          <div className="image">
            <img alt="/" src={imageUrl} />
          </div>
          <div className="location-stars">
            <span className="location">{location}</span>
            <span className="rating right">
              <i class="material-icons">star</i>
              {rating}
            </span>
          </div>
          <div className="title">${title}</div>
          <div className="price-per-night">${pricePerNight}/night</div>
        </Link>
      </div>
    );
  }
}

export default Venue;
