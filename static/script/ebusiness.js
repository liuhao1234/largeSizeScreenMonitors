$(function(){
    initSellRankList(sellRankList)
    $('#sellRank').myScroll({
        speed: 30, //数值越大，速度越慢
    });
    $.timeProcessLine({
        container:"#timeProcess"
    })
    // 自定义滚动条
    customScroll('.custom-scroll')

    $.initLogisticsMapChart({
        domId:"sellMapChart",
        data:mapSeries
    })
    var gdpLineChart = $.initGdpLineChart({
        domId:"sellIncreaseChart",
        smooth:false,
        yAxisName:"单位:%",
        data:sellIncreaseLineData
    })
    $.chartCarousel({
        chartObj:gdpLineChart,
        chartData:sellIncreaseLineData,
        speed:3000
    })
    var brandPieChart = $.initGdpPieChart({
        domId:"brandPieChart",
        data:gdpPieData02
    })
    var $brandPieData = $(".brand-pie-text");
    var $brandPieValue = $brandPieData.find("b strong");
    var $brandPieName = $brandPieData.find("small");
    $.chartCarousel({
        chartObj:brandPieChart,
        chartData:gdpPieData02,
        callback:function(params){
            $brandPieValue.text(params.value)
            $brandPieName.text(params.name)
        }
    })
    var customerPieChart = $.initGdpPieChart({
        domId:"customerPieChart",
        data:gdpPieData03,
        tooltipFormatter:function(params){
            return params.name+"<br/>占比:"+params.percent+"%<br/>人数:"+params.value+"人"
        }
    })
    var $customerPieData = $(".customer-pie-text");
    var $customerPieValue = $customerPieData.find("b strong");
    var $customerPieName = $customerPieData.find("small");
    $.chartCarousel({
        chartObj:customerPieChart,
        chartData:gdpPieData03,
        callback:function(params){
            $customerPieValue.text(params.value)
            $customerPieName.text(params.name)
        }
    })
    var cityRankChart = $.initSellBarChart({
        domId:"cityRankChart",
        data:learnRanklineChartData
    })
    $.chartCarousel({
        chartObj:cityRankChart,
        chartData:learnRanklineChartData,
        speed:3000
    })
})

function customScroll(selector){
    var bars = '.jspHorizontalBar, .jspVerticalBar';
    $(selector).bind('jsp-initialised', function (event, isScrollable) {
        $(this).find(bars).hide();
    }).jScrollPane().hover(
        function () {
            $(this).find(bars).stop().fadeTo('fast', 0.9);
        },
        function () {
            $(this).find(bars).stop().fadeTo('fast', 0);
        }
    );	
}

function initSellRankList(data){
    var $list = $("#sellRank").find("ul");
    var str = "";
    $.each(data,function(index,value){
        str += "<li><i>"+(index+1)+"</i><span>"+value.name+"</span><b>"+value.value+"</b></li>"
    })
    $list.append(str);
}