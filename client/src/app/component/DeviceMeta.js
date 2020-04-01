import React from "react";
import './DeviceMeta.css'
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

class DeviceMeta extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let data = this.props.data || {};
        return (
            <Card className="device">
                <CardContent>
                    <div className={"status " + (data.on ? "on" : "off")}/>
                    <Chip label={"ID: " + data.id}/>
                    <Chip label={"Device: " + data.device}/>
                    <Typography variant="h6">{data.title}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default DeviceMeta;