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

    $.initBarChart({
        domId:"learnRankChart",
        grid:[30,20,40,40],
        carousel:true,
        carouselSpeed:3000,
        data:learnRanklineChartData
    })

    $.initMapChart({
        domId:"logisticsMapChart",
        mapName:"wafangdian",
        mapCenter:["35%","50%"],
        legendPosition:{
            top: 100,
            left: 10
        },
        mapSize:"75%",
        data:WFDMapData
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