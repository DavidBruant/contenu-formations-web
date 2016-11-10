(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// import getContributors from './getContributors';

var _getCommits = require('./getCommits');

var _getCommits2 = _interopRequireDefault(_getCommits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

    // getContributors().then(function (contributors) {
    //     var totalCommits = 0;
    //
    //     contributors.forEach(function (contributor) {
    //         totalCommits += contributor.contributions;
    //     });
    // });

    (0, _getCommits2.default)().then(function (commits) {
        console.log(commits);
    });
});

},{"./getCommits":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getContributors;
function fetchCommitUrl(page) {
    var url = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=ddd6d8c4072452e98600552370fc6551815f2709&?page=' + page + '&per_page=100';
    return fetch(url).then(function (result) {
        return result.json();
    });
}

function getContributors() {
    // var totalFetches = Math.ceil(totalCommits / 100);
    var fetchPromises = [];

    for (var i = 1; i <= 3; i++) {
        fetchPromises.push(fetchCommitUrl(i));
    }

    return Promise.all(fetchPromises).then(function (results) {
        return [].concat.apply([], results);
    }).catch(function (error) {
        console.log(error);
    });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL2dldENvbW1pdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWEsSUFBYixDQUFrQixVQUFTLE9BQVQsRUFBa0I7QUFDaEMsZ0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDSCxLQUZEO0FBSUgsQ0FkRDs7O0FDTEE7Ozs7O2tCQVN3QixlO0FBUHhCLFNBQVMsY0FBVCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQixRQUFJLE1BQU0sdUlBQXNJLElBQXRJLEdBQTRJLGVBQXRKO0FBQ0EsV0FBTyxNQUFNLEdBQU4sRUFBVyxJQUFYLENBQWdCLFVBQVMsTUFBVCxFQUFpQjtBQUNwQyxlQUFPLE9BQU8sSUFBUCxFQUFQO0FBQ0gsS0FGTSxDQUFQO0FBR0g7O0FBRWMsU0FBUyxlQUFULEdBQTJCO0FBQ3RDO0FBQ0EsUUFBSSxnQkFBZ0IsRUFBcEI7O0FBRUEsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixLQUFLLENBQXJCLEVBQXdCLEdBQXhCLEVBQTZCO0FBQ3pCLHNCQUFjLElBQWQsQ0FBbUIsZUFBZSxDQUFmLENBQW5CO0FBQ0g7O0FBRUQsV0FBTyxRQUFRLEdBQVIsQ0FBWSxhQUFaLEVBQ0YsSUFERSxDQUNHLFVBQVMsT0FBVCxFQUFrQjtBQUNwQixlQUFPLEdBQUcsTUFBSCxDQUFVLEtBQVYsQ0FBZ0IsRUFBaEIsRUFBb0IsT0FBcEIsQ0FBUDtBQUNILEtBSEUsRUFJRixLQUpFLENBSUksVUFBUyxLQUFULEVBQWdCO0FBQ25CLGdCQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0gsS0FORSxDQUFQO0FBUUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGltcG9ydCBnZXRDb250cmlidXRvcnMgZnJvbSAnLi9nZXRDb250cmlidXRvcnMnO1xuaW1wb3J0IGdldENvbW1pdHMgZnJvbSAnLi9nZXRDb21taXRzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGdldENvbnRyaWJ1dG9ycygpLnRoZW4oZnVuY3Rpb24gKGNvbnRyaWJ1dG9ycykge1xuICAgIC8vICAgICB2YXIgdG90YWxDb21taXRzID0gMDtcbiAgICAvL1xuICAgIC8vICAgICBjb250cmlidXRvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29udHJpYnV0b3IpIHtcbiAgICAvLyAgICAgICAgIHRvdGFsQ29tbWl0cyArPSBjb250cmlidXRvci5jb250cmlidXRpb25zO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9KTtcblxuICAgIGdldENvbW1pdHMoKS50aGVuKGZ1bmN0aW9uKGNvbW1pdHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coY29tbWl0cyk7XG4gICAgfSlcblxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGZldGNoQ29tbWl0VXJsKHBhZ2UpIHtcbiAgICB2YXIgdXJsID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvY29tbWl0cz9hY2Nlc3NfdG9rZW49ZGRkNmQ4YzQwNzI0NTJlOTg2MDA1NTIzNzBmYzY1NTE4MTVmMjcwOSY/cGFnZT0nKyBwYWdlICsnJnBlcl9wYWdlPTEwMCc7XG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbnRyaWJ1dG9ycygpIHtcbiAgICAvLyB2YXIgdG90YWxGZXRjaGVzID0gTWF0aC5jZWlsKHRvdGFsQ29tbWl0cyAvIDEwMCk7XG4gICAgdmFyIGZldGNoUHJvbWlzZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgICBmZXRjaFByb21pc2VzLnB1c2goZmV0Y2hDb21taXRVcmwoaSkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChmZXRjaFByb21pc2VzKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCByZXN1bHRzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG59XG4iXX0=
