(function($){
    $.extend({
        initMapChartPath : function(options){
			var defs = {
                domId : '',
                mapName:'china',
                mapCenter:["50%","50%"],
                mapSize:"100%",
                lengendShow:true,
                legendPosition:{
                    top: "auto",
                    left: "auto",
                    right: "auto",
                    bottom: "auto"
                },
                data : '',
                coordMap:''
            }
			var opts = $.extend({},defs,options);
			var dom = document.getElementById(opts.domId);
            var myChart = echarts.getInstanceByDom(dom);
            if(myChart){
            	myChart.clear();
            }else{
            	myChart = echarts.init(dom);
            }

            var legendData = getLegend(opts.data);
            
            var seriseData = $.getMapSeriesPath(opts.data,opts.coordMap)

            function getLegend(data){
                var result = [];
                $.each(data,function(index,value){
                    result.push(value.name);
                })
                return result;
            }

            var option = {
                    legend: {
                        show:opts.lengendShow,
                        orient: 'vertical',
                        top: opts.legendPosition.top||"auto",
                        left: opts.legendPosition.left||"auto",
                        bottom: opts.legendPosition.bottom||"auto",
                        right: opts.legendPosition.right||"auto",
                        data:legendData,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    geo: {
                        map: opts.mapName,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        layoutCenter: opts.mapCenter,
                        // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
                        layoutSize: opts.mapSize,
                        zoom:1,
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: 'rgba(25,193,195,.7)',
                                borderColor: 'rgba(25,193,195,1)'
                            },
                            emphasis: {
                                areaColor: 'rgba(25,193,195,.8)'
                            }
                        }
                    },
		            series: seriseData
	        }

	        myChart.setOption(option);

			$(window).resize(function(){
				myChart.resize();
			})

			return myChart
        },

        initMapChartPoint : function(options){
            var defs = {
                domId : '',
                mapName:'china',
                mapCenter:["50%","50%"],
                mapSize:"100%",
                labelFormatter:function(params){
                    return params.name+"("+params.value[2]+")"
                },
                data : '',
                coordMap:'',
                onclick:function(params){}
            }
			var opts = $.extend({},defs,options);
			var dom = document.getElementById(opts.domId);
            var myChart = echarts.getInstanceByDom(dom);
            if(myChart){
            	myChart.clear();
            }else{
            	myChart = echarts.init(dom);
            }
            var symbolSize = getSymbolSize(opts.data)
            var seriesData = $.getMapSeriesPoint(opts.data,opts.coordMap)

            function getSymbolSize(data){
                var values = []
                var maxSize = 25
                $.each(data,function(index,value){
                    values.push(value.value)
                })
                var valueMax = Math.max.apply(null,values);
                // console.log(Math.floor(valueMax/20))
                return Math.floor(valueMax/maxSize)
            }
            // console.log(seriesData)
            var option = {
                legend: {
                    show:false
                },
                geo: {
                    map: opts.mapName,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    layoutCenter: opts.mapCenter,
                    layoutSize: opts.mapSize,
                    zoom:1,
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(25,193,195,.7)',
                            borderColor: 'rgba(25,193,195,1)'
                        },
                        emphasis: {
                            areaColor: 'rgba(25,193,195,.8)'
                        }
                    }
                },
                series : {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: seriesData,
                    symbolSize: function (val) {
                        // console.log(val[2]/symbolSize)
                        return val[2]/symbolSize;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: opts.labelFormatter,
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffa022',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }
            };

            myChart.setOption(option);

			$(window).resize(function(){
				myChart.resize();
            })
            opts.onclick(opts.data[0])
            myChart.on("click",function(params){
                if(params.componentType !== "series") return
                // console.log(params)
                var seriesData = $.getMapSeriesPoint(opts.data,opts.coordMap,params.dataIndex)
                opts.onclick(opts.data[params.dataIndex])
                myChart.setOption({
                    series:{
                        data:seriesData
                    }
                })
            })

			return myChart
        },

        initPieChart:function(options){
            var defs = {
                domId:"",
                labelShow:false,
                carousel:false,
                carouselSpeed:5000,
                carouselFunc:function(params){},
                radius:['55%', '85%'],
                lableFormatter:function(params){
                    return params.name+":"+params.percent+"%"+"\n金额:"+Number(params.value).toLocaleString()+"亿元"
                },
                ttFormatter:function(params){
                    return params.name+"<br/>占比:"+params.percent+"%<br/>金额:"+params.value+"亿元"
                },
                data:""
            }

            var opts = $.extend({},defs,options);
        	var dom = document.getElementById(opts.domId);
            var myChart = echarts.getInstanceByDom(dom);

            if(myChart){
            	myChart.clear();
            }else{
            	myChart = echarts.init(dom);
            }

            var color01 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#4ef19c' // 0% 处的颜色
                    },{
                        offset: 0.5,
                        color: '#2cffc1' // 50% 处的颜色
                    },{
                        offset: 1,
                        color: '#1eebcc' // 100% 处的颜色
                    }
                ])
            var color02 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ffd74d' // 0% 处的颜色
                    },{
                        offset: 0.5,
                        color: '#ffb24d' // 50% 处的颜色
                    },{
                        offset: 1,
                        color: '#ff944d' // 100% 处的颜色
                    }
                ])
            var color03 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#52c0ff' // 0% 处的颜色
                },{
                    offset: 0.5,
                    color: '#52e9ff' // 50% 处的颜色
                },{
                    offset: 1,
                    color: '#52ffed' // 100% 处的颜色
                }
            ])
            var color04 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5345dc' // 0% 处的颜色
                },{
                    offset: 0.5,
                    color: '#6a5de9' // 50% 处的颜色
                },{
                    offset: 1,
                    color: '#867de0' // 100% 处的颜色
                }
            ])
            var colors = [color01,color02,color03,color04]
            var outerData = [];
            var innerData = [];
            var innerRadius = getInnerRadius(opts.radius);

            function getInnerRadius(data){
                var radius = [];
                $.each(data,function(index,value){
                    var rediu = "";
                    if(index === 0){
                        rediu = parseInt(value)-10+"%"
                    }else{
                        rediu = parseInt(value)+10+"%"
                    }
                    radius.push(rediu)
                })
                return radius;
            }

            function getSeriesData(data){
                // console.log(data)
                $.each(data,function(index,value){
                    outerData.push({
                        value: value.value,
                        name: value.name,
                        itemStyle: {
                            normal:{
                                color:colors[index]
                            }
                        }
                    })
                    innerData.push({
                        value: value.value,
                        name: value.name,
                        itemStyle: {
                            normal:{
                                opacity: 0.4,
                                color:colors[index]
                            }
                        }
                    })
                })
            }
            getSeriesData(opts.data)

            var option = {
                title: {
                    show:false,
                    text: '作业管理',
                    textStyle: {
                        color: '#fff',
                    }
                },
                tooltip: {
                    show: true,
                    confine:true,
                    formatter:opts.ttFormatter
                },
                series: [
                {
                    type: 'pie',//内圆
                    radius: opts.radius,
                    center: ['50%', '50%'],
                    hoverAnimation: true,
                    hoverOffset:5,
                    z: 10,
                    label:{
                        normal:{
                            show:false
                        }
                    },
                    data: outerData
                },{
                    type: 'pie',
                    radius: innerRadius,
                    center: ['50%', '50%'],
                    hoverAnimation: false,
                    label:{
                        normal:{
                            show:opts.labelShow,
                            color:"#9bdef0",
                            formatter: opts.lableFormatter
                        }
                    },
                    data: innerData
                }
                ],
            };

            myChart.setOption(option);
            $(window).resize(function(){
                myChart.resize();
            });
            if(opts.carousel){
                $.chartCarousel({
                    chartObj:myChart,
                    chartData:opts.data,
                    speed:opts.carouselSpeed,
                    callback:opts.carouselFunc
                })
            }
            return myChart;
        },

        initLineChart:function(options){
            var defs = {
                domId:"",
                data:"",
                valueAxisName:"单位:亿元",
                smooth:false,
                carousel:false,
                carouselSpeed:5000,
                carouselFunc:function(params){},
                grid:[40,20,40,50],
                ttformatter:function(params){//tooltip的formatter
                    var data = params[0];
                    return data.name+":"+data.value
                },
            }

            var opts = $.extend({},defs,options);
        	var dom = document.getElementById(opts.domId);
            var myChart = echarts.getInstanceByDom(dom);

            if(myChart){
            	myChart.clear();
            }else{
            	myChart = echarts.init(dom);
            }

            var xAxisData = [];
            var seriesData = [];
            var gridData = getGrid(opts.grid)
            var color01 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { 
                    offset: 0,  
                    color: 'rgba(0,249,223, 0.9)'
                },{ 
                    offset: 0.7,  
                    color: 'rgba(0,249,223, 0)'
                }
            ])

            function getSeriesData(data){
                $.each(data,function(index,value){
                    xAxisData.push(value.name)
                    seriesData.push(value.value)
                })
            }
            function getGrid(data){
                return {
                    top: data[0],
                    right: data[1],
                    bottom: data[2],
                    left: data[3]
                }
            }
            getSeriesData(opts.data)

            var option = {
                tooltip:{
                    trigger:"axis",
                    axisPointer:{
                        type:"line",
                        lineStyle:{
                            width:2,
                            color:"#00ffff",
                            opacity:0.2
                        }
                    },
                    confine:true,
                    formatter:opts.ttformatter
                },
                grid: gridData,
                xAxis: [{
                    type: 'category',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#9bdef0'
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#9bdef0',
                        },
                    },
                    axisTick: {
                        show:true,
                        alignWithLabel:true,
                        lineStyle: {
                            color: '#9bdef0'
                        }
                    },
                    data: xAxisData
                }],
                yAxis: [{
                    type: 'value',
                    name:opts.valueAxisName,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#9bdef0',
                            type:'dashed',
                            opacity:0.2
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#9bdef0'
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#9bdef0',
                        },
                    },
                    axisTick: { 
                        show: false
                    }
                }],
                series: [{
                    type: 'line',
                    smooth: opts.smooth,
                    symbol:"circle",
                    symbolSize:6,
                    itemStyle:{
                        normal:{
                            color:"#00f9df",
                            shadowColor:"rgba(86,255,237,.8)",
                            shadowBlur:2,
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: "#00f9df",
                            shadowColor:"rgba(86,255,237,.8)",
                            shadowBlur:5,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: color01,
                            shadowColor: '#0d1d4d',
                            shadowBlur: 20
                        }
                    },
                    data: seriesData
                }]
            };

            myChart.setOption(option);
            $(window).resize(function(){
                myChart.resize();
            });

            if(opts.carousel){
                $.chartCarousel({
                    chartObj:myChart,
                    chartData:opts.data,
                    speed:opts.carouselSpeed,
                    callback:opts.carouselFunc
                })
            }

            return myChart;
        },

        initBarChart:function(options){
            var defs = {
                domId:"",
                data:"",
                chartDirection:"vertical",//图表方向
                valueAxisName:"单位:吨",//图表数值轴名称
                colorType:"green",
                labelShow:true,
                barWidth:14,
                grid:[20,60,40,65],
                carousel:false,
                carouselSpeed:5000,
                carouselFunc:function(params){},
                ttFormatter:function(params){
                    var data = params[0];
                    return data.marker+data.name+":"+data.value
                }
            }

            var opts = $.extend({},defs,options);
        	var dom = document.getElementById(opts.domId);
            var myChart = echarts.getInstanceByDom(dom);

            if(myChart){
            	myChart.clear();
            }else{
            	myChart = echarts.init(dom);
            }
            
            var categoryAxisData = [];
            var seriesData = [];
            getSeriesData(opts.data);
            var gridData = getGrid(opts.grid)
            var colorDirection,xAxis,yAxis,labelPosition
            
            var categoryAxis = [{
                type: 'category',
                data: categoryAxisData,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#9bdef0'
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#9bdef0',
                    },
                },
                axisTick: {
                    show:true,
                    alignWithLabel:true,
                    lineStyle: {
                        color: '#9bdef0'
                    }
                },
            }]
            var valueAxis = [{
                name:opts.valueAxisName,
                nameLocation:"end",
                nameGap:8,
                nameTextStyle:{
                    align:"left",
                    fontSize:12
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#9bdef0',
                        type:'dashed',
                        opacity:0.2
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#9bdef0'
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#9bdef0',
                    },
                },
                axisTick: { 
                    show: false
                }
            }]
            initDirection();
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            var color01 = new echarts.graphic.LinearGradient(colorDirection.left, colorDirection.bottom, colorDirection.right, colorDirection.top, [{
                offset: 0,
                color: 'rgba(0,242,253,1)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(13,29,77,1)' // 100% 处的颜色
            }])

            var color02 = new echarts.graphic.LinearGradient(colorDirection.left, colorDirection.bottom, colorDirection.right, colorDirection.top, [{
                offset: 0,
                color: 'rgba(34,251,186,1)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(13,29,77,1)' // 100% 处的颜色
            }])
            var colors = {
                "blue":color01,
                "green":color02,
            }
            function getSeriesData(data){
                $.each(data,function(index,value){
                    categoryAxisData.push(value.name)
                    seriesData.push(value.value)
                })
            }
            function initDirection(){
                if(opts.chartDirection === "vertical"){
                    xAxis = categoryAxis
                    yAxis = valueAxis
                    labelPosition = "top"
                    colorDirection = {
                        left:0,
                        bottom:0,
                        right:0,
                        top:1
                    }
                }else if(opts.chartDirection === "horizontal"){
                    xAxis = valueAxis
                    yAxis = categoryAxis
                    labelPosition = "right"
                    colorDirection = {
                        left:1,
                        bottom:0,
                        right:0,
                        top:0
                    }
                }
                
            }
            function getGrid(data){
                return {
                    top: data[0],
                    right: data[1],
                    bottom: data[2],
                    left: data[3]
                }
            }
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer:{
                        type:"shadow",
                        shadowStyle:{
                            color:"#00ffff",
                            opacity:0.1
                        }
                    },
                    confine:true,
                    formatter:opts.ttFormatter
                },
                grid: gridData,
                xAxis: xAxis,
                yAxis: yAxis,
                series: [{
                    type: 'bar',
                    data: seriesData,
                    barWidth: opts.barWidth,
                    label:{
                        normal:{
                            show:opts.labelShow,
                            position:labelPosition,
                            color:'#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colors[opts.colorType],
                            barBorderRadius: [30, 30, 30, 30]
                        }
                    }
                }]
            };

            myChart.setOption(option);
            $(window).resize(function(){
                myChart.resize();
            });

            if(opts.carousel){
                $.chartCarousel({
                    chartObj:myChart,
                    chartData:opts.data,
                    speed:opts.carouselSpeed,
                    callback:opts.carouselFunc
                })
            }

            return myChart;
        },

        init3DBarChart:function(options){
            var defs = {
                domId:"",
                carousel:false,
                carouselSpeed:5000,
                carouselFunc:function(params){},
                data:""
            }

            var opts = $.extend({},defs,options);
        	var dom = document.getElementById(opts.domId);
            var myChart = echarts.getInstanceByDom(dom);

            if(myChart){
            	myChart.clear();
            }else{
            	myChart = echarts.init(dom);
            }
            var xAxisData = [];
            var seriesData = [];

            function getSeriesData(data){
                $.each(data,function(index,value){
                    xAxisData.push(value.name)
                    seriesData.push(value.value)
                })
            }
            getSeriesData(opts.data)
            var option = {
                tooltip:{
                    trigger:"axis",
                    axisPointer:{
                        type:"shadow",
                        shadowStyle:{
                            color:"#00ffff",
                            opacity:0.1
                        }
                    },
                    confine:true,
                    formatter:function(params){
                        var data = params[0];
                        return data.marker+data.name+":"+data.value
                    }
                },
                grid: {
                    top: '40',
                    left: '60',
                    right: '20',
                    bottom: '40'
                },
                xAxis: [{
                    type: 'category',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#9bdef0'
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#9bdef0',
                        },
                    },
                    axisTick: {
                        show:true,
                        alignWithLabel:true,
                        lineStyle: {
                            color: '#9bdef0'
                        }
                    },
                    data: xAxisData
                }],
                yAxis: [{
                    type: 'value',
                    name:"单位：亿元",
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#9bdef0',
                            type:'dashed',
                            opacity:0.2
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#9bdef0'
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#9bdef0',
                        },
                    },
                    axisTick: { 
                        show: false
                    }
                }],
                series: [{
                    name: 'leftA',
                    type: 'bar',
                    barWidth: 10,
                    barGap: 0,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { 
                                    offset: 0,  
                                    color: 'rgba(1,237,253, 1)'
                                },{ 
                                    offset: 1,  
                                    color: 'rgba(0,87,91, 1)'
                                }
                            ]),
                            opacity: 1
                        }
                    },
                    data: seriesData
                },{
                    name: 'rightA',
                    tooltip: {
                        show: false
                    },
                    type: 'bar',
                    barWidth: 10,
                    barGap: 0,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { 
                                    offset: 0,  
                                    color: 'rgba(34,198,201, 1)'
                                },{ 
                                    offset: 1,  
                                    color: 'rgba(1,89,92, 1)'
                                }
                            ]),
                            opacity: .8
                        }
                    },
                    data: seriesData,
                },{
                    name: 'topA',
                    tooltip: {
                        show: false
                    },
                    type: 'pictorialBar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                { 
                                    offset: 0,  
                                    color: 'rgba(34,198,201, 1)'
                                },{ 
                                    offset: 1,  
                                    color: 'rgba(1,237,253, 1)'
                                }
                            ]),
                            borderWidth: 1,
                            borderColor: 'rgb(0,0,0,0.1)'
                        }
                    },
                    symbol: 'rect',
                    symbolRotate: 45,
                    symbolSize: ['14', '14'],
                    symbolOffset: ['0', '-7'],
                    symbolPosition: 'end',
                    data: seriesData,
                    z: 3
                },]
            };

            myChart.setOption(option);
            $(window).resize(function(){
                myChart.resize();
            });
            if(opts.carousel){
                $.chartCarousel({
                    chartObj:myChart,
                    chartData:opts.data,
                    speed:opts.carouselSpeed,
                    callback:opts.carouselFunc
                })
            }
            return myChart;
        },

        chartCarousel:function(options){
            var defs = {
                chartObj:"",
                chartData:"",
                speed:5000,
                callback:function(params){

                }
            }
            var opts = $.extend({},defs,options);
            var index = 0;
            var chart = opts.chartObj;
            var chartDataLength = opts.chartData.length
            chart.dispatchAction({
                type:"highlight",
                seriesIndex: 0,
                dataIndex: index
            })
            chart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
            });
            opts.callback(opts.chartData[index])
            index++
            setInterval(function(){
                chart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0
                });
                chart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: index
                });
                chart.dispatchAction({
                    type:"highlight",
                    seriesIndex: 0,
                    dataIndex: index
                })
                opts.callback(opts.chartData[index])
                index++
                if(index === chartDataLength){
                    index = 0
                }
            },opts.speed)
        },

        getMapSeriesPath:function(data,geoCoordMap){
            var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
            var color = ['#a6c84c', '#ffa022', '#46bee9'];
            var mapSeries = [];
            var formatterData = getFormatterData(data);
            function getFormatterData(data){
                var result = [];
                $.each(data,function(index,value){
                    var cell = [];
                    cell.push(value.name);
                    cell.push(value.data);
                    result.push(cell)
                })
                return result;
            }
            formatterData.forEach(function (item, i) {
                mapSeries.push({
                    name: item[0],
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    //使用定义好的数据格式转换函数生成lines的数据
                    data: $.convertDataForPath(item[1],geoCoordMap)
                },
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: $.convertDataForPath(item[1],geoCoordMap)
                },
                {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    //生成散点图数据[{"name":"拉萨","value":[91.1865,30.1465,50]},...]
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
            });
            return mapSeries
        },

        convertDataForPath:function (data,geoCoordMap) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        },

        getMapSeriesPoint:function(data,geoCoordMap,activeIndex){
            var res = [];
            if(!activeIndex){
                activeIndex = 0
            }
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if(i == activeIndex){
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        itemStyle:{
                            normal:{
                                color:"#a6c84c"
                            }
                        }
                    });
                }else{
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        },

        timeProcessLine:function(options){
            var defs = {
                container:""
            }

            var opts = $.extend({},defs,options);
            var $container = $(opts.container);

            var processNum = 0;
            var $linebg = $container.find("b");
            var $line = $linebg.find("strong");
            var $ul = $container.find("ul");
            var $li = $ul.find("li");
            var liWidth = $li.width();
            var itemLength = $li.size();
            var itemWidth = 1/itemLength*100+"%";

            var lineWidth = liWidth*(itemLength-1);
            var lineLeft = liWidth/2
            // console.log(lineLeft)
            $li.css({width:itemWidth})
            $linebg.css({width:lineWidth,left:lineLeft})
            $line.css({width:0})

            setInterval(function(){
                processNum++
                $line.animate({width:liWidth*processNum},2000)
                if(processNum === itemLength-1){
                    processNum = -1;
                }
            },3000)

            $(window).resize(function(){
                liWidth = $li.width();
                lineWidth = liWidth*(itemLength-1);
                lineLeft = liWidth/2
                $linebg.css({width:lineWidth,left:lineLeft})
                $line.css({width:liWidth*processNum})
            })
        },

        customScroll:function(selector){
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
    })
})(jQuery)