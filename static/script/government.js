$(function(){
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