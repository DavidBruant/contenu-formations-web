'use strict';

var Donut = React.createClass({ 
    getInitialState: function() {
        return {}
    },
    
    _getCanvasContext: function(){
        var canvas = this.refs.canvas;
        var domCanvas = React.findDOMNode(canvas);
        return domCanvas.getContext('2d');
    },
    
    componentDidMount: function() {
        var ctx = this._getCanvasContext();
        
        this.donut = new Chart(ctx).Doughnut(this.props.chartData);
    },
    
    componentWillReceiveProps: function(newProps){
        var ctx = this._getCanvasContext();
        
        if(this.props !== nextProps){
            this.donut.destroy();
            this.donut = new Chart(ctx).Doughnut(newProps.chartData);
        }
    },
    
    render: function() {
        return (
            React.createElement(
                'canvas',
                {
                    width: 400,
                    height: 400,
                    ref: 'canvas'
                }
            )
        )
    }
});
