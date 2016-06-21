/**
 * Created by Administrator on 2016/6/16.
 */
$(function () {
    pageInitModule.setView();
    pageInitModule.setSidebar();
    //pageInitModule.setCarousel();

  //面板隐藏
    $('.panel-heading .panel-toggle ').click(function() {
        var data_icon1 = $(this).data('icon1');
        var data_icon2 = $(this).data('icon2');
        if ($(this).hasClass('' + data_icon1 + '')) {
            $(this).removeClass('' + data_icon1 + '');
            $(this).addClass('' + data_icon2 + '');
            $(this).closest('.panel').find('.panel-body').hide();
        } else {
            $(this).removeClass('' + data_icon2 + '');
            $(this).addClass('' + data_icon1 + '');
            $(this).closest('.panel').find('.panel-body').show();
        }

    })
    //面板关闭
    $('.panel-close').click(function() {
        $(this).closest('.panel').hide();
    })
})
$(window).resize(function () {
    pageInitModule.setView();
    pageInitModule.setSidebar();
})
$(window).scroll(function () {
    pageInitModule.setScrollToTop();
});



/*
 * init page when page load
 */
var pageInitModule = (function (mod) {
    //mod.setCarousel = function () {
    //    try {
    //        $('.carousel').hammer().on('swipeleft', function () {
    //            $(this).carousel('next');
    //        });
    //        $('.carousel').hammer().on('swiperight', function () {
    //            $(this).carousel('prev');
    //        });
    //    } catch (e) {
    //        console.log("you mush import hammer.js and jquery.hammer.js to let the carousel can be touched on mobile");
    //    }
    //};
    //设置导航栏隐藏和显示
    mod.setView = function () {
        if ($(window).width() < 768) {
            $(".navbar-form").hide();
            $(".navbar-nav").hide();
            $(".sidebar").css({ left: -220 });
            $(".all").css({ marginLeft: 0 });

        } else {
            $(".navbar-form").show();
            $(".navbar-nav").show();
            $(".sidebar").css({ left: 0 });
            if($(".sidebar").hasClass('min-sidebar')){
                $(".sidebar").animate({ left: 0 },"fast");
                $(".sidebar").removeClass('min-sidebar')
            }
           // $(".sidebar").addClass('min-sidebar');
            $(".all").css({ marginLeft: 220 })
        }
        $('#navbar-toggle').click(function(){
            $(".navbar-nav").toggle();
        })

    };
    mod.setScrollToTop = function () {
        var top = $(window).scrollTop();
        if (top < 60) {
            $('#goTop').hide();
        } else {
            $('#goTop').show();
        }
    };
    mod.setSidebar = function () {
        //菜单折叠和折叠按钮切换
        $('.search-toggle').click(function() {
            var data_icon1 = $(this).data('icon1');
            var data_icon2 = $(this).data('icon2');
            if ($(this).hasClass('' + data_icon1 + '')) {
                $(this).removeClass('' + data_icon1 + '');
                $(this).addClass('' + data_icon2 + '');
                $('.sidebar-search').css({ left:- 210 });
                return;
            } else {
                //$('.sidebar').removeClass('menu-min');
                $(this).removeClass('' + data_icon2 + '');
                $(this).addClass('' + data_icon1 + '');
                $('.sidebar-search').css({ left: 210 });
                return;
            }
        })


        $('[data-target="sidebar"]').click(function () {
            var asideleft = $(".sidebar").offset().left;
            var width=$(window).width();
            if (asideleft == 0) {
                if(width > 768){
                    $(".sidebar").animate({ left: -175 },"fast");
                    $(".sidebar").addClass('min-sidebar');
                    $(".all").animate({ marginLeft: 45 },"fast");
                }else{
                    $(".sidebar").animate({ left: -220 },"fast");
                    $(".all").animate({ marginLeft: 0 },"fast");
                }
                //$(".sidebar").animate({ left: -220 });

            }
            else {
                $(".sidebar").removeClass('min-sidebar');
                $(".sidebar").animate({ left: 0 },"fast");
                $(".all").animate({ marginLeft: 220 },"fast");
            }
        });

        //单击激活当前选中的菜单项
        var _strcurrenturl = window.location.href;
        $(".metismenu li").each(function() {
            var isSelect = false;
            var currentTarget = $(this);
            $(".breadcrumb>li a").each(function(index) {
                if (currentTarget.find("a").attr("href") == $(this).attr("href")&&currentTarget.find("a").attr("href")!='#') {
                    isSelect = true;
                    return false;
                }
            })
            if (_strcurrenturl.indexOf($(this).find(">a").attr("href")) > -1 & isSelect) {
                $(this).addClass("select");
                if ($(this).parent().attr("class") == "submenu") {
                    $(this).parents(".has-sub").addClass("select");
                }
            }
        });
    }
    return mod;
})(window.pageInitModule || {});
