import React, {useEffect, useState} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import axios from "axios";
import {API} from "../../../config";
import Chart from "react-google-charts";
import TabPanel from "../TabPanel";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function DeviceBME280(props) {
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
                <Tab label="Parameters"/>
                <Tab label="Settings"/>
            </Tabs>
            <TabPanel index={0} value={activeTab}>
                <Chart
                    width={800}
                    height={320}
                    chartType="Gauge"
                    loader={<CircularProgress/>}
                    data={[
                        ['Label', 'Value'],
                        ['Temperature, °C', data.temperature],
                        ['Humidity, %', data.humidity],
                        ['Pressure, mmHg', data.pressure],
                    ]}
                    options={{
                        redFrom: 90,
                        redTo: 100,
                        yellowFrom: 75,
                        yellowTo: 90,
                        minorTicks: 5,
                    }}
                    rootProps={{'data-testid': '1'}}
                />
            </TabPanel>
            <TabPanel index={1} value={activeTab}>
                <List>
                    <ListItem>
                        <Typography variant="h6">Is active: </Typography>
                        <Switch
                            edge="end"
                            onChange={() => setData({...data, active: !data.active})}
                            checked={data.active}
                            inputProps={{'aria-labelledby': 'switch-list-label-bluetooth'}}
                        />
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6">Sampling rate: </Typography>
                        <TextField
                            disabled={!data.active}
                            id="standard-number"
                            label="Seconds"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </ListItem>
                </List>
            </TabPanel>
        </div>
    );
}