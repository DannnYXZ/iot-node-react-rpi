import React from "react";

export default function TabPanel(props) {
    return (
        <div style={{display: "flex", justifyContent: "center", padding: 20}}>
            {(props.index === props.value) && props.children}
        </div>
    );
}