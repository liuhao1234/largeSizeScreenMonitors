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
    var index = 0;
    $.initMapChartPoint({
        domId : 'mapChartPoint',
        mapName:'wafangdian',
        mapCenter:["40%","40%"],
        mapSize:"70%",
        data : pointData,
        coordMap:coordMap,
        onclick:function(params){
            // console.log(params)
            if(index%2){
                var pathData = pathData02
            }else{
                var pathData = pathData01
            }
            index++
            $.initMapChartPath({
                domId : 'mapChartPath',
                mapName:'china',
                mapCenter:["50%","50%"],
                mapSize:"100%",
                lengendShow:false,
                data : pathData,
                coordMap:coordMap
            })
        }
    })
    $.initMapChartPath({
        domId : 'mapChartPath',
        mapName:'china',
        mapCenter:["50%","50%"],
        mapSize:"100%",
        lengendShow:false,
        data : pathData01,
        coordMap:coordMap
    })
})