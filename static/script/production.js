$(function(){
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

    $(".product-panel").click(function(ev){
        $(".product-detail-content").fadeIn();
        console.log(ev)
        var index = $(ev.currentTarget).data("id");
        var txt,imgUrl
        console.log(index)
        switch (index) {
            case 0:
                txt = "地瓜"
                imgUrl = "../static/images/digua.png"
                break;
            case 1:
                txt = "樱桃"
                imgUrl = "../static/images/yingtao.png"
                break;
            case 2:
                txt = "苹果"
                imgUrl = "../static/images/pingguo.png"
                break;
            case 3:
                txt = "葡萄"
                imgUrl = "../static/images/putao.png"
                break;
            default:
                break;
        }
        $(".detail-title").text(txt);
        $(".detail-img").attr("src",imgUrl);
        showDetail();
    })
    $(".close_detail").click(function(){
        $(".product-detail-content").fadeOut();
    })
})

function showDetail(){
    $.initBarChart({
        domId:"productYieldChart",
        data:yieldData,
        colorType:"blue",
        barWidth:10,
        carousel:true,
        chartDirection:"horizontal",
        valueAxisName:"单位:吨"
    })

    $.initBarChart({
        domId:"salesRankChart",
        data:yieldData,
        barWidth:10,
        carousel:true,
        chartDirection:"horizontal",
        valueAxisName:"单位:元"
    })

    $.initBarChart({
        domId:"salesRankCityChart",
        data:yieldData,
        barWidth:16,
        carousel:true,
        colorType:"blue",
        grid:[30,20,40,50],
        valueAxisName:"单位:元"
    })

    $.initLineChart({
        domId:"salesTrendChart",
        carousel:true,
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
}