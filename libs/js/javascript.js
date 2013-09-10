// get minified instance
var MINI = require('minified');
var $ = MINI.$, $$=MINI.$$, EE=MINI.EE;
// on document ready
$(function(){
    
    // set article to 100% if less than 100%
    var _wrapper = $('article'),
        windowHeight = parseInt($('body').get('$height'));
    if(parseInt( _wrapper.get('$height')) < windowHeight - 60 )
    {
        _wrapper.set('$min-height', (windowHeight - 60)+'px');
    }
    
});