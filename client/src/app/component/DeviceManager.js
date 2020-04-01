import React, {useEffect, useState} from "react";
import './DeviceManager.css'
import DeviceMeta from "./DeviceMeta";
import axios from "axios";
import {API} from "../../config";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Input, Paper} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeviceProvider from "./DeviceProvider";

export default function DeviceManager() {
    const [selectedDevice, setSelectedDevice] = useState(0);
    const [devices, setDevices] = useState([]);
    const [addingDevice, setAddingDevice] = useState(false);
    useEffect(() => {
        axios.get(`${API}/devices`).then(res => setDevices(res.data));
    }, [false]);

    return (
        <div className="manager">
            <div className="devices">
                <List>
                    {devices.map((e, i) =>
                        <ListItem button selected={i === selectedDevice}
                                  onClick={() => setSelectedDevice(i)}
                                  style={{paddingLeft: 8, paddingRight: 8}}>
                            <DeviceMeta data={e}/>
                        </ListItem>)}
                </List>
                <Fab color="secondary" aria-label="add" onClick={() => setAddingDevice(true)}>
                    <AddIcon/>
                </Fab>
                <div hidden={addingDevice}>
                    <Paper height={100}>
                        <TextField id="outlined-basic" label="DeviceMeta ID" variant="outlined"/>
                        <Button color="primary">SUBMIT</Button>
                    </Paper>
                </div>
            </div>
            <div className="viewport">
                <DeviceProvider {...devices[selectedDevice]}/>
            </div>
        </div>
    )
}