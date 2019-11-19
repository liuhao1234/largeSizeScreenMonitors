$(function(){
    customScroll(".government-text")
    var gdpPieChart = $.initGdpPieChart({
        domId:"gdpPieChart",
        data:gdpPieData
    })
    var $webSellData = $(".web-sell-data");
    var $webSellDataValue = $webSellData.find("b strong");
    var $webSellDataName = $webSellData.find("small");
    $.chartCarousel({
        chartObj:gdpPieChart,
        chartData:gdpPieData,
        callback:function(params){
            $webSellDataValue.text(params.value)
            $webSellDataName.text(params.name)
        }
    })
    var gdpLineChart = $.initGdpLineChart({
        domId:"gdpLineChart",
        data:gdpLineData,
    })

    $.chartCarousel({
        chartObj:gdpLineChart,
        chartData:gdpLineData,
        speed:3000
    })

    var poorConditionBarChart = $.init3DBarChart({
        domId:"poorBarChart",
        data:learnRanklineChartData
    })

    $.chartCarousel({
        chartObj:poorConditionBarChart,
        chartData:learnRanklineChartData,
        speed:4000
    })

    $.initePopulationRatioPieChart({
        domId:"opulationRatio",
        data:opulationRatioData
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