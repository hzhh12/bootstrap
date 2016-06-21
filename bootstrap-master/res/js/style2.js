$(function() {
	// 切换左侧导航
	$('.metismenu').metisMenu();
	//复选框应用i-check样式
	$('[type="checkbox"]').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
		increaseArea: '20%'
	});

	/*单独固定导航栏*/
	$('#fixed-navbar').on('ifChecked', function() {
			$('.navbar').addClass('navbar-fixed-top');
	})
	//撤销固定导航栏
	$('#fixed-navbar').on('ifUnchecked', function() {
		if (!$('.sidebar').hasClass('sidebar-fixed-left')) {
			$('.navbar').removeClass('navbar-fixed-top');
		}

	})


	//固定侧边栏
	$('#fixed-sidebar').on('ifChecked', function() {
		$('#fixed-navbar').iCheck('check');
		$('#inside').iCheck('uncheck');
		$('.sidebar').addClass('sidebar-fixed-left');
		$('.all').removeClass('container');
	})
	//解除固定侧边栏
	$('#fixed-sidebar').on('ifUnchecked', function() {
		$('#fixed-navbar').iCheck('uncheck');
		$('#fixed-breadcrumb').iCheck('uncheck');
		if ($('.navbar').hasClass('navbar-fixed-top')) {
			$('.navbar').removeClass('navbar-fixed-top');
		}
		$('.sidebar').removeClass('sidebar-fixed-left');
		$('.all').addClass('container');
	})

	//固定面板屑导航
	$('#fixed-breadcrumb').on('ifChecked', function() {
		$('#fixed-navbar').iCheck('check');
		$('#fixed-sidebar').iCheck('check');
		$('#inside').iCheck('uncheck');
		$('.breadcrumb').addClass('fixed-breadcrumb-top');
		$('.all').removeClass('container');
	})
	//撤销固定面板屑导航
	$('#fixed-breadcrumb').on('ifUnchecked', function() {
		$('#fixed-navbar').iCheck('uncheck');
		$('#fixed-sidebar').iCheck('uncheck');
		$('.breadcrumb').removeClass('fixed-breadcrumb-top');
		$('.all').addClass('container');
	})
	//inside .container
   $('#inside').on('ifChecked', function() {
		$('#fixed-navbar').iCheck('uncheck');
		$('#fixed-sidebar').iCheck('uncheck');
		$('#fixed-breadcrumb').iCheck('uncheck');
		//$('.breadcrumb').removeClass('fixed-breadcrumb-top');
		$('.all').addClass('container');
	})

	//皮肤切换：default和inverse
	$('select[name="colorpicker"]').simplecolorpicker({
		picker: false,
		theme: 'regularfont'
	}).on('change', function() {
		var color = $('select[name="colorpicker"]').val();
		//判断侧边栏是否收缩
		if ($('.sidebar').hasClass('min-sidebar')) {
			if ($('.sidebar').hasClass('sidebar-fixed-left')) {
				$('.sidebar').attr('class', 'sidebar min-sidebar sidebar-fixed-left');
			} else {
				$('.sidebar').attr('class', 'sidebar min-sidebar');
			}

		} else {
			if ($('.sidebar').hasClass('sidebar-fixed-left')) {
				$('.sidebar').attr('class', 'sidebar  sidebar-fixed-left');
			} else {
				$('.sidebar').attr('class', 'sidebar ');
			}
		}
		//inverse皮肤
		if (color == '#222') {
			if (!$('.all').hasClass('container')) {
				$('.all').css('background', '#222');
			}
			$('.sidebar').addClass('navbar-inverse');
			$('.container').css('background', '#222');
			if ($('.navbar').hasClass('navbar-default')) {
				$('.navbar').removeClass('navbar-default').addClass('navbar-inverse');
			}
		}
		//default皮肤
		if (color == '#f8f8f8') {
			$('.sidebar').addClass('navbar-default sidebar-skin-1');
			if (!$('.all').hasClass('container')) {
				$('.all').css('background', '#f8f8f8');
			}
			$('.container').css('background', '#f8f8f8');
			if ($('.navbar').hasClass('navbar-inverse')) {
				$('.navbar').removeClass('navbar-inverse').addClass('navbar-default');
			}
		}

	});
})