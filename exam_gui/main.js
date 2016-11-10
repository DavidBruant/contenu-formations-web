"use strict";
import getCommits from "./getCommits";
import moment from "moment";
import * as d3 from 'd3-shape'


document.addEventListener('DOMContentLoaded', function(){
    getCommits().then(function(commits){
        
        /*On créé un objet de tableaux vides*/
        var allTabs = {
            "monday" : [],
            "tuesday" : [],
            "wednesday" : [],
            "thursday" : [],
            "friday" : [],
            "saturday" : [],
            "sunday" : []
        }
        
        commits.forEach(function(commit){
            var commitDateFormated = moment(commit.commit.author.date);
            var commitDay = commitDateFormated.format("ddd");
            
            switch(commitDay){
                case "Mon":
                    allTabs.monday.push(commit.commit.author);
                    break;
                case "Tue":
                    allTabs.tuesday.push(commit.commit.author);
                    break;
                case "Wed":
                    allTabs.wednesday.push(commit.commit.author);
                    break;
                case "Thu":
                    allTabs.thursday.push(commit.commit.author);
                    break;
                case "Fri":
                    allTabs.friday.push(commit.commit.author);
                    break;
                case "Sat":
                    allTabs.saturday.push(commit.commit.author);
                    break;
                case "Sun":
                    allTabs.sunday.push(commit.commit.author);
                    break;
            }  
        })
        
        console.log(allTabs.monday);
        
    })
})