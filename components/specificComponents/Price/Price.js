

import React, { Component } from "react";

export default class Price extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Price: {this.props.blok.title}</div>
        );
    }
}