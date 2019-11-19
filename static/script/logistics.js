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

    var rankBarChart = $.initRankBarChart({
        domId:"learnRankChart",
        data:learnRanklineChartData
    })

    rankBarChartCarousel(rankBarChart)

    $.initMapChart({
        domId:"logisticsMapChart",
        data:mapSeries02
    })
})
function rankBarChartCarousel(rankBarChart){
    var index = 0;
    rankBarChart.dispatchAction({
        type:"highlight",
        seriesIndex: 0,
        dataIndex: index
    })
    rankBarChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
    });
    rankBarChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
    });
    index++
    setInterval(function(){
        rankBarChart.dispatchAction({
            type:"highlight",
            seriesIndex: 0,
            dataIndex: index
        })
        rankBarChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index
        });
        rankBarChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index
        });
        index++
        if(index === learnRanklineChartData.length){
            index = 0
        }
    },3000)
}
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