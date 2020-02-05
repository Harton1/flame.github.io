jQuery(document).ready(function () {

	// ввалидации форм на номер телефона и формы имени
	// jQuery('#abbr').on('keypress', function() {
	// 	var that = this;

	// 	setTimeout(function() {
	// 		var res = /[^а-я ]/g.exec(that.value);
	// 		console.log(res);
	// 		that.value = that.value.replace(res, '');
	// 	}, 0);
	// });
	// jQuery("#phone").inputmask("+38(099)999-99-99");

     // -------------------------------------- слайдер - последние просмотренные
    
    jQuery('.slider_reviews').slick({
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      arrows: false,
      slidesToShow: 3,
	    slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              autoplay: false,
            }
          },{
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              autoplay: false,
            }
          }
        ]
    });
    if(jQuery(window).width() <= 1200){
      jQuery('.slider_menu').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 730,
            settings: {
              slidesToShow: 1,
               slidesToScroll: 1
            }
          }
        ]
      });
    };
    jQuery(window).resize(function(){
      if(jQuery(window).width() <= 1200){
        jQuery('.slider_menu').slick({
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
          
        });
      };
    });
    //-------------------------------------- плавный скролл

    jQuery('.scroll_item a').on('click',
      function(){
        var scroll_el = jQuery(this).attr('href');
          if (jQuery(scroll_el).length != 0) {
            jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top - 40 }, 500);
          }
          return false;
      }
    ); 

    // активная кнопка скролла меню
    jQuery(".scroll_item").on("click", function(event){
        if(jQuery(this).hasClass('active_filter')){
            jQuery(this).removeClass('active_filter');
        }else{
            jQuery(".scroll_item").removeClass("active_filter");
            jQuery(this).addClass("active_filter");
        }
    });

    

    if(jQuery(window).width() >= 640){
      jQuery(".chack span").on("click", function(event){
          if(jQuery(this).hasClass('active')){
              jQuery(this).removeClass('active');
              jQuery('.chack_list').slideUp();
          }else{
              jQuery(".chack span").removeClass("active");
              jQuery(this).addClass("active");
              jQuery('.chack_list').slideDown();
          }
      });
    };

    jQuery(document).on('click', function(e) {
        if (!jQuery(e.target).closest(".sob").length) {
          jQuery('.chack_list').slideUp();
          jQuery('.chack span').removeClass('active');
          jQuery(".sob").removeClass("active_filter");
        }
        e.stopPropagation();
    });

    jQuery(".sob").on("click", function(event){
        if(jQuery(this).hasClass('active_filter')){
        }else{
            jQuery(".sob").removeClass("active_filter");
            jQuery(this).addClass("active_filter");
            jQuery('.chack li.set_1').removeClass('active_filter');
        }
    });

    

    // -------------------------------------- табуляция
    
    jQuery('.list_bls').hide();
    jQuery('.list_bls:first').show();
    jQuery('.chack li.set_1:first').addClass('active_filter');

    jQuery('.chack li.set_1').click(function (event) {
       event.preventDefault();
       jQuery('.chack li.set_1').removeClass('active_filter');
       jQuery(".sob").removeClass("active_filter");
       jQuery(this).addClass('active_filter');
       jQuery('.list_bls').slideUp();

       var selectTab = jQuery(this).find('a').attr('href')
       jQuery(selectTab).slideDown(200);

       var $grid = $('.grid');
         $grid.imagesLoaded( function() {
          // init Masonry after all images have loaded
            $grid.masonry({
               itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
            });
        });
    });

    // для раздела события
    jQuery('.chack_list li:first').addClass('active_filter');
    jQuery('.chack_list li').click(function (event) {
       event.preventDefault();
       jQuery('.chack_list li').removeClass('active_filter');
       jQuery(this).addClass('active_filter');
        jQuery('.list_bls').slideUp();

       var selectTab = jQuery(this).find('a').attr('href')
       jQuery(selectTab).slideDown(200);

       var $grid = $('.grid');
         $grid.imagesLoaded( function() {
          // init Masonry after all images have loaded
            $grid.masonry({
               itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
            });
        });
    });

    // ------------------------------
    if(jQuery(window).width() <= 640){    
      jQuery('.chack li:first a').addClass('active_list_item');

      jQuery('.chack li a').click(function () {
         jQuery('.chack li a').removeClass('active_list_item');
         jQuery(this).addClass('active_list_item');
      });

      // обернуть кнопку в див с классом tc
      jQuery(".chack_wrap").wrap("<div class='tc'></div>");
    };


    jQuery(window).resize(function(){
      if(jQuery(window).width() <= 640){    
        jQuery('.chack li:first a').addClass('active_list_item');

        jQuery('.chack li a').click(function () {
           jQuery('.chack li a').removeClass('active_list_item');
           jQuery(this).addClass('active_list_item');
        });
      };
    });
    
    // открыть фильтр
    jQuery(".open_list_chack").on("click", function(event){
        if(jQuery(this).hasClass('active')){
            jQuery(this).removeClass('active');
            jQuery('.chack_wrap').removeClass('overfl');
        }else{
            jQuery(".open_list_chack").removeClass("active");
            jQuery(this).addClass("active");
            jQuery('.chack_wrap').addClass('overfl');
            jQuery('.chack').addClass('bord_top');
        }
    });


    // -------------------------------------- закрыть блок при клике вне его поля
     jQuery(document).on('click', function(e) {
        if (!jQuery(e.target).closest(".chack_wrap").length) {
          jQuery('.chack_wrap').removeClass('overfl');
          jQuery('.chack').removeClass('bord_top');
          jQuery('.open_list_chack').removeClass('active');
        }
        e.stopPropagation();
      });
    

    // -------------------

    // кнопка главного меню
    jQuery(".butt_open_mmenu").click(function () {
      jQuery('.fix_menu').addClass('active_mmenu');
      jQuery('.bg_body').fadeIn();
    });
    jQuery(".close_menu_mod").click(function () {
      jQuery('.fix_menu').removeClass('active_mmenu');
      jQuery('.bg_body').fadeOut();
    });
    
    

     jQuery(".bg_body, .close_form").click(function () {
        jQuery('.butt_open_mmenu').removeClass("close");
        jQuery('.fix_menu').removeClass('active_mmenu');
        jQuery('.win_form').fadeOut();
        jQuery('.bg_body').removeClass("hight");
        jQuery('.bg_body').fadeOut();
     });

    // всплывающее окно
     jQuery(".open_win_order").click(function () {
        jQuery('.win_form').fadeIn(400);
        jQuery('.bg_body').addClass("hight");
        jQuery('.bg_body').fadeIn();
    });

    // удалить тег br
    if(jQuery(window).width() <= 992){
        jQuery(".sections_two .info p br").remove();
        jQuery(".link_menu").wrap("<div class='tc'></div>");
    };


    $(document).ready(function() {
      new WOW().init();
    });


    // -------------------------------------- скрипт для меню

    jQuery(document).ready(function(){
    	var menu = jQuery('.mmenu');
    	var wid = jQuery(window).width();

    	jQuery(window).resize(function(){
    		if(wid > 280 && menu.is(':hidden')) {
    		    menu.removeAttr('style');
    		}
    	});
    });


});
