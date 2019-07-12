import React, { Component } from "react";
import "./styles.css";


class Green extends Component {
    render() {
        return (
            <div onClick={() => alert("Green")} className="green">Green</div>
        )
    }
}

export default Green;