import React from 'react';
import './App.css';
import DeviceManager from './component/DeviceManager'
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';

function App() {
    return (
        <div className="app">
            <HashRouter>
                <AppBar position="static">
                    <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Link to="/login">
                            <Button color="inherit">Login</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" component={DeviceManager}/>
                    <Route exact path="/login" component={null}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;