"use strict";

import getCommits from "./getCommits";
import moment from "moment";
import * as d3 from 'd3-shape';

getCommits()
.then(function(react){
    console.log(react);
})