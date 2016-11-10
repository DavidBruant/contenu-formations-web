(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _getCommits = require('./getCommits');

var _getCommits2 = _interopRequireDefault(_getCommits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

   (0, _getCommits2.default)().then(function (commits) {
      console.log(commits);
   });
});

},{"./getCommits":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getCommits;
function getCommits() {

    var url = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits';

    return fetch(url).then(function (result) {
        return result.json();
    }).catch(function (error) {
        console.log(error);
    });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL2dldENvbW1pdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQTs7Ozs7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVTs7QUFFcEQsK0JBQWEsSUFBYixDQUFrQixVQUFTLE9BQVQsRUFBa0I7QUFDakMsY0FBUSxHQUFSLENBQVksT0FBWjtBQUNGLElBRkQ7QUFJSCxDQU5EOzs7QUNKQTs7Ozs7a0JBRXdCLFU7QUFBVCxTQUFTLFVBQVQsR0FBc0I7O0FBRWpDLFFBQUksTUFBTSx1RUFBVjs7QUFFQSxXQUFPLE1BQU0sR0FBTixFQUNGLElBREUsQ0FDRyxVQUFTLE1BQVQsRUFBaUI7QUFDbkIsZUFBTyxPQUFPLElBQVAsRUFBUDtBQUNILEtBSEUsRUFJRixLQUpFLENBSUksVUFBUyxLQUFULEVBQWdCO0FBQ25CLGdCQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0gsS0FORSxDQUFQO0FBUUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBnZXRDb21taXRzIGZyb20gJy4vZ2V0Q29tbWl0cyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuXG4gICAgZ2V0Q29tbWl0cygpLnRoZW4oZnVuY3Rpb24oY29tbWl0cykge1xuICAgICAgIGNvbnNvbGUubG9nKGNvbW1pdHMpO1xuICAgIH0pO1xuXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tbWl0cygpIHtcblxuICAgIHZhciB1cmwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9GaW5hbmNpYWwtVGltZXMvcG9seWZpbGwtc2VydmljZS9jb21taXRzJztcblxuICAgIHJldHVybiBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxufVxuIl19
