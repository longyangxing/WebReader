(function(){
	var $show_tab_controller = $(".show-tab-controller");
	var $nav_top = $('.nav-top');
	var $fiction_container = $('.fiction-container');
	var $nav_bottom =  $('.nav-bottom'); 
	var $icon_font = $('.icon-font');
	var $control_panel = $('.control-panel');
	var $icon_day_mod  = $('.icon-day-mod');
	var $day_icon = $('.day-icon');
	var $icon_night_mod  = $('.icon-night-mod');
	var $night_icon =$('.night-icon');
	var $upper = $('#upper');
	var $lower = $('#lower');
	var $bg_container = $('.bg-container');
	var $day_mod = $('#day-mod');
	var $night_mod = $('#night-mod');
	var $prev_page = $('#prev-page');
	var $next_page = $('#next-page');

	// 封装本地存储和jsonp方法
    var Util = (function(){
    		// var profix = 'profix';
    		//获取本地存储的值
    		var getStorage = function( key ){
    			// alert()
    			return localStorage.getItem( key );
    		}

    		// 设置本地存储的值
    		var setStorage = function( key ,value ){
    			return localStorage.setItem( key , value );
    		}

    		//跨域获取数据
    		var getJSONP = function( url , callback ){
    			$.jsonp({
    				url : url,
    				cache : true,
    				success : function( result ){
    					var data = $.base64.decode(result);
                        var json = decodeURIComponent(escape(data));
                        callback(json);	
    				}
    			})	
    		}
    	return {
    		getStorage : getStorage,
    		setStorage : setStorage,
    		getJSONP   : getJSONP
    	}
    })();

    //初始化背景颜色
    var init_background = Util.getStorage('background');

    if( init_background == null ){
    	Util.setStorage( 'background' , '#f7eee5' );
    	$('body').css('backgroundColor', '#f7eee5');
    }else{
    	$('body').css('backgroundColor', init_background );
    	if( init_background == '#283548' ){
    			$night_icon.show();
    			$day_icon.hide();
    		}
    	if( init_background == '#f7eee5' ){
    			$night_icon.hide();
    			$day_icon.show();
    		}

    }
    $('[data-background="'+init_background+'"]').addClass('bg-container-active').siblings().removeClass('bg-container-active');

    //初始化字体大小
    var init_font = Util.getStorage('font-size');

    if( init_font == null ){
    	Util.setStorage( 'font-size' , 12 );
    	$fiction_container.css( 'font-size' , 12 );
    }else{
    	$fiction_container.css( 'font-size' , parseInt( init_font ) );
    }

    //获取数据
    function RenderModel(){
    	var charterId;
    	var charterTotal; 
    	function 

    }
    //渲染数据
    function RenderUI( container ){
    	function parseData( jsonData ){
    		var html = '';
    		html = '<h4>'+jsonData.t+'</h4>';
    		for( var i = 0 ; i < jsonData.p.length ; i++ ){
    			html += '<p>'+ jsonData.p[i] + '</p>'
    		}
    		return html;
    	}

    	return function( data ){
    		container.html( parseData(data) );
    	}
    } 
    //绑定对象行为
    function eventHandler(){
    	// 显示上下导航栏
    	$show_tab_controller.click(function(){
    		if( $nav_top.css( 'display' ) == 'none' ){
    			 $nav_top.css( 'display' , 'block' );
    			 $nav_bottom.css( 'display' , 'block' );
    		}else{
    			 $nav_top.css( 'display' , 'none' );
    			 $nav_bottom.css( 'display' , 'none' );
    			 $control_panel.css( 'display' , 'none' );
    		}
    	});

    	//显示字体背景控制栏
    	$icon_font.click(function(){
    		if( $control_panel.css( 'display' ) == 'none' ){
    			$control_panel.css( 'display' , 'block' );
    			$(this).addClass('active');
    		}else{
    			$control_panel.css( 'display' , 'none' );
    			$(this).removeClass('active');
    		}
    	});

    	//切换白天黑夜模式
    	$icon_day_mod.click(function(){
    		$day_icon.css( 'display' , 'none' );
    		$night_icon.css( 'display' , 'block' );
    		Util.setStorage( 'background' , '#283548' );
    		$('body').css( 'background-color' , '#283548' );
    	})

    	$icon_night_mod.click(function(){
    		$night_icon.css( 'display' , 'none' );
    		$day_icon.css( 'display' , 'block' );
    		Util.setStorage( 'background' , '#f7eee5' );
    		$('body').css( 'background-color' , '#f7eee5' );
    	})

    	//改变字体大小
    	$upper.click(function(){
    		var fontSize = parseInt( $fiction_container.css( 'font-size' ) );
    		if( fontSize < 28 ){
    			fontSize++;
    			$fiction_container.css( 'font-size' , fontSize );
    			Util.setStorage( 'font-size' , fontSize );
    			// console.log(Util.getStorage('font-size'))
    		}else{
    			alert('字体已经最大了!');
    		}

    	})

    	$lower.click(function(){
    		var fontSize = parseInt( $fiction_container.css( 'fontSize' ) );
    		if( fontSize > 12 ){
    			fontSize--;
    			$fiction_container.css( 'font-size' , fontSize );
    			Util.setStorage( 'font-size' , fontSize );
    		}else{
    			alert('字体已经最小了!');
    		}
    	})

    	//切换背景颜色
    	$bg_container.click(function(){
    		// alert($(this).attr('data-background'))
    		var bgc = $(this).attr('data-background');
    		Util.setStorage( 'background' , bgc );
    		$('body').css( 'background-color' , bgc );
    		$(this).addClass( 'bg-container-active' ).siblings().removeClass('bg-container-active');
    		if( bgc == '#283548' ){
    			$night_icon.show();
    			$day_icon.hide();
    		}
    		if( bgc == '#f7eee5' ){
    			$night_icon.hide();
    			$day_icon.show();
    		}
    	});

    	// 切换页面
    	$prev_page.click(function(){
    		// render()
    		alert()
    	});
    	$next_page.click(function(){
    		// render()
    		alert()
    	})

    }

    // 测试
    eventHandler()
})()