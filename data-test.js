"use strict";

// watchify makeCommitDonutData-test.js -o bundle-makeCommitDonutData-test.js -v -d
// <script src="bundle-makeCommitDonutData-test.js"></script>


var makeCommitDonutData = require('../makeCommitDonutData.js');

describe('makeCommitDonutData', function(){
    it('should return an empty array when there are no commits', function(){
        var commits = [];
        var donutData = makeCommitDonutData(commits);
        
        donutData.should.be.an.Array();
        donutData.should.have.length(0);
    });
    
    it('should return [["Thursday", 1]] when there is one commit on 2016-03-24', function(){
        var commits = [
            {
                commit: {
                    author: {
                        date: new Date(2016, 3-1, 24).toISOString()
                    }
                }
            }
        ];
        var donutData = makeCommitDonutData(commits);
        
        donutData.should.be.an.Array();
        donutData.should.have.length(1);
        
        donutData[0].should.have.deepEqual(["Thursday", 1])
    })
});

