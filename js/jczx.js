// JavaScript Document
 var t = n = 0,count;
 $(document).ready(function() {
		 slidbanner();
		 slidsenery();
		 notice();
		 getnav();
    })
     
function getnav(){
var abc = $('#nav li');
abc.each(function(){
	$(this).click(function(){
		abc.each(function(){
			$(this).removeClass('onactive');
			})
	    $(this).addClass('onactive');
		})
	})
}

		
	function notice(){
	var onews = $('#noticelist');
	var oul = $('#noticeul');
	var oul1 = oul.clone();
   function m(){ 
   //onews.animate({scrollTop:onews.scrollTop()+'1px'},30) // onews.scrollTop(onews.scrollTop()+1)
   if(oul.height() > onews.scrollTop() + onews.height()){onews.scrollTop(onews.scrollTop()+1)}
   else{
	   oul1.appendTo(onews);
	 //  if(onews.scrollTop()<oul.height()){onews.animate({scrollTop:onews.scrollTop()+'1px'},30);}
	 if(onews.scrollTop()<oul.height()){onews.scrollTop(onews.scrollTop()+1)}
	   else{onews.scrollTop(0);}
	   }
   }
    var t=setInterval(m,30);
	onews.mouseover(function(){clearInterval(t)});
	onews.mouseout(function(){t=setInterval(m,30);});
	}	
/* banner播放*/
function slidbanner(){
	      count = $("#banner_list a").length;
        $("#banner_list a:not(:first-child)").hide();
        $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
        $("#banner_info").click(function() {
            window.open($("#banner_list a:first-child").attr('href'), "_blank")
        });
        $("#banner li").click(function() {
            var i = $(this).text() - 1; 
            n = i;
            if (i >= count) return;
            $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
            $("#banner_info").unbind().click(function() {
                window.open($("#banner_list a").eq(i).attr('href'), "_blank")
            })
			 $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
            document.getElementById("banner").style.background = "";
            $(this).toggleClass("on");
            $(this).siblings().removeAttr("class");
        });
        t = setInterval("showAuto()", 3000);
        $("#banner").hover(function() {
            clearInterval(t);
        },
       function() {
            t = setInterval("showAuto()", 3000);
        });
	}
    function showAuto() {
        n = n >= (count - 1) ? 0 : ++n;
        $("#banner li").eq(n).trigger('click');
    }
	
/* 校园风景图片播放*/
function slidsenery(){
        var slideX = {
            thisUl: $('#catalog ul.imgbox'),
            btnLeft: $('#toleft'),
            btnRight: $('#toright'),
            thisLi: $('#catalog ul.imgbox li'),
            init: function () {
                slideX.thisUl.width(slideX.thisLi.length * 150);
                slideX.slideAuto();
                slideX.btnLeft.click(slideX.slideLeft).hover(slideX.slideStop, slideX.slideAuto);
                slideX.btnRight.click(slideX.slideRight).hover(slideX.slideStop, slideX.slideAuto);
                slideX.thisUl.hover(slideX.slideStop, slideX.slideAuto);
            },
            slideLeft: function () {
                slideX.btnLeft.unbind('click', slideX.slideLeft);
                slideX.thisUl.find('li:last').prependTo(slideX.thisUl);
                slideX.thisUl.css('marginLeft', -150);
                slideX.thisUl.animate({ 'marginLeft': 0 }, 1000, function () {
                    slideX.btnLeft.bind('click', slideX.slideLeft);
                });
                return false;
            },
            slideRight: function () {
                slideX.btnRight.unbind('click', slideX.slideRight);
                slideX.thisUl.animate({ 'marginLeft': -150 }, 1000, function () {
                    slideX.thisUl.css('marginLeft', '0');
                    slideX.thisUl.find('li:first').appendTo(slideX.thisUl);
                    slideX.btnRight.bind('click', slideX.slideRight);
                });
                return false;
            },
            slideAuto: function () {
                slideX.intervalId = window.setInterval(slideX.slideRight, 1500);
            },
            slideStop: function () {
                window.clearInterval(slideX.intervalId);
            }
        }
        $(document).ready(function () {
            slideX.init();
        })
}