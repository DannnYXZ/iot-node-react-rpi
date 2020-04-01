import DeviceBME280 from "./device/DeviceBME280";
import React from "react";
import DeviceTSwitch from "./device/DeviceTSwitch";

export default function DeviceProvider(props) {
    let model = props?.device;
    if (model === "BME280") return <DeviceBME280 {...props}/>;
    if (model === "T-SWITCH") return <DeviceTSwitch {...props}/>;
    return null;
}