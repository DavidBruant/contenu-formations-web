"use strict";

// watchify makeCommitDonutData-test.js -o bundle-makeCommitDonutData-test.js -v -d
// <script src="bundle-makeCommitDonutData-test.js"></script>



describe('_.groupBy', function(){
    it('should return an empty object for an empty array', function(){
        var res = _.groupBy([], function(){});
        
        res.should.be.an.object;
        res.should.have.keys([]);
    });
    
    
    it('should return an object with one key for [1]', function(){
        var res = _.groupBy([1], function(){ return 'yo' });
        
        var keys = Object.keys(res);
        
        keys.should.length(1);
        keys[0].should.equal('yo');
    });
    
    
    it('should return an object with one key for [1, 1]', function(){
        var res = _.groupBy([1, 1], function(){ return 'yo' });
        var keys = Object.keys(res);
        
        res.should
        keys.should
    });
    
    
    it('should return an object with 3 keys for [1, 1, 2, 3] and identity function', function(){
        var res = _.groupBy([1, 1, 2, 3], function(x){ return x});
        var keys = Object.keys(res);
        
        res.should
        keys.should
    });
    
    /*it('should return [["Thursday", 1]] when there is one commit on 2016-03-24', function(){
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
    })*/
});

