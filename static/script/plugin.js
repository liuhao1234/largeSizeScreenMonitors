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
                            color: '#00ffff'
                        }
                    },
                    axisTick: {
                        show:true,
                        alignWithLabel:true,
                        lineStyle: {
                            color: '#00ffff'
                        }
                    }
                }],
                yAxis: [{
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#00ffff',
                            type:'dashed',
                            opacity:0.1
                        }
                    },
                    axisLine: {
                        show:false
                    },
                    axisLabel: {
                        color: '#00ffff',
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
                            areaColor: "rgba(25,193,195,.3)",//"rgba(42,196,254,.85)",//'rgba(83,63,199,.9)',
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
        }
    })
})(jQuery)