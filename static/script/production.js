$(function(){
    customScroll(".government-text")
    var $webSellData = $(".web-sell-data");
    var $webSellDataValue = $webSellData.find("b strong");
    var $webSellDataName = $webSellData.find("small");
    $.initPieChart({
        domId:"gdpPieChart",
        data:gdpPieData,
        carousel:true,
        carouselFunc:function(params){
            $webSellDataValue.text(params.value)
            $webSellDataName.text(params.name)
        }
    })
    $.initLineChart({
        domId:"gdpLineChart",
        smooth:true,
        carousel:true,
        carouselSpeed:3000,
        data:gdpLineData
    })

    $.init3DBarChart({
        domId:"poorBarChart",
        carousel:true,
        carouselSpeed:4000,
        data:learnRanklineChartData
    })

    $.initPieChart({
        domId:"opulationRatio",
        labelShow:true,
        radius:['45%', '65%'],
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