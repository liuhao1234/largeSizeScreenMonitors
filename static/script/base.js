$(function(){
    $(".nav").delegate("li","click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})