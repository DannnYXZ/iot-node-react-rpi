import React, {useEffect, useState} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import axios from "axios";
import {API} from "../../../config";
import TabPanel from "../TabPanel";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function DeviceTSwitch(props) {
    const [activeTab, setTab] = useState(0);
    const [data, setData] = useState({
        temperature: 24,
        pressure: 774,
        humidity: 30
    });
    useEffect(() => {
        axios.get(`${API}/devices/${props.id}`).then(res => setData(res.data));
    }, [props.id]);

    return (
        <div>
            <Tabs value={activeTab}
                  onChange={(e, index) => setTab(index)}
                  aria-label="simple tabs example"
                  variant="fullWidth">
                <Tab label="Settings"/>
            </Tabs>
            <TabPanel index={0} value={activeTab}>
                <List>
                    <ListItem>
                        <Typography variant="h6">State: </Typography>
                        <Switch
                            edge="end"
                            onChange={() => setData({...data, active: !data.active})}
                            checked={data.active}
                            inputProps={{'aria-labelledby': 'switch-list-label-bluetooth'}}
                        />
                    </ListItem>
                </List>
            </TabPanel>
        </div>
    );
}