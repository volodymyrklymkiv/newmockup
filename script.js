
$(document).ready(function(){
     var zindex = 1;
	 $("img").draggable({
			start: function(event, ui) {
				zindex++;
				var cssObj = { 'z-index' : zindex };
				$(this).css(cssObj);
			}
	 });
	 $('img').each(function(){
			 var rot = Math.random()*30-15+'deg';
			 var left = Math.random()*50+'px';
			 var top = Math.random()*150+'px';
			 $(this).css('-webkit-transform' , 'rotate('+rot+')');
			 $(this).css('-moz-transform' , 'rotate('+rot+')');
			 $(this).css('top' , left);
			 $(this).css('left' , top);
			 $(this).mouseup(function(){
				 zindex++;
				 $(this).css('z-index' , zindex);
			 });
	     });
	$('img').dblclick(function(){
			$(this).css('-webkit-transform' , 'rotate(0)');
			$(this).css('-moz-transform' , 'rotate(0)');
	});
							   
});