/**
 * Created by Administrator on 2016/6/16.
 */
$(function () {
     $('.sidebar-close').click(function(){
            $('.sidebar').css('width','50px');
            $('.content').css({marginLeft:50});
           $('.sidebar-open').show();
           $(this).hide();
           $('.sidebar').addClass('min-sidebar');
       
      })
      $('.sidebar-open').click(function(){
           $('.sidebar').css('width','220px');
            $('.content').css({marginLeft:220});
           $('.sidebar-close').show();
           $(this).hide();
           $('.sidebar').removeClass('min-sidebar');
      })
     $('.sidebar-signed').click(function(){
            $(".sidebar").removeClass('min-sidebar')
             $(".sidebar").toggle();
             $('.sidebar-open').hide();
        })
    pageInitModule.setView();
    pageInitModule.setSidebar();
   
})
$(window).resize(function () {
    pageInitModule.setSidebar();
})

$(window).scroll(function () {
    pageInitModule.setScrollToTop();
});

/*
 * init page when page load
 */
var pageInitModule = (function (mod) {
    
    mod.setView = function () {
        if ($(window).width() < 768) {
            
            $(".content").css({ marginLeft: 0 });
             $(".sidebar").removeClass('min-sidebar');
            $('.sidebar').css('width','100%');

        } else {
             $(".content").css({ marginLeft: 220 });
            if($(".sidebar").hasClass('min-sidebar')){
                $(".sidebar").css({ left: 0 });
                $(".sidebar").removeClass('min-sidebar');
                 $('.sidebar').css('width','220px');
            }
        }
        

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
        if($(window).width() > 768){
            $('.content').css({marginLeft:220});
            $('.sidebar').css({width:220});
            $('.sidebar').show();
           $('.sidebar-open').hide();
           $('.sidebar-close').show();
            $(".sidebar").removeClass('min-sidebar');
        }else{
            $('.sidebar').css("width","100%");
            $('.sidebar').hide();
            $('.content').css({marginLeft:0});
            $('.sidebar-open').hide();
           $('.sidebar-close').hide();
            $(".sidebar").removeClass('min-sidebar');
        }

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
