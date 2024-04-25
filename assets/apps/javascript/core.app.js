(function($){
	"use strict";

    // custom scrollbar
    $("html").niceScroll({
        styler: "fb",
        cursorcolor: "#c2c3c7",
        cursorwidth: '6',
        cursorborderradius: '0px',
        background: '#1d1d1d',
        spacebarenabled: false,
        cursorborder: '0',
        zindex: '1000'
    });
    $(".left-side").niceScroll({
        styler: "fb",
        cursorcolor: "#c2c3c7",
        cursorwidth: '3',
        cursorborderradius: '0px',
        background: '#1d1d1d',
        spacebarenabled: false,
        cursorborder: '0'
    });
    $(".left-side").getNiceScroll();
    if ($('body').hasClass('left-side-collapsed')) {
        $(".left-side").getNiceScroll().hide();
    }
	if($('.floating-label').length > 0){
		var o = this;	
		$('.floating-label .form-control').on('keyup change', function(e){
			var input = $(e.currentTarget);
			if($.trim(input.val()) !== ''){
				input.addClass('dirty').removeClass('static');
			}else{
				input.removeClass('dirty').removeClass('static');
			}
		});	
		$('.floating-label .form-control').each(function(){
			var input = $(this);
			if($.trim(input.val()) !== ''){
				input.addClass('static').addClass('dirty');
			}
		});	
		$('.form-horizontal .form-control').each(function(){
			$(this).after('<div class="form-control-line"></div>');
		});
	}
    // Toggle Left Menu
    jQuery('.menu-list > a').click(function() {
        var parent = jQuery(this).parent();
        var sub = parent.find('> ul');
        if (!jQuery('body').hasClass('left-side-collapsed')) {
            if (sub.is(':visible')) {
                sub.slideUp(200, function() {
                    parent.removeClass('nav-active');
                    jQuery('.main-content').css({
                        height: ''
                    });
                    mainContentHeightAdjust();
                });
            } else {
                visibleSubMenuClose();
                parent.addClass('nav-active');
                sub.slideDown(200, function() {
                    mainContentHeightAdjust();
                });
            }
        }
        return false;
    });
    function visibleSubMenuClose() {
        jQuery('.menu-list').each(function() {
            var t = jQuery(this);
            if (t.hasClass('nav-active')) {
                t.find('> ul').slideUp(200, function() {
                    t.removeClass('nav-active');
                });
            }
        });
    }
    function mainContentHeightAdjust() {
        // Adjust main content height
        var docHeight = jQuery(document).height();
        if (docHeight > jQuery('.main-content').height())
            jQuery('.main-content').height(docHeight);
    }
    //  class add mouse hover
    jQuery('.custom-nav > li').hover(function() {
        jQuery(this).addClass('nav-hover');
    }, function() {
        jQuery(this).removeClass('nav-hover');
    });
    // Menu Toggle
    jQuery('.toggle-btn').click(function() {
        $(".left-side").getNiceScroll().hide();
        if ($('body').hasClass('left-side-collapsed')) {
            $(".left-side").getNiceScroll().hide();
        }
        var body = jQuery('body');
        var bodyposition = body.css('position');
        if (bodyposition != 'relative') {
            if (!body.hasClass('left-side-collapsed')) {
                body.addClass('left-side-collapsed');
                jQuery('.custom-nav ul').attr('style', '');
                jQuery(this).addClass('menu-collapsed');
            } else {
                body.removeClass('left-side-collapsed chat-view');
                jQuery('.custom-nav li.active ul').css({
                    display: 'block'
                });
                jQuery(this).removeClass('menu-collapsed');
            }
        } else {
            if (body.hasClass('left-side-show'))
                body.removeClass('left-side-show');
            else
                body.addClass('left-side-show');
            mainContentHeightAdjust();
        }
    });
    jQuery(window).resize(function() {
        if (jQuery('body').css('position') == 'relative') {
            jQuery('body').removeClass('left-side-collapsed');
        } else {
            jQuery('body').css({
                left: '',
                marginRight: ''
            });
        }
    });
}(jQuery));

var data_separator = "~";
$(document).ready(function(){	
	$('.txtallcaps').on('keyup', function(e){
		$(this).val($(this).val().toUpperCase());
	});
	$('.floatval').on('keyup', function(e){
		$(this).val(parseFloat($(this).val()).toFixed(2));
	});
	$('.txtcapitalize').on('keyup', function(e){
		var txt = $(this).val();
		$(this).val(txt.replace(/^(.)|\s(.)/g, function ($1) {
			return $1.toUpperCase( );
		}));
	});

	$('input, textarea').keyup(function(){ if($(this).val().toString().indexOf('~') !== -1){ $(this).val($(this).val().replace(/~/gi, '')); } });
	$('.numbersonly').keyup(function(){ if(this.value != this.value.replace(/[^0-9\.]/g, '')){ this.value = this.value.replace(/[^0-9\.]/g, ''); } });
	$('.checkall').click( function(){ 
		if($(this).is(':checked') == true){
			$(".dataTable input:checkbox.check").prop('checked', true); 
		}else{
			$(".dataTable input:checkbox.check").prop('checked', false); 
		}
	});
});
$(window).load(function(){
	$(".overlay").hide();
});
function uniqueArray(item, index, array) {
    return array.indexOf(item) == index;
}
function age(d1, d2){
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
function ageValidation(age, birthMonth, birthDate, birthYear) {
	var a = age;
	var today_date = new Date();
	today_date.setFullYear(today_date.getFullYear() - a);
	var date_of_birth = new Date();
	var bm = birthMonth;
	var bd = birthDate;
	var by = birthYear;
	date_of_birth.setFullYear(by, bm - 1, bd);
	if((today_date - date_of_birth) < 0){
		return true;
	}else{
		return false;
	}
}
function regExTest(pettern, values) {
	var re = pettern;
        return re.test(values);
}
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
function Trim(strVal) {
	var strMatch = strVal.match(/^\s*(\S+(\s+\S+)*)\s*$/);
	result = (strMatch == null) ? "" : strMatch[1];
	return result;
}
function toggleFullScreen() {
    var a = $(window).height() - 10;
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
		$('#full-screen').hide();
		$('#exit-full-screen').show();
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
		$('#full-screen').show();
		$('#exit-full-screen').hide();
    }
}
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);
function exitHandler() {
    if(!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        $('#full-screen').show();
		$('#exit-full-screen').hide();
    }
}
var old_log_id = null; var old_log_status = "hidden";
function showLogData(record_id, data){
	if(old_log_status.toString() == "visible"){
		$("#" + old_log_id).fadeOut("fast");
		old_log_status = "hidden";	
	}
	var x = $("#log" + record_id).offset().left;
	var y = $("#log" + record_id).offset().top;
	$("#" + old_log_id).remove(); 
	var defaults = { 
		xOffset: -10, 
		yOffset: -25, 
		recordlogId: "reclog", 
		clickRemove: false 
	}; 
	var options = $.extend(defaults, options); 
	var content = data.replace(/~/g, "<br />"); 
	old_log_id = options.recordlogId;
	$("body").append("<div id='"+ options.recordlogId +"' class=\"f11 px5 lh20\">"+ content +"</div>").show(); 
	$("#" + options.recordlogId).css("position","absolute").css("top",(y - options.yOffset) + "px").css("left",(x + options.xOffset) + "px").css("display","none").fadeIn("fast");
	old_log_status = "visible";
}
$(document).ready(function(){
	$('body').click(function(e){
		if(old_log_status.toString() == "visible"){
			if((e.target.className.toString() != "recloginfo") && (e.target.className.toString() != "fa fa-info-circle")){
				$("#" + old_log_id).fadeOut("fast");
				old_log_status = "hidden";	
			}
		}
	});
});