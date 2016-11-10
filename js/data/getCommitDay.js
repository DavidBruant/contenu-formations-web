"use strict";

import moment from 'moment';

export default function getCommitDay(commits, day){
  var nbCommit = 0;
  commits.forEach(function(e){
    var commitDay = moment(e.commit.committer.date).format('dddd');
    if(commitDay == day){
      nbCommit++;
    }
  });

  return nbCommit;
}
