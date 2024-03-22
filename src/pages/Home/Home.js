import React, { Component } from "react";
import "./Home.css";
import SearchBox from "./SearchBox";
import Spinner from "../../utility/Spinner/Spinner";
import axios from "axios";
import Cities from "../../utility/City/Cities";

class Home extends Component {
  state = {
    cities: [],
  };

  async componentDidMount() {
    const citiesUrl = `${window.apiHost}/cities/recommended`;
    console.log(citiesUrl);
    const recommendedCities = await axios.get(citiesUrl);
    this.setState({
      cities: recommendedCities.data,
    });
  }

  render() {
    if (this.state.cities.length === 0) {
      return <Spinner />;
    }

    const reCities = <Cities cities={this.state.cities}/>
    


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="home col s12">
            <div className="upper-fold">
              <SearchBox />
            </div>
          </div>
          {reCities}
        </div>
      </div>
    );
  }
}

export default Home;
