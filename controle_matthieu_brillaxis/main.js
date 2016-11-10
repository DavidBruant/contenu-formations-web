"use strict";

import getCommits from './getCommits';
import drawDonuts from './drawDonut';
import getDay from './getDay';
import moment from 'moment';
import * as d3 from 'd3-shape';

document.addEventListener('DOMContentLoaded', function(){

        getDay();

        drawDonuts();
    
});