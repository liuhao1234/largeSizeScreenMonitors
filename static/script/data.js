var orderList = [{
        time:"10:10",
        list:[{
            errno:0,
            msg:"西环街二段社区服务点成交一单 无异常"
        },{
            errno:0,
            msg:"祝丰街远洲国际城服务点成交一单 无异常"
        }]
    },{
        time:"10:25",
        list:[{
            errno:0,
            msg:"民主街三段社区服务点成交一单 无异常"
        }]
    },{
        time:"10:36",
        list:[{
            errno:0,
            msg:"工联街三段服务点成交一单 无异常"
        },{
            errno:0,
            msg:"文化路社区服务点成交一单 无异常"
        }]
    },{
        time:"11:40",
        list:[{
            errno:0,
            msg:"西长春路一段服务站成交一单 无异常"
        }]
    },{
        time:"11:50",
        list:[{
            errno:1,
            msg:"北共济街社区服务点成交一单 异常"
        }]
    },{
        time:"12:59",
        list:[{
            errno:0,
            msg:"南五路社区服务点成交一单 无异常"
        },{
            errno:1,
            msg:"南四路社区服务点成交一单 异常"
        }]
    }]
var sellRankList = [{
        name:"大盛晏火腿官方店",
        value:45323
    },{
        name:"宣威市老倌土特产",
        value:45323
    },{
        name:"云宣稻香园旗舰店",
        value:45323
    },{
        name:"杨宣宣威火腿店",
        value:45323
    },{
        name:"可渡村",
        value:45323
    },{
        name:"宣威市老有为云南土特",
        value:45323
    },{
        name:"随心所逸 土特产",
        value:45323
    },{
        name:"宣威升达火腿",
        value:45323
    },{
        name:"优农宣威",
        value:45323
    },{
        name:"宣威阳光食品",
        value:45323
    },{
        name:"简酥旗舰店",
        value:45323
    },{
        name:"老浦家食品旗舰店",
        value:45323
    },{
        name:"秀滇食品专营店",
        value:45323
    },{
        name:"七彩云南味",
        value:45323
    },{
        name:"杨宣宣威火腿店",
        value:45323
    },{
        name:"可渡村",
        value:45323
    },{
        name:"宣威市老有为云南土特",
        value:45323
    },{
        name:"随心所逸 土特产",
        value:45323
    },{
        name:"宣威升达火腿",
        value:45323
    },{
        name:"优农宣威",
        value:45323
    },{
        name:"宣威阳光食品",
        value:45323
    },{
        name:"简酥旗舰店",
        value:45323
    }]
var learnRanklineChartData = [{
        name:"复州城镇",
        value:220
    },{
        name:"松树镇",
        value:182
    },{
        name:"得利寺镇",
        value:191
    },{
        name:"万家岭镇",
        value:350
    },{
        name:"许屯镇",
        value:234
    },{
        name:"永宁镇",
        value:190
    },{
        name:"谢屯镇",
        value:168
    },{
        name:"老虎屯镇",
        value:100
    }]
// 一下是瓦房店坐标map
var wfdCoordMap = {
    "仙浴湾镇":[121.538642,39.71005],
    "驼山乡":[121.667423,39.802352],
    "永宁镇":[121.906588,39.924637],
    "许屯镇":[122.118157,40.036097],
    "瓦窝镇":[122.039968,39.694062],
    "得利寺镇":[122.074463,39.791708],
    "西海农场":[121.55129,39.62207],
    "交流岛街道":[121.424809,39.442205],
    "万家岭镇":[122.16645,39.944996],
    "西杨乡":[121.745612,39.828068],
    "郭家屯":[121.815751,39.582042],
    "二傻沟":[122.03307,39.828954],
    "马鞍山":[121.916937,39.768641],
    "红沿河镇":[121.571987,39.765091],
    "于望山":[121.709967,39.579372],
    "瓦房店西站":[121.845647,39.662075],
    "吕沟村":[121.55129,39.525072],
    "碾盘石":[121.461603,39.65052],
    "小马场":[121.584635,39.565134],
    "黑帽山":[121.866344,39.712714],
    "歪头山":[121.716866,39.525072],
}

var XYWData = [
    [{name:"仙浴湾镇"},{name:"驼山乡",value:95}],
    [{name:"仙浴湾镇"},{name:"永宁镇",value:95}],
    [{name:"仙浴湾镇"},{name:"许屯镇",value:95}],
    [{name:"仙浴湾镇"},{name:"瓦窝镇",value:95}],
    [{name:"仙浴湾镇"},{name:"得利寺镇",value:95}],
    [{name:"仙浴湾镇"},{name:"西海农场",value:95}],
    [{name:"仙浴湾镇"},{name:"交流岛街道",value:95}],
    [{name:"仙浴湾镇"},{name:"碾盘石",value:95}],
    [{name:"仙浴湾镇"},{name:"黑帽山",value:95}],
    [{name:"仙浴湾镇"},{name:"西杨乡",value:95}]
]
var WFDXZData = [
    [{name:"瓦房店西站"},{name:"驼山乡",value:195}],
    [{name:"瓦房店西站"},{name:"永宁镇",value:95}],
    [{name:"瓦房店西站"},{name:"许屯镇",value:95}],
    [{name:"瓦房店西站"},{name:"瓦窝镇",value:95}],
    [{name:"瓦房店西站"},{name:"得利寺镇",value:95}],
    [{name:"瓦房店西站"},{name:"西海农场",value:95}],
    [{name:"瓦房店西站"},{name:"交流岛街道",value:95}],
    [{name:"瓦房店西站"},{name:"碾盘石",value:95}],
    [{name:"瓦房店西站"},{name:"黑帽山",value:95}],
    [{name:"瓦房店西站"},{name:"西杨乡",value:55}]
]
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = wfdCoordMap[dataItem[0].name];
        var toCoord = wfdCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

//自定义图形配色
var color = ['#a6c84c', '#ffa022', '#46bee9'];

//通过循环生成series配置
var mapSeries02 = [];
[['仙浴湾镇', XYWData],['瓦房店西站', WFDXZData]].forEach(function (item, i) {
    mapSeries02.push({
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
        data: convertData(item[1])
    },
    {
        name: item[0],
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
        data: convertData(item[1])
    },
    {
        name: item[0],
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
                value: wfdCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

// 以下是地图迁徙图数据
var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};

var BJData = [
    [{name:'北京'}, {name:'上海',value:95}],
    [{name:'北京'}, {name:'广州',value:90}],
    [{name:'北京'}, {name:'大连',value:80}],
    [{name:'北京'}, {name:'南宁',value:70}],
    [{name:'北京'}, {name:'南昌',value:60}],
    [{name:'北京'}, {name:'拉萨',value:50}],
    [{name:'北京'}, {name:'长春',value:40}],
    [{name:'北京'}, {name:'包头',value:30}],
    [{name:'北京'}, {name:'重庆',value:20}],
    [{name:'北京'}, {name:'常州',value:10}]
];

var SHData = [
    [{name:'上海'},{name:'包头',value:95}],
    [{name:'上海'},{name:'昆明',value:90}],
    [{name:'上海'},{name:'广州',value:80}],
    [{name:'上海'},{name:'郑州',value:70}],
    [{name:'上海'},{name:'长春',value:60}],
    [{name:'上海'},{name:'重庆',value:50}],
    [{name:'上海'},{name:'长沙',value:40}],
    [{name:'上海'},{name:'北京',value:30}],
    [{name:'上海'},{name:'丹东',value:20}],
    [{name:'上海'},{name:'大连',value:10}]
];

var GZData = [
    [{name:'广州'},{name:'福州',value:95}],
    [{name:'广州'},{name:'太原',value:90}],
    [{name:'广州'},{name:'长春',value:80}],
    [{name:'广州'},{name:'重庆',value:70}],
    [{name:'广州'},{name:'西安',value:60}],
    [{name:'广州'},{name:'成都',value:50}],
    [{name:'广州'},{name:'常州',value:40}],
    [{name:'广州'},{name:'北京',value:30}],
    [{name:'广州'},{name:'北海',value:20}],
    [{name:'广州'},{name:'海口',value:10}]
];
    
//飞机矢量图（矢量路径），用于连线的尾迹特效
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var convertData = function (data) {
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
};

//自定义图形配色
var color = ['#a6c84c', '#ffa022', '#46bee9'];

//通过循环生成series配置
var mapSeries = [];
[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
    mapSeries.push({
        name: item[0] + ' Top10',
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
        data: convertData(item[1])
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
        data: convertData(item[1])
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
// 以上是地图迁徙图数据

var gdpPieData = [{
    name:"第一产业",
    value:43
},{
    name:"第二产业",
    value:96
},{
    name:"第三产业",
    value:71
}]

var gdpLineData = [{
    name:"2013",
    value:1280
},{
    name:"2014",
    value:966
},{
    name:"2015",
    value:2890
},{
    name:"2016",
    value:1692.85
},{
    name:"2017",
    value:2789.88
},{
    name:"2018",
    value:1660.55
},{
    name:"2019",
    value:3211.11
}]

var sellIncreaseLineData = [{
    name:"2月",
    value:10
},{
    name:"3月",
    value:4.4
},{
    name:"4月",
    value:5
},{
    name:"5月",
    value:6.6
},{
    name:"6月",
    value:7
},{
    name:"7月",
    value:1
},{
    name:"8月",
    value:14
}]

var opulationRatioData = [{
    name:"男",
    value:938374
},{
    name:"女",
    value:969837
}]