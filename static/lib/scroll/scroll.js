// JavaScript Document
(function($){
	$.fn.myScroll = function(options){
		//默认配置
		var defaults = {
			speed:40,  //滚动速度,值越大速度越慢
		};
		
		var opts = $.extend({}, defaults, options)
		
		var $this = this;
		var timer = null;
		var top = 0;
		var thisHeight = $this.height();
		var $thisChild = $this.children();
		var thisChildrenHeight = $thisChild.height();

		if(thisChildrenHeight<thisHeight) return;
		$thisChild.append($thisChild.html())
		
		startScroll()

		$this.mouseenter(function(){
			clearInterval(timer)
		}).mouseleave(function(){
			startScroll()
		})

		function startScroll(){
			timer = setInterval(function(){
				if((top+thisChildrenHeight) === 1){
					top = 0
				}
				$thisChild.css({top:top--})
			},opts.speed)
		}
	}

	$.fn.txtScroll = function(options){
		//默认配置
		var defaults = {
			speed:40,  //滚动速度,值越大速度越慢
		};
		var opts = $.extend({}, defaults, options)

		var $this = this;
		var timer = null;
		var left = 0;

		var thisWidth = $this.width();
		var $thisChild = $this.children();
		var thisChildrenWidth = $thisChild.width();

		if(thisChildrenWidth<thisWidth) return;

		startScroll()

		$this.mouseenter(function(){
			clearInterval(timer)
		}).mouseleave(function(){
			startScroll()
		})

		function startScroll(){
			timer = setInterval(function(){
				if((left+thisChildrenWidth) === 0){
					left = thisWidth
				}
				$thisChild.css({left:left--})
			},opts.speed)
		}
	}

})(jQuery);