"use strict";

/*var React = require('react');

var readdir = require('./files');
var Directory = require('./Directory');*/

var state = {
    files: []
};

function render(){
    React.render(React.createElement(Application, {
        files: state.files,
        onUserChoosePath: function(newPath){
            readdirRec(newPath)
                .then(function(files){
                    state.files = files
                    render();
                })

        }
    }), document.body);
}


document.addEventListener('DOMContentLoaded', function(){
    readdir('.')
        .then(function(files){
            console.log('files', files);
            state.files = files;
            render()
        })
});



// Application.js

React.createClass({
    
    render: function(){
        var self = this;
        
        
        React.createElement(
            'input'
            {
                type: "text",
                onChange: function(e){
                    self.props.onUserChoosePath(e.target.value);
                },
                // defaultValue: ''

            }

        )

        
    }
    
})