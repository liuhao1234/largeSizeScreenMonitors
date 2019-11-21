$(function(){
    $.initBarChart({
        domId:"productYieldChart",
        data:yieldData,
        colorType:"blue",
        chartDirection:"horizontal",
        valueAxisName:"单位:吨"
    })

    $.initBarChart({
        domId:"salesRankChart",
        data:yieldData,
        chartDirection:"horizontal",
        valueAxisName:"单位:元"
    })

    $.initBarChart({
        domId:"salesRankCityChart",
        data:yieldData,
        colorType:"blue",
        grid:[30,20,40,50],
        valueAxisName:"单位:元"
    })

    $.initLineChart({
        domId:"salesTrendChart",
        data:salesTrendData,
    })
})