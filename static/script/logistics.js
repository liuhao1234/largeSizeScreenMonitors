$(function(){
    $(".nav").delegate("li","click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    initOrderList(orderList)
    
    $('#myScroll').myScroll({
        speed: 30, //数值越大，速度越慢
    });

    $('#resultInfo').txtScroll({
        speed: 30, //数值越大，速度越慢
    });

    $.initRankLineChart({
        domId:"learnRankChart",
        data:learnRanklineChartData
    })

    $.initMapChart({
        domId:"logisticsMapChart",
        data:mapSeries02
    })
})

function initOrderList(data){
    var $list = $("#myScroll").find("dl");
    var str = "";
    $.each(orderList,function(index,value){
        str += "<dt>"+value.time+"</dt>"
        $.each(value.list,function(index,value){
            str+= "<dd class='"+(value.errno?"unusual":"")+"'><span>"+value.msg+"</span></dd>"
        })
    })
    $list.append(str);
}