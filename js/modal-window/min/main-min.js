jQuery(document).ready(function($){function i(i){var o=i.width()/2,t=i.offset().left+o,s=i.offset().top+o-$(window).scrollTop(),e=n(s,t,o,$(window).height(),$(window).width());return i.css("position","fixed").velocity({top:s-o,left:t-o,translateX:0},0),e}function n(i,n,o,t,s){var e=n>t/2?n:t-n,a=i>s/2?i:s-i;return Math.ceil(Math.sqrt(Math.pow(e,2)+Math.pow(a,2))/o)}function o(i,n,o){i.velocity({scale:n},400,function(){$("body").toggleClass("overflow-hidden",o),o?i.parents(".cd-section").addClass("modal-is-visible").end().off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"):i.removeClass("is-visible").removeAttr("style").siblings('[data-type="modal-trigger"]').removeClass("to-circle")})}function t(){var i=$(".cd-section.modal-is-visible").find(".cd-modal-bg"),o=i.width()/2,t=i.siblings(".btn").offset().top+o-$(window).scrollTop(),s=i.siblings(".btn").offset().left+o,e=n(t,s,o,$(window).height(),$(window).width());i.velocity({top:t-o,left:s-o,scale:e},0)}function s(){var i=$(".cd-section.modal-is-visible");i.removeClass("modal-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){o(i.find(".cd-modal-bg"),1,!1),$(".links_row").css("opacity",1),$(".form-wrap").css("opacity",1),$("#myCarousel").css("opacity",1),$(".nav-bar").css("opacity",1)}),i.parents(".no-csstransitions").length>0&&o(i.find(".cd-modal-bg"),1,!1)}$('[data-type="modal-trigger"]').on("click",function(){var n=$(this),t=i(n.next(".cd-modal-bg"));n.addClass("to-circle"),n.next(".cd-modal-bg").addClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){o(n.next(".cd-modal-bg"),t,!0),$(".links_row").css("opacity",0),$(".form-wrap").css("opacity",0),$("#myCarousel").css("opacity",0),$(".nav-bar").css("opacity",0)}),n.parents(".no-csstransitions").length>0&&o(n.next(".cd-modal-bg"),t,!0)}),$(".cd-section .cd-modal-close").on("click",function(){s()}),$(document).keyup(function(i){"27"==i.which&&s()}),$(window).on("resize",function(){$(".cd-section.modal-is-visible").length>0&&window.requestAnimationFrame(t)})});