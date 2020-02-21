import React from "react";
import './Device.css'

class Device extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let data = this.props.data || {};
    return (
        <div className="device">
          <div className={"status " + (data.on ? "on" : "off")}/>
          <div className="id">ID: {data.id}</div>
          <div className="name">{data.name}</div >
        </div>
    )
  }
}

export default Device;