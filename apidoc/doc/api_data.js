define({ "api": [
  {
    "type": "get",
    "url": "/api/DouBan/getMovieInfo/",
    "title": "getMovieInfo",
    "version": "0.0.0",
    "name": "getMovieInfo",
    "group": "DouBan",
    "description": "<p>获取电影信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>电影名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rating",
            "description": "<p>评分</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rating.average",
            "description": "<p>得分</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "genres",
            "description": "<p>类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "casts",
            "description": "<p>演员</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "directors",
            "description": "<p>剧照</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>封面图</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success:",
          "content": "{\n    \"err\": 1,\n    \"msg\": \"获取数据成功\",\n    \"data\": {\n        \"count\": 1,\n        \"start\": 0,\n        \"total\": 5,\n        \"subjects\": [\n            {\n                \"rating\": {\n                    \"max\": 10,\n                    \"average\": 9.3,\n                    \"stars\": \"50\",\n                    \"min\": 0\n                },\n                \"genres\": [\n                    \"科幻\",\n                    \"西部\"\n                ],\n                \"title\": \"西部世界 第二季\",\n                \"casts\": [\n                    {\n                        \"alt\": \"https://movie.douban.com/celebrity/1035652/\",\n                        \"avatars\": {\n                            \"small\": \"http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1770.jpg\",\n                            \"large\": \"http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1770.jpg\",\n                            \"medium\": \"http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1770.jpg\"\n                        },\n                        \"name\": \"埃文·蕾切尔·伍德\",\n                        \"id\": \"1035652\"\n                    },\n                    ...\n                ],\n                \"collect_count\": 6073,\n                \"original_title\": \"Westworld\",\n                \"subtype\": \"tv\",\n                \"directors\": [\n                    {\n                        \"alt\": \"https://movie.douban.com/celebrity/1332531/\",\n                        \"avatars\": {\n                            \"small\": \"http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383990641.33.jpg\",\n                            \"large\": \"http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383990641.33.jpg\",\n                            \"medium\": \"http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383990641.33.jpg\"\n                        },\n                        \"name\": \"理查德·J·刘易斯\",\n                        \"id\": \"1332531\"\n                    }\n                ],\n                \"year\": \"2018\",\n                \"images\": {\n                    \"small\": \"http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2517077652.jpg\",\n                    \"large\": \"http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2517077652.jpg\",\n                    \"medium\": \"http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2517077652.jpg\"\n                },\n                \"alt\": \"https://movie.douban.com/subject/26887174/\",\n                \"id\": \"26887174\"\n            }\n        ],\n        \"title\": \"搜索 \\\"西部世界\\\" 的结果\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>1成功，其它值看msg字段</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "DouBan"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "E__Work_project_tp5_movie_apidoc_doc_main_js",
    "groupTitle": "E__Work_project_tp5_movie_apidoc_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/haomovie/getSearch/",
    "title": "getSearch",
    "version": "0.0.0",
    "name": "getSearch",
    "group": "HaoMovie",
    "description": "<p>搜索电影</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>电影名称.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>分页数，默认0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>电影标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>电影名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>电影详情路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success:",
          "content": "{\n    \"err\": 1,\n    \"msg\": \"搜索成功\",\n    \"data\": {\n        \"0\": {\n            \"title\": \"2018爱情剧情《遇见你真好》4K.HD国语中字\",\n            \"name\": \"遇见你真好\", \n            \"url\": \"/dy/2018-05-03/YJNZH.html\" \n        },\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>1成功，其它值看msg字段</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "HaoMovie"
  },
  {
    "type": "get",
    "url": "/api/haomovie/movieInfo/",
    "title": "movieInfo",
    "version": "0.0.0",
    "name": "movieInfo",
    "group": "HaoMovie",
    "description": "<p>获取电影详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>电影详情路径.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "info",
            "description": "<p>电影详情信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img_title",
            "description": "<p>封面图</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "img_prv",
            "description": "<p>预览图</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "dow",
            "description": "<p>下载地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shuo_id",
            "description": "<p>评论url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success:",
          "content": "{\n    \"err\": 1,\n    \"msg\": \"获取数据成功\",\n    \"data\": {\n        \"info\": {\n            \"译名\": \"西部世界 第一季/西方极乐园\",\n            \"片名\": \"Westworld Season 1\",\n            \"年代\": \"2016\",\n            \"类别\": \"科幻/西部\",\n            \"语言\": \"英语\",\n            \"字幕\": \"中英双字\",\n            \"上映日期\": \"2016-10-02(美国)\",\n            \"IMDb评分\": \"  9.3/10 from 366 users\",\n            \"豆瓣评分\": \"9.0/10 from 63 users\",\n            \"导演\": \"乔纳森·诺兰 Jonathan Nolan / 强尼·坎贝尔 Jonny Campbell / 理查德·J.刘易斯 Richard J. Lewis / 米歇尔·麦克拉伦 Michelle MacLaren / 尼尔·马歇尔 Neil Marshall / 文森佐·纳塔利 Vincenzo Natali / 弗雷德·托耶 Fred Toye / 斯蒂芬·威廉姆斯 Stephen Williams\",\n            \"主演\": \"埃文·蕾切尔·伍德 Evan Rachel Wood,安东尼·霍普金斯 Anthony Hopkins,本·巴恩斯 Ben Barnes,英格丽德·波尔索·贝达尔 Ingrid Bolsø Berdal,小克利夫顿·克林斯 Clifton Collins Jr.,艾德·哈里斯 Ed Harris,西德斯·巴比特·科努德森 Sidse Babett Knudsen,詹姆斯·麦斯登 James Marsden,坦迪·牛顿 Thandie Newton,西蒙·夸特曼 Simon Quarterman,罗德里格·桑托罗 Rodrigo Santoro,安吉拉·萨拉弗安 Angela Sarafyan,吉米·辛普森 Jimmi Simpson,珊农·沃德华德 Shannon Woodward,杰弗里·怀特 Jeffrey Wright,奥利弗·贝尔 Oliver Bell,雅姆·朗德里·埃贝尔 James Landry Hébert,路易斯·赫特哈姆 Louis Herthum,杰弗里·丹尼尔·菲利普斯 Jeffrey Daniel Phillips,泰莎·汤普森 Tessa Thompson,米兰达·奥图 Miranda Otto,库里·格拉汉姆 Currie Graham,凯尔·柏海莫 Kyle Bornheimer,罗比·史密斯 Robby Smith,乔什·克拉克 Josh Clark,梅森·麦卡利 Mason McCulley,布兰登·冯·弗利特 Brandon Van Vliet\",\n            \"简介\": \"J.J. Abrams的Bad Robot公司将目光由广播网转向了有线网——HBO今天宣布购入该公司开发的新剧试映集《西部世界》（Westworld），故事根据1973年的同名科幻电影改编。在遥远的未来，一座巨型高科技成 人乐园建成，其中有西部世界，罗马世界，中世纪世界三大主题版块的机器人世界，它提供给游客杀戮与性欲的满足。这座巨大机械乐园的后台监控渐渐失去了对机器人的控制，游客被机器人杀死，所有想逃离者都被锁定。该剧的主题是：「人工智能获得自主意识」以及「未来世界的罪孽」。过去几年Bad Robot公司一直活跃在广播网上（《危机边缘》、《疑犯追踪》、《革命》和即将播出的《信徒》），这是该公司在有线网上开发的第一个重要项目。1980年，《西部世界》曾被改编成电视剧集《Beyond Westworld》，但该剧很短命。 【下载地址】\"\n        },\n        \"img_title\": \"https://tu.66vod.net/2018/0596.jpg\",\n        \"img_prv\": [],\n        \"dow\": [\n            {\n                \"title\": \"第二季\",\n                \"dow\": [\n                    {\n                        \"西部世界.Westworld.S02E01.中英字幕.HDTVrip.720p-人人影视.mp4\": \"ed2k://%7Cfile%7C%E8%A5%BF%E9%83%A8%E4%B8%96%E7%95%8C.Westworld.S02E01.%E4%B8%AD%E8%8B%B1%E5%AD%97%E5%B9%95.HDTVrip.720p-%E4%BA%BA%E4%BA%BA%E5%BD%B1%E8%A7%86.mp4%7C903236273%7C9e0d069937efdffc119ec0af78c182fb%7Ch=wna32aqevffbqbodnscqfrlxisjnjdzn%7C/\"\n                    },\n                    ...\n                ]\n            },\n            {\n                \"title\": \"第一季\",\n                \"dow\": [\n                    {\n                        \"西部世界.Westworld.S01E01.中英字幕.BDRip.720P.mp4\": \"ed2k://%7Cfile%7C%E8%A5%BF%E9%83%A8%E4%B8%96%E7%95%8C.Westworld.S01E01.%E4%B8%AD%E8%8B%B1%E5%AD%97%E5%B9%95.BDRip.720P.%E4%BA%BA%E4%BA%BA%E5%BD%B1%E8%A7%86.mp4%7C883169971%7C4ce8cb4cceb430f4da7b77bc3560713b%7Ch=zvg4n732nxo7bgr7yvgfruu7bq5msap7%7C/\"\n                    },\n                    ...\n                ]\n            }\n        ],\n        \"shuo_id\": \"/e/pl/?classid=61&id=27892\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>1成功，其它值看msg字段</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "HaoMovie"
  },
  {
    "type": "get",
    "url": "/api/haomovie/shuoInfo/",
    "title": "shuoInfo",
    "version": "0.0.0",
    "name": "shuoInfo",
    "group": "HaoMovie",
    "description": "<p>获取电影评论</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shuo_id",
            "description": "<p>直接在/api/haomovie/shuoInfo/后面拼接上shuo_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>分页数，默认0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pf",
            "description": "<p>评论总分数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pfnum",
            "description": "<p>评分人数</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "plarr",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plarr.name",
            "description": "<p>评论者昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plarr.time",
            "description": "<p>评论时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "plarr.support",
            "description": "<p>支持数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "plarr.opposition",
            "description": "<p>反对数</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "plarr.shuo",
            "description": "<p>评论条数</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "plarr.shuo.name",
            "description": "<p>评论者昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "plarr.shuo.pl",
            "description": "<p>评论内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success:",
          "content": "{\n    \"err\": 1,\n    \"msg\": \"获取数据成功\",\n    \"data\": {\n        \"pf\": \"4\",\n        \"pfnum\": \"1223\",\n        \"plarr\": [\n            {\n                \"name\": \"匿名\",\n                \"time\": \"2018-05-02 09:31:03\",\n                \"support\": \"2\",\n                \"opposition\": \"0\",\n                \"shuo\": [\n                    {\n                        \"name\": \"匿名\",\n                        \"pl\": \"第二季第一集百度云下不了啊！！！\"\n                    }\n                ]\n            },\n            {\n                \"name\": \"匿名\",\n                \"time\": \"2018-04-25 12:59:47\",\n                \"support\": \"3\",\n                \"opposition\": \"1\",\n                \"shuo\": [\n                    {\n                        \"name\": \"匿名\",\n                        \"pl\": \"下不了你发你妹啊！版权不让下就在6V下架啊！\"\n                    },\n                    {\n                        \"name\": \"匿名\",\n                        \"pl\": \"下载版权问题网站早就提示过如何应对。用旧版迅雷下。不懂多看多问。别只会做一个SB瞎BB。\"\n                    },\n                    ...\n                ]\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>1成功，其它值看msg字段</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "HaoMovie"
  }
] });
