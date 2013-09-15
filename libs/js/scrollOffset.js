// get minified instance
var MINI = require('minified');
var $ = MINI.$, $$=MINI.$$, EE=MINI.EE;
// --------------------------------------
// offset
MINI.M.prototype.offset = function() 
{
    var elem = this[0];
    var dest = {x: 0, y: 0};
    while (elem) {
        dest.x += elem.offsetLeft;
        dest.y += elem.offsetTop;
        elem = elem.offsetParent;
    }
    return dest;
};
// define scrollOffset
$.scrollOffset = function( offset, duration, callback )
{
    var doc = document.documentElement, body = document.body;
    // get scroll top offset
    if( offset == undefined )
    {
        return (doc && doc.scrollTop  || body && body.scrollTop  || 0);
    }
    else
    {
        callback == undefined ? callback = function(){} : '';
        duration == undefined ? duration = 1000 : '';
        offset = offset - (doc && doc.scrollTop || body && body.scrollTop || 0);
        var direction = ( offset < 0 ) ? 'max' : 'min';
        // loop to animate
        $.loop(function(t, stopFn)
        {
            var move = Math.ceil(Math[direction](offset*(t/duration), offset) );
            window.scrollBy(0, move);
            offset = offset-move;
            if (t >= duration) { // time is up: call stopFunc()!
                stopFn();
                callback();
            }
        });
    }
}