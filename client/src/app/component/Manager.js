import React from "react";
import './Manager.css'
import Device from "./Device";

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDevice: 0,
      devices: [
        {
          on: false,
          id: 87136823,
          name: "BME 280"
        },
        {
          on: true,
          id: 928739283,
          name: "Pressure"
        },
        {
          on: true,
          id: 392837934,
          name: "Humidity"
        },
        {
          on: false,
          id: 43209880283,
          name: "Temperature"
        }
      ]
    }
  }

  render() {
    return (
        <div className="manager">
          <div className="topnav"></div>
          <div className="devices">
            {this.state.devices.map(e => <Device data={e}/>)}
          </div>
          <div className="viewport">

          </div>
        </div>
    )
  }
}

export default Manager;