var video = document.getElementById("video");

const cannotPlayVideo = video.canPlayType('video/mp4') == '';

if (cannotPlayVideo) {
	video.remove();
	console.log('can play', cannotPlayVideo, video.display)
} else {
	video.oncanplaythrough = function() {
		video.muted = true;
		video.play();
	};
	
	$('#video').bind('ended', function() {
		$(this).fadeOut();
		// $(this).parent().fadeIn()
	});
}


$('textarea#question').focus(function() {
	$(this).val('');
});
$('.pimage').each(function(){
	var img = $(this);
	var imgParent = $(this).parent();
    
	function parallaxImg () {
		var speed = img.data('speed');
		var imgY = imgParent.offset().top;
		var winY = $(this).scrollTop();
		var winH = $(this).height();
		var parentH = imgParent.innerHeight();
		var winBottom = winY + winH;

		if (winBottom > imgY && winY < imgY + parentH) {
			var imgBottom = ((winBottom - imgY) * speed);
			var imgTop = winH + parentH;
			var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
		}
		img.css({
			top: imgPercent + '%',
			transform: 'translate(-50%, -' + imgPercent + '%)'
		});
	}

	$(document).on({
		scroll: function () {
			parallaxImg();
		}, ready: function () {
			parallaxImg();
		}
	});
});

;(function($, win) {
	$.fn.inViewport = function(cb) {
		return this.each(function(i,el){
			function visPx(){
				var H = $(this).height(),
					r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
				return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
			} visPx();
			$(win).on("resize scroll", visPx);
		});
	};
}(jQuery, window));
$("#mid").inViewport(function(px){
	if(px) $(".clientsgrid1").addClass("showscroll1")
	if(px) $(".clientsgrid2").addClass("showscroll2")
	if(px) $(".clientsgrid3").addClass("showscroll3")
	;
});
$(".servicesgrid1").inViewport(function(px){
	if(px) $(".servicesgrid1").addClass("showscroll1")
	if(px) $(".servicesgrid2").addClass("showscroll2")
	if(px) $(".servicesgrid3").addClass("showscroll3")
	if(px) $(".servicesgrid4").addClass("showscroll4")
	if(px) $(".servicesgrid5").addClass("showscroll5")
	if(px) $(".servicesgrid6").addClass("showscroll6")
	;
});
$("#simulators").inViewport(function(px){
	if(px) $(".simsgrid1").addClass("showscroll1")
	if(px) $(".simsgrid2").addClass("showscroll2")
	if(px) $(".simsgrid3").addClass("showscroll3")
	;
});		
$(".contactusgrid").inViewport(function(px){
	if(px) $(".contactusgrid1").addClass("showscroll1")
	;
});
$(".contactusgrid2").inViewport(function(px){
	if(px) $(".contactusgrid2").addClass("showscroll2")
	;
});