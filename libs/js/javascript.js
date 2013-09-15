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
    // achor smooth move
    $('.anchors a').on('click', function(){
        $.scrollOffset($('[name="'+$(this).get('href').split("#")[1]+'"]').offset().y - 70, 1000);
        return false;
    });
     
    // add blank to external links
    $('a[href^="http://"], a[href^="https://"]').set("target","_blank");
    // add class to internal links
    $('section a').each(function(item){
        var $this = $(item),
            tClass = $this.get('@class');
        if( tClass == null || tClass == undefined )
        {
            $this.set('+styleguide-link');
        }
    });
    // prepare code
    $('.styleguide-code').set('@contentEditable','true');
    
    // $('.styleguide-code.css').on('keyup', function(){
    //     var css = '';
    //     $('.styleguide-code').each(function(item){
    //         css += $(item).text();
    //     });
    //     $$('style').innerHTML = css;
    // });
});