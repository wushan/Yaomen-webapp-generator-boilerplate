//Browserify
//Require
//Expose Jquery Globally.
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import sticky from './components/jquery.sticky'
import Vue from './components/vue'
import Example from './components/example'

//Main Nav Sticker
$(document).ready(function(){
  Example();
  $('.sticker').sticky({
    topSpacing:0,
    getWidthFrom: '#wrapper',
    widthFromWrapper: true,
    responsiveWidth: true,
    zIndex: 99
  });
  $(window).resize(function(){
    $('.sticker').sticky('update');
  });
});