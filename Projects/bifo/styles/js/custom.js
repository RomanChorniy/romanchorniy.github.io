!function(e){e(function(){var o,t,n,r;e(".fancybox-link, .shop-template .fancybox").fancybox({touch:!1}),e(".fancybox-link-slider").fancybox({touch:!1,selector:".slick-slide:not(.slick-cloned)",hash:!1}),e(".fancybox-img-without-link").each(function(){e(this).fancybox({touch:!1,href:e(this).attr("src")})}),e(".fancybox-video-youtube").fancybox({type:"iframe",width:800,height:400}),o=e(".nav-item.dropdown"),t=e(".nav-link.dropdown-toggle"),e(".nav-link",".nav-item.dropdown").on("touchstart",function(o){e(this).parent(".nav-item.dropdown").toggleClass("show"),e(this).siblings(".dropdown-menu").toggleClass("show")}),e(t,o).hover(function(){e(this).parent(".nav-item.dropdown").addClass("show"),e(this).siblings(".dropdown-menu").addClass("show")}),o.mouseleave(function(){e(t,this).parent(".nav-item.dropdown").removeClass("show"),e(t,this).siblings(".dropdown-menu").removeClass("show")}),e("button.navbar-toggler").on("click",function(){var o=e(this).data("target"),t=e(o);t.first().is(":hidden")?t.show("slow"):t.slideUp()}),(n=e(".slider-footer-wrapper")).length&&n.slick({arrows:!0,dots:!1,infinite:!0,speed:300,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,prevArrow:e(".slider-arrows .slider-arrow-prev"),nextArrow:e(".slider-arrows .slider-arrow-next"),lazyLoad:"progressive",responsive:[{breakpoint:576,settings:{slidesToShow:1}}]}),(r=e(".component-with-button")).length&&r.each(function(){var o=e(this);e(".component-button",o).on("click",function(){var t=e(this),n=t.data("count-view-when-click-on-button");n?e(o).find(".hide-block").slice(0,n).removeClass("hide-block"):e(o).find(".hide-block").removeClass("hide-block"),0===e(o).find(".hide-block").length&&t.hide(),o.hasClass("slider")&&e(".slider-wrapper",o).slick("refresh")})}),e("a").on("click",function(o){var t=e(this);if("disable"!=t.data("scroll")){var n=t.attr("href");if(n){var r=n.split("#");if(""==r[0]&&""!=r[1]){o.preventDefault();var a=e("#"+r[1]);if(a.length){window.lazyLoadOptions.destroy();var i=Math.round(a.offset().top-65);e("html, body").animate({scrollTop:i},300,function(){window.lazyLoadOptions=new LazyLoad({elements_selector:".lazy"})})}}}}}),function(){var o=e("#shop-cart");if(o.length){var t=e(".wrapper-count",o),n=e(".count",t),r=e(".absolute-before-price",o),a=e(".absolute-after-price",o),i=e(".price .price-before span",o),l=e(".price .price-after span",o),s=e(".title .price span",o),c=e('.form input[name="count"]',o),d=e('.form input[name="price"]',o),h=e(".minus",t);h.on("click",function(){if("1"!=n.text()){var e=+n.text()-1;n.html(e);var o=r.text().replace(" ","");o=o.replace(/\u00A0/g,""),o*=e,i.html(new Intl.NumberFormat("ru-RU").format(o));var t=a.text().replace(" ","");t=t.replace(/\u00A0/g,""),t*=e,l.html(new Intl.NumberFormat("ru-RU").format(t)),s.html(new Intl.NumberFormat("ru-RU").format(t)),1==e&&h.addClass("not-active"),c.val(e),d.val(t)}}),e(".plus",t).on("click",function(){var e=+n.text()+1;n.html(e);var o=r.text().replace(" ","");o=o.replace(/\u00A0/g,""),o*=e,i.html(new Intl.NumberFormat("ru-RU").format(o));var t=a.text().replace(" ","");t=t.replace(/\u00A0/g,""),t*=e,l.html(new Intl.NumberFormat("ru-RU").format(t)),s.html(new Intl.NumberFormat("ru-RU").format(t)),h.removeClass("not-active"),c.val(e),d.val(t)})}}(),function(){var o=e("#shop-main .component-5");if(o.length){var t=e(".see-more",o);t.on("click",function(e){o.find(".col-sm-6").removeClass("d-none"),t.remove()})}}(),window.lazyLoadOptions=new LazyLoad({elements_selector:".lazy"})})}(jQuery);