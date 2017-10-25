app.directive("ly",function(){
    return {
        templateUrl:"./App/View/temp/_ly.html",
        controller:"lyController",
        link:function(scope,ele,attr){
            var swiper = new Swiper(".swiper-container",{
                autoplay:2000,
                loop:true,
                pagination:".swiper-pagination"
            })
            $(".box2").eq(0).show().siblings(".box2").hide();
            $("header").on("click","span",function(){
                var index = $(this).index();
                $(this).addClass("bg").siblings().removeClass("bg");
                $(".box2").eq(index).show().siblings(".box2").hide();
            })
            $(".foot").on("click","a",function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
            
       }
    }
})