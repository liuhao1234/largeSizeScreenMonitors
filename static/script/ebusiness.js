$(function(){
    initSellRankList(sellRankList)
    $('#sellRank').myScroll({
        speed: 30, //数值越大，速度越慢
    });
    $.timeProcessLine({
        container:"#timeProcess"
    })
    // 自定义滚动条
    $.customScroll('.custom-scroll')

    $.initMapChartPath({
        domId:"sellMapChart",
        legendPosition:{
            bottom: 10,
            left: 10
        },
        data:chinaMapData,
        coordMap:coordMap
    })
    $.initLineChart({
        domId:"sellIncreaseChart",
        smooth:false,
        valueAxisName:"单位:%",
        carousel:true,
        carouselSpeed:3000,
        data:sellIncreaseLineData
    })

    var $brandPieData = $(".brand-pie-text");
    var $brandPieValue = $brandPieData.find("b strong");
    var $brandPieName = $brandPieData.find("small");
    $.initPieChart({
        domId:"brandPieChart",
        data:gdpPieData02,
        carousel:true,
        carouselFunc:function(params){
            $brandPieValue.text(params.value)
            $brandPieName.text(params.name)
        }
    })
    var $customerPieData = $(".customer-pie-text");
    var $customerPieValue = $customerPieData.find("b strong");
    var $customerPieName = $customerPieData.find("small");
    $.initPieChart({
        domId:"customerPieChart",
        data:gdpPieData03,
        carousel:true,
        carouselFunc:function(params){
            $customerPieValue.text(params.value)
            $customerPieName.text(params.name)
        },
        tooltipFormatter:function(params){
            return params.name+"<br/>占比:"+params.percent+"%<br/>人数:"+params.value+"人"
        }
    })

    $.initBarChart({
        domId:"cityRankChart",
        carousel:true,
        carouselSpeed:3000,
        valueAxisName:"单位:亿元",
        colorType:"blue",
        barWidth:10,
        labelShow:false,
        grid:[20,20,20,40],
        data:learnRanklineChartData
    })
})

function initSellRankList(data){
    var $list = $("#sellRank").find("ul");
    var str = "";
    $.each(data,function(index,value){
        str += "<li><i>"+(index+1)+"</i><span>"+value.name+"</span><b>"+$.thousandSeparator(value.value)+"</b></li>"
    })
    $list.append(str);
}