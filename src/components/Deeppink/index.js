import React, { Component } from "react";
import "./styles.css";


class Deeppink extends Component {
    render() {
        return (
            <div onClick={() => alert("Deeppink")} className="deeppink">Deeppink</div>
        )
    }
}

export default Deeppink;