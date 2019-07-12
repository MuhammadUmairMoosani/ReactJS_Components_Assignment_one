import React, { Component } from "react";
import "./styles.css";


class Orange extends Component {
    render() {
        return (
            <div onClick={() => alert("Orange")} className="orange">Orange</div>
        )
    }
}

export default Orange;