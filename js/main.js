+(function(){

	function dropDownMenu(){
		
		this.selector = 'ul.menu li';
		this.init = function(){
			this.addClass();
			this.calcWidth();
		};
		

		this.addClass = function(){
			$(this.selector+":has(ul)").addClass("has-sub");
		};

		this.calcWidth = function(){

				var windowWidth = $(window).width();
				
				$(this.selector).hover( function(e){
					e.stopPropagation();

					var eleWidth = $(' > ul', this).outerWidth();

					if( $(this).children('ul').length > 0 ){

						var totalOffset = $(' > ul', this).offset().left + eleWidth;
						// console.log("windowWidth" + windowWidth+"offset"+$(this).offset().left,'eleWidth', eleWidth);
						if( totalOffset > windowWidth ){
							$(this).children('ul').css({"right":"100%","left":"initial"});

						}
					}

				});
		};

		
	};
	
	var obj = new dropDownMenu();

	$(window).load(function(){
		obj.init();
	});

	$(window).resize(function(){
		obj.init();
		$('ul.menu ul').each(function(){
			$(this).removeAttr('style');
			
		})
	});

})();



