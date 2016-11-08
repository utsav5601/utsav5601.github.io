// (function($){

	var imgArr = ['bg1', 'bg2', 'bg3'];

	var getNextBg = function(){
		var str = $('html').css('background');
		var imgName = str.substring(str.lastIndexOf("img/")+4,str.lastIndexOf(".jpeg"))
		var currIndex = imgArr.indexOf(imgName);
		var nextImgName = (currIndex == imgArr.length-1) ? imgArr[0] : imgArr[currIndex + 1];
		return str.replace(imgName, nextImgName);
	};

	var updateBackground = function(){

		var makeTransparentAgain = function(){
			$('body').animate({
				'backgroundColor': 'transparent'
			}, 700);
		};

		$('body').animate({
			'backgroundColor': '#000'
		}, 700, function(){
			$('html').css('background', getNextBg());
			makeTransparentAgain();
		});
	};


	$(document).ready(function(){
		setInterval(updateBackground, 4000);
	});

// })(jQuery);