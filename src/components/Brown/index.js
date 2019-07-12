import React, { Component } from "react";
import "./styles.css";


class Brown extends Component {
    render() {
        return (
            <div onClick={() => alert("Brown")} className="brown">Brown</div>
        )
    }
}

export default Brown;