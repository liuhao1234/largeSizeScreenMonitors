$(function(){
    customScroll(".government-text")
    var gdpPieChart = $.initGdpPieChart({
        domId:"gdpPieChart",
        data:gdpPieData
    })
    gdpPieChartCarousel(gdpPieChart);
    $.initGdpLineChart({
        domId:"gdpLineChart",
        data:gdpLineData
    })

    $.initPoorConditionBarChart({
        domId:"poorBarChart",
        data:""
    })

    $.initePopulationRatioPieChart({
        domId:"opulationRatio",
        data:opulationRatioData
    })
    
})
function gdpPieChartCarousel(gdpPieChart){//chart轮播
    var index = 0;
    var $webSellData = $(".web-sell-data");
    var $webSellDataValue = $webSellData.find("b");
    var $webSellDataName = $webSellData.find("small");
    var curData = gdpPieData[index++];
    $webSellDataValue.text(curData.value)
    $webSellDataName.text(curData.name)
    gdpPieChart.dispatchAction({
        type:"highlight",
        name:curData.name
    })
    setInterval(function(){
        var curData = gdpPieData[index++];
        $webSellDataValue.text(curData.value)
        $webSellDataName.text(curData.name)
        gdpPieChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0
        });
        gdpPieChart.dispatchAction({
            type:"highlight",
            name:curData.name
        })
        if(index === gdpPieData.length){
            index = 0
        }
    },5000)
}

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