(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function getCommits() {
    // GET /repos/:owner/:repo/commits
    var commits = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits')
    .then(function(result) { 
        return result.json();
    });
    console.log(commits);

    return Promise.all([commits])
    .then(function(resp){
        return resp[0];
    })
    .catch(function(e){
        console.error(e);
    });
}

document.addEventListener('DOMContentLoaded', function(){
    getCommits().then(function(commits) {
        commits.forEach(function(commit) {
            console.log(commit);
        });
    });

});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBnZXRDb21taXRzKCkge1xyXG4gICAgLy8gR0VUIC9yZXBvcy86b3duZXIvOnJlcG8vY29tbWl0c1xyXG4gICAgdmFyIGNvbW1pdHMgPSBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtc2VydmljZS9jb21taXRzJylcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkgeyBcclxuICAgICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coY29tbWl0cyk7XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtjb21taXRzXSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3Ape1xyXG4gICAgICAgIHJldHVybiByZXNwWzBdO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbihlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfSk7XHJcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBnZXRDb21taXRzKCkudGhlbihmdW5jdGlvbihjb21taXRzKSB7XHJcbiAgICAgICAgY29tbWl0cy5mb3JFYWNoKGZ1bmN0aW9uKGNvbW1pdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb21taXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTtcbiJdfQ==
