(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getCommits;
function getCommits() {
	var commits = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits').then(function (resp) {
		return resp.json();
	});
	return commits;
};

},{}],2:[function(require,module,exports){
"use strict";

var _getCommits = require('./getCommits');

var _getCommits2 = _interopRequireDefault(_getCommits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

	(0, _getCommits2.default)().then(function (commits) {
		console.log(commits);
	});
});

},{"./getCommits":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvZ2V0Q29tbWl0cy5qcyIsImFwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQXdCLFU7QUFBVCxTQUFTLFVBQVQsR0FBcUI7QUFDbkMsS0FBTSxVQUFVLE1BQU0sdUVBQU4sRUFDWCxJQURXLENBQ04sZ0JBQVE7QUFDYixTQUFPLEtBQUssSUFBTCxFQUFQO0FBQ0EsRUFIVyxDQUFoQjtBQUlBLFFBQU8sT0FBUDtBQUNBOzs7QUNORDs7QUFFQTs7Ozs7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSzs7QUFFbEQsNkJBQ0MsSUFERCxDQUNNLG1CQUFVO0FBQ2YsVUFBUSxHQUFSLENBQVksT0FBWjtBQUNBLEVBSEQ7QUFJQSxDQU5EIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbW1pdHMoKXtcblx0Y29uc3QgY29tbWl0cyA9IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlL2NvbW1pdHMnKVxuXHRcdFx0XHRcdC50aGVuKHJlc3AgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3AuanNvbigpO1xuXHRcdFx0XHRcdH0pO1xuXHRyZXR1cm4gY29tbWl0c1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGdldENvbW1pdHMgZnJvbSAnLi9nZXRDb21taXRzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+e1xuXHRcblx0Z2V0Q29tbWl0cygpXG5cdC50aGVuKGNvbW1pdHMgPT57XG5cdFx0Y29uc29sZS5sb2coY29tbWl0cyk7XG5cdH0pO1xufSk7Il19
