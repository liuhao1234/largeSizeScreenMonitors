$(function(){
    customScroll(".government-text")
    $.initGdpPieChart({
        domId:"gdpPieChart",
        data:gdpPieData
    })

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