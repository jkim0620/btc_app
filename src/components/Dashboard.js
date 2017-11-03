import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      USD: {},
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
    axios
    .get('https://blockchain.info/ticker')
    .then((response) => {
      const data = response.data;
      console.log(response.data)
      this.setState({
        USD: data.USD,
      });
      console.log(this.state.USD);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        blockchain
        USD: {this.state.USD.last}
      </div>
    );
  }
}

export default Dashboard;
