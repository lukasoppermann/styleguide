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
    
    // add blank to external links
    $('a[href^="http://"], a[href^="https://"]').set("target","_blank");
    //
    $('a').each(function(){
        var $this = $(this),
            tClass = $this.get('@class');

        if( tClass == null || tClass == undefined )
        {
            $this.set('+test');
            console.log('Zest');
            
        }
    });
    
});