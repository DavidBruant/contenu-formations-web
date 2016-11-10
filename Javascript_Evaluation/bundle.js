(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getCommits;
function getCommits() {

	var url = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=380cfe95725b59cf9ea64f3e05c58c39a2be6614';

	return fetch(url).then(function (result) {
		console.log(result);
		return result.json();
	}).catch(function (error) {
		console.log(error);
	});
}

},{}],2:[function(require,module,exports){
"use strict";

var _getCommits = require('./getCommits');

var _getCommits2 = _interopRequireDefault(_getCommits);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

document.addEventListener('DOMContentLoaded', function () {

  (0, _getCommits2.default)().then(function (commits) {
    console.log(commits);
  });
});

},{"./getCommits":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZ2V0Q29tbWl0cy5qcyIsImFwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7O2tCLEFBRXdCO0FBQVQsU0FBQSxBQUFTLGFBQWEsQUFFcEM7O0tBQUksTUFBSixBQUFVLEFBRVY7O2NBQU8sQUFBTSxLQUFOLEFBQ0wsS0FBSyxVQUFBLEFBQVMsUUFBUSxBQUN0QjtVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7U0FBTyxPQUFQLEFBQU8sQUFBTyxBQUNkO0FBSkssRUFBQSxFQUFBLEFBS0wsTUFBTSxVQUFBLEFBQVMsT0FBTyxBQUN0QjtVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFQRixBQUFPLEFBU1A7Ozs7QUNmRDs7QUFFQTs7Ozs7Ozs7QUFFQSxTQUFBLEFBQVMsaUJBQVQsQUFBMEIsb0JBQW9CLFlBQVUsQUFFdkQ7OzhCQUFBLEFBQWEsS0FBSyxVQUFBLEFBQVMsU0FBUyxBQUM5QjtZQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Q7QUFGSixBQUlBO0FBTkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG4gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21taXRzKCkge1xuIFxuXHR2YXIgdXJsID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvY29tbWl0cz9hY2Nlc3NfdG9rZW49MzgwY2ZlOTU3MjViNTljZjllYTY0ZjNlMDVjNThjMzlhMmJlNjYxNCc7XG5cblx0cmV0dXJuIGZldGNoKHVybClcblx0XHQudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0Lmpzb24oKTtcblx0XHR9KVxuXHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH0pO1xuIFxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZ2V0Q29tbWl0cyBmcm9tICcuL2dldENvbW1pdHMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcblxuXHRnZXRDb21taXRzKCkudGhlbihmdW5jdGlvbihjb21taXRzKSB7XG4gICAgICAgY29uc29sZS5sb2coY29tbWl0cyk7XG4gICAgfSk7XG5cbn0pIl19
