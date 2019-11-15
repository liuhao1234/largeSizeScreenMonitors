(function($){
    $.extend({
        initRankLineChart:function(options){
            var defs = {
                domId:"",
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

            var xAxisName = [];
            var seriesData = [];

            function getxAxisName(data){
                $.each(data,function(index,value){
                    xAxisName.push(value.name);
                    seriesData.push(value.value);
                })
            }
            getxAxisName(opts.data)
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
                        return data.name+":"+data.value
                    }
                },
                grid: [{
                    top: 50,
                    left: 50,
                    bottom: 50,
                    right: 20
                }],
                xAxis: [{
                    data: xAxisName,
                    axisLine: {
                        lineStyle: {
                            color: '#9bdef0'
                        }
                    },
                    axisTick: {
                        show:true,
                        alignWithLabel:true,
                        lineStyle: {
                            color: '#9bdef0'
                        }
                    }
                }],
                yAxis: [{
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#9bdef0',
                            type:'dashed',
                            opacity:0.2
                        }
                    },
                    axisLine: {
                        show:false
                    },
                    axisLabel: {
                        color: '#9bdef0',
                        fontWeight: 300,
                        fontSize: 14
                    }
                }],
                series: [{
                    type: 'bar',
                    barWidth: 14,
                    itemStyle: {
                        normal:{
                            barBorderRadius: 10,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#19dfa4'
                                    },
                                    {
                                        offset: 1,
                                        color: '#0d1c4a'
                                    }
                                ])
                        }
                    },
                    data: seriesData
                }]
            };

            myChart.setOption(option);
            $(window).resize(function(){
                myChart.resize();
            });

            return myChart;
        },
        initLogisticsMapChart:function(options){
            var defs = {
                domId:"",
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

            var option = {
                // legend: {
                //     show:true,
                //     orient: 'vertical',
                //     top: 'bottom',
                //     left: 'right',
                //     data:['北京 Top10', '上海 Top10', '广州 Top10'],
                //     textStyle: {
                //         color: '#fff'
                //     },
                //     selectedMode: 'single'
                // },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    zoom:1,
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: "rgba(25,193,195,.5)",//"rgba(42,196,254,.85)",//'rgba(83,63,199,.9)',
                            borderColor: 'rgba(25,193,195,1)'
                        },
                        emphasis: {
                            areaColor: "rgba(25,193,195,.8)"//'#6031af'
                        }
                    }
                },
                series: opts.data
            };

            myChart.setOption(option);
            $(window).resize(function(){
                myChart.resize();
            });

            return myChart;
        },

        initGdpPieChart:function(options){
            var defs = {
                domId:"",
                data:""
            }

            var opts = $.extend({},defs,options);
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
                    },
                    {
                        offset: 0.5,
                        color: '#2cffc1' // 50% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#1eebcc' // 100% 处的颜色
                    }
                ])
            var color02 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ffd74d' // 0% 处的颜色
                    },
                    {
                        offset: 0.5,
                        color: '#ffb24d' // 50% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#ff944d' // 100% 处的颜色
                    }
                ])
            var color03 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#52c0ff' // 0% 处的颜色
                },
                {
                    offset: 0.5,
                    color: '#52e9ff' // 50% 处的颜色
                },
                {
                    offset: 1,
                    color: '#52ffed' // 100% 处的颜色
                }
            ])
            var colors = [color01,color02,color03]
            var outerData = [];
            var innerData = [];

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
                // color:["#35c07e","#e8a930","#187cb2"],
                tooltip: {
                  show: true,
                },
                series: [
                  {
                    type: 'pie',//外圆
                    radius: ['65%', '85%'],
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
                  },
                  {
                    type: 'pie',
                    radius: ['55%', '95%'],
                    center: ['50%', '50%'],
                    hoverAnimation: false,
                    label:{
                        normal:{
                            show:false
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

            return myChart;
        },

        initGdpLineChart:function(options){
            var defs = {
                domId:"",
                data:""
            }

            var opts = $.extend({},defs,options);
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
                        type:"line",
                        lineStyle:{
                            width:2,
                            color:"#00ffff",
                            opacity:0.4
                        }
                    },
                    confine:true,
                    formatter:function(params){
                        var data = params[0];
                        return data.marker+data.name+"年:"+data.value
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
                    name:"单位:亿元",
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
                    smooth: true,
                    symbol:"circle",
                    symbolSize:6,
                    itemStyle:{
                        normal:{
                            color:"#00ffff"
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: "#00ffff"
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { 
                                    offset: 0,  
                                    color: 'rgba(61,234,255, 0.9)'
                                },{ 
                                    offset: 0.7,  
                                    color: 'rgba(61,234,255, 0)'
                                }
                            ]),
        
                            shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: seriesData
                }]
            };

            myChart.setOption(option);
            $(window).resize(function(){
                myChart.resize();
            });

            return myChart;
        },

        initPoorConditionBarChart:function(options){
            var defs = {
                domId:"",
                data:""
            }

            var opts = $.extend({},defs,options);
            var opts = $.extend({},defs,options);
        	var dom = document.getElementById(opts.domId);
            var myChart = echarts.getInstanceByDom(dom);

            if(myChart){
            	myChart.clear();
            }else{
            	myChart = echarts.init(dom);
            }

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
                        return data.marker+data.name+"年:"+data.value
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
                    data: ['复州城镇', '松树镇', '得利寺镇', '万家岭镇', '许屯镇', '永宁镇', '谢屯镇']
                }],
                yAxis: [{
                    type: 'value',
                    name:"贫困人数",
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
                    data: [220, 182, 191, 234, 290, 330, 310]
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
                    data: [220, 182, 191, 234, 290, 330, 310],
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
                    data: [220, 182, 191, 234, 290, 330, 310],
                    z: 3
                },]
            };

            myChart.setOption(option);
            $(window).resize(function(){
                myChart.resize();
            });

            return myChart;
        },

        initePopulationRatioPieChart:function(options){
            var defs = {
                domId:"",
                data:""
            }

            var opts = $.extend({},defs,options);
            var opts = $.extend({},defs,options);
        	var dom = document.getElementById(opts.domId);
            var myChart = echarts.getInstanceByDom(dom);

            if(myChart){
            	myChart.clear();
            }else{
            	myChart = echarts.init(dom);
            }

            var color01 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#52c0ff' // 0% 处的颜色
                },
                {
                    offset: 0.5,
                    color: '#52e9ff' // 50% 处的颜色
                },
                {
                    offset: 1,
                    color: '#52ffed' // 100% 处的颜色
                }
            ])
            var color02 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ffd74d' // 0% 处的颜色
                    },
                    {
                        offset: 0.5,
                        color: '#ffb24d' // 50% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#ff944d' // 100% 处的颜色
                    }
                ])
            
            var colors = [color01,color02]
            var outerData = [];
            var innerData = [];

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
                // color:["#35c07e","#e8a930","#187cb2"],
                tooltip: {
                  show: true,
                },
                series: [
                  {
                    type: 'pie',//外圆
                    radius: ['50%', '70%'],
                    center: ['50%', '50%'],
                    hoverAnimation: true,
                    z: 10,
                    label:{
                        normal:{
                            show:true,
                            color:"#9bdef0",
                            formatter: function(params){
                                // console.log(params)
                                return params.name+"占比:"+params.percent+"%"+"\n\n人数:"+Number(params.value).toLocaleString()
                            },
                        }
                    },
                    data: outerData
                  },
                  {
                    type: 'pie',
                    radius: ['40%', '80%'],
                    center: ['50%', '50%'],
                    hoverAnimation: false,
                    label:{
                        normal:{
                            show:false
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

            return myChart;
        }
    })
})(jQuery)