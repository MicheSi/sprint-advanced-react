import React, { Component } from 'react';
import PlayerCard from './components/PlayerCard';

import './App.css';
import Axios from 'axios';


class App extends Component {
  state = {
    player: []
  }

  componentDidMount() {
    Axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      this.setState({
        player: res.data
      })
    })
    .catch(err => {
      console.log('There is an error', err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Google Trends</h1>
        <p>June - July 2019</p>
        {this.state.player.map(player => (
          <PlayerCard
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}/>
        ))}
      </div>
    );
  }
  
}

export default App;
