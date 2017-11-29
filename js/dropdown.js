+(function(){

    function dropDownMenu(){
        
        this.selector = 'ul.menu li';
        this.windowWidth = null;

        this.init = function(){
            this.windowWidth = $(window).width();
            this.addClass();
            this.calcWidth();
        };

        this.addClass = function(){
            $(this.selector+":has(ul)").addClass("has-sub");
        };

        this.calcWidth = function(){
            var counter = 1;
            var totalOffset = null;
            console.log(this.windowWidth);
            var self = this;
            
            $(this.selector+'.has-sub').hover( function(e){
                e.stopPropagation();
                var eleWidth = $(' > ul', this).outerWidth();
                if( $(this).children('ul').length > 0 ){

                    totalOffset = $(this).children('ul').offset().left + eleWidth;
                    // console.log("windowWidth", self.windowWidth, "offset"+$(this).offset().left, 'eleWidth', eleWidth, 'totalOffset', totalOffset );
                    if( totalOffset > self.windowWidth ){
                        $(this).children('ul').css({"right":"100%","left":"initial", "z-index": counter });
                    }
                    counter++;
                }

            }, function( e ){
                e.stopPropagation();
                $(this).children('ul').removeAttr('style');
                console.log('hover out');
            });
        };
    };

    var obj = new dropDownMenu();
    $(window).load(function(){
        obj.init();
    });
    $(window).resize(function(){
        obj.init();
    });

})();