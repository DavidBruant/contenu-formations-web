"use strict";

var React = require('react');

module.exports = React.createClass({
    displayName: 'Directory',

    render: function () {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );

    }
})