/**
 * jQuery.jGalight
 * Version 0.1
 * Copyright (c) 2011 Robin Böning - http://magiclabs.de
 * Dual licensed under MIT and GPL.
 * Date: 06/20/2011
**/
(function($) {
	$.fn.jGalight = function(options){
		var settings = {
			effect: ''
		};
		$.extend(settings,options);
		var $gallery = $(this).addClass('jGalight'), $list = $gallery.find('li'), $big_image = $gallery.find('.big_image');
		function changeImage($image) {
			if(settings.effect == 'fade') {
				$image.clone().hide().appendTo($big_image.empty()).fadeIn();
			} else {
				$image.clone().appendTo($big_image.empty());
			}
		}
		if ($list.size() > 1) {
			$list.first().addClass('active');
			changeImage($list.first().find('img'));
			$list.each(function () {
				var $this = jQuery(this);
				$this.attr('title', $this.find('img').attr('alt'));
				$this.click(function(e) {
					$list.removeClass('active');
					$(this).addClass('active');
					changeImage($this.find('img'));
				});
			});
		} else {
			$gallery.addClass('disabled');
		}
	};
})(jQuery)