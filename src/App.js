import './App.css';
import React, { Component } from 'react'

class App extends Component {

  state = {
    location: "",
    parkingSpots: 0,
    truckStops: []
  }

  handleChange = (event) => {
      this.setState({
       [event.target.name] : event.target.value 

      })
      console.log(event.target.name)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newTruckStop = {
      location: this.state.location,
      parkingSpots: this.state.parkingSpots
    }
    this.setState({
      truckStops: [...this.state.truckStops, {newTruckStop}],
      // location: "",
      // parkingSpots: 0
    })
  }

  showTruckStops = () => {
    return this.state.truckStops.map(truckStop => {
      return <li>
        <p>Location : {truckStop.location}</p>
        <p>Parking Spots : {truckStop.parkingSpots}</p>
      </li>
    })
  }

  render() {
    return (
      <div>
        <h1>Truck Stop App</h1>
        <form onSubmit={this.handleSubmit}>
          <label >Location</label>
          <input 
            type="text" 
            name="location" 
            value={this.state.location}
            onChange={this.handleChange}
          />
          <label >Number of Parking Spots</label>
          <input 
            type='number'
            name='parkingSpots'
            value={this.state.parkingSpots}  
            onChange={this.handleChange}   
          />
          <button type='submit'>Submit </button>
        </form>

      <ul>
        {this.showTruckStops()}
      </ul>

      </div>
    )
  }
}


export default App;
