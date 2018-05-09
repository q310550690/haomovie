/**
 * @api {get} /api/haomovie/getSearch/ getSearch
 * @apiVersion 0.0.0
 * @apiName getSearch
 * @apiGroup HaoMovie
 * @apiDescription 搜索电影
 * 
 * @apiParam {String} name 电影名称.
 * @apiParam {Number} page 分页数，默认0.
 *
 * @apiSuccess {String} title 电影标题
 * @apiSuccess {String} name 电影名称
 * @apiSuccess {String} url 电影详情路径
 * @apiSuccessExample Success:
    {
        "err": 1,
        "msg": "搜索成功",
        "data": {
            "0": {
                "title": "2018爱情剧情《遇见你真好》4K.HD国语中字",
                "name": "遇见你真好", 
                "url": "/dy/2018-05-03/YJNZH.html" 
            },
        }
    }
 *
 * @apiError err 1成功，其它值看msg字段
 */

/**
 * @api {get} /api/haomovie/movieInfo/ movieInfo
 * @apiVersion 0.0.0
 * @apiName movieInfo
 * @apiGroup HaoMovie
 * @apiDescription 获取电影详情
 * 
 * @apiParam {String} url 电影详情路径.
 *
 * @apiSuccess {JSON} info 电影详情信息
 * @apiSuccess {String} img_title 封面图
 * @apiSuccess {Array} img_prv 预览图
 * @apiSuccess {Array} dow 下载地址
 * @apiSuccess {String} shuo_id 评论url
 * 
 * @apiSuccessExample Success:
{
    "err": 1,
    "msg": "获取数据成功",
    "data": {
        "info": {
            "译名": "西部世界 第一季/西方极乐园",
            "片名": "Westworld Season 1",
            "年代": "2016",
            "类别": "科幻/西部",
            "语言": "英语",
            "字幕": "中英双字",
            "上映日期": "2016-10-02(美国)",
            "IMDb评分": "  9.3/10 from 366 users",
            "豆瓣评分": "9.0/10 from 63 users",
            "导演": "乔纳森·诺兰 Jonathan Nolan / 强尼·坎贝尔 Jonny Campbell / 理查德·J.刘易斯 Richard J. Lewis / 米歇尔·麦克拉伦 Michelle MacLaren / 尼尔·马歇尔 Neil Marshall / 文森佐·纳塔利 Vincenzo Natali / 弗雷德·托耶 Fred Toye / 斯蒂芬·威廉姆斯 Stephen Williams",
            "主演": "埃文·蕾切尔·伍德 Evan Rachel Wood,安东尼·霍普金斯 Anthony Hopkins,本·巴恩斯 Ben Barnes,英格丽德·波尔索·贝达尔 Ingrid Bolsø Berdal,小克利夫顿·克林斯 Clifton Collins Jr.,艾德·哈里斯 Ed Harris,西德斯·巴比特·科努德森 Sidse Babett Knudsen,詹姆斯·麦斯登 James Marsden,坦迪·牛顿 Thandie Newton,西蒙·夸特曼 Simon Quarterman,罗德里格·桑托罗 Rodrigo Santoro,安吉拉·萨拉弗安 Angela Sarafyan,吉米·辛普森 Jimmi Simpson,珊农·沃德华德 Shannon Woodward,杰弗里·怀特 Jeffrey Wright,奥利弗·贝尔 Oliver Bell,雅姆·朗德里·埃贝尔 James Landry Hébert,路易斯·赫特哈姆 Louis Herthum,杰弗里·丹尼尔·菲利普斯 Jeffrey Daniel Phillips,泰莎·汤普森 Tessa Thompson,米兰达·奥图 Miranda Otto,库里·格拉汉姆 Currie Graham,凯尔·柏海莫 Kyle Bornheimer,罗比·史密斯 Robby Smith,乔什·克拉克 Josh Clark,梅森·麦卡利 Mason McCulley,布兰登·冯·弗利特 Brandon Van Vliet",
            "简介": "J.J. Abrams的Bad Robot公司将目光由广播网转向了有线网——HBO今天宣布购入该公司开发的新剧试映集《西部世界》（Westworld），故事根据1973年的同名科幻电影改编。在遥远的未来，一座巨型高科技成 人乐园建成，其中有西部世界，罗马世界，中世纪世界三大主题版块的机器人世界，它提供给游客杀戮与性欲的满足。这座巨大机械乐园的后台监控渐渐失去了对机器人的控制，游客被机器人杀死，所有想逃离者都被锁定。该剧的主题是：「人工智能获得自主意识」以及「未来世界的罪孽」。过去几年Bad Robot公司一直活跃在广播网上（《危机边缘》、《疑犯追踪》、《革命》和即将播出的《信徒》），这是该公司在有线网上开发的第一个重要项目。1980年，《西部世界》曾被改编成电视剧集《Beyond Westworld》，但该剧很短命。 【下载地址】"
        },
        "img_title": "https://tu.66vod.net/2018/0596.jpg",
        "img_prv": [],
        "dow": [
            {
                "title": "第二季",
                "dow": [
                    {
                        "西部世界.Westworld.S02E01.中英字幕.HDTVrip.720p-人人影视.mp4": "ed2k://%7Cfile%7C%E8%A5%BF%E9%83%A8%E4%B8%96%E7%95%8C.Westworld.S02E01.%E4%B8%AD%E8%8B%B1%E5%AD%97%E5%B9%95.HDTVrip.720p-%E4%BA%BA%E4%BA%BA%E5%BD%B1%E8%A7%86.mp4%7C903236273%7C9e0d069937efdffc119ec0af78c182fb%7Ch=wna32aqevffbqbodnscqfrlxisjnjdzn%7C/"
                    },
                    ...
                ]
            },
            {
                "title": "第一季",
                "dow": [
                    {
                        "西部世界.Westworld.S01E01.中英字幕.BDRip.720P.mp4": "ed2k://%7Cfile%7C%E8%A5%BF%E9%83%A8%E4%B8%96%E7%95%8C.Westworld.S01E01.%E4%B8%AD%E8%8B%B1%E5%AD%97%E5%B9%95.BDRip.720P.%E4%BA%BA%E4%BA%BA%E5%BD%B1%E8%A7%86.mp4%7C883169971%7C4ce8cb4cceb430f4da7b77bc3560713b%7Ch=zvg4n732nxo7bgr7yvgfruu7bq5msap7%7C/"
                    },
                    ...
                ]
            }
        ],
        "shuo_id": "/e/pl/?classid=61&id=27892"
    }
}
 *
 * @apiError err 1成功，其它值看msg字段
 */

/**
 * @api {get} /api/haomovie/shuoInfo/ shuoInfo
 * @apiVersion 0.0.0
 * @apiName shuoInfo
 * @apiGroup HaoMovie
 * @apiDescription 获取电影评论
 *
 * @apiParam {String} shuo_id 直接在/api/haomovie/shuoInfo/后面拼接上shuo_id.
 * @apiParam {Number} page 分页数，默认0.
 *
 * @apiSuccess {String} pf 评论总分数
 * @apiSuccess {String} pfnum 评分人数
 * @apiSuccess {Array} plarr 评论内容
 * @apiSuccess {String} plarr.name 评论者昵称
 * @apiSuccess {String} plarr.time 评论时间
 * @apiSuccess {Number} plarr.support 支持数
 * @apiSuccess {Number} plarr.opposition 反对数
 * @apiSuccess {Array} plarr.shuo 评论条数
 * @apiSuccess {JSON} plarr.shuo.name 评论者昵称
 * @apiSuccess {JSON} plarr.shuo.pl 评论内容
 * 
 * @apiSuccessExample Success:
{
    "err": 1,
    "msg": "获取数据成功",
    "data": {
        "pf": "4",
        "pfnum": "1223",
        "plarr": [
            {
                "name": "匿名",
                "time": "2018-05-02 09:31:03",
                "support": "2",
                "opposition": "0",
                "shuo": [
                    {
                        "name": "匿名",
                        "pl": "第二季第一集百度云下不了啊！！！"
                    }
                ]
            },
            {
                "name": "匿名",
                "time": "2018-04-25 12:59:47",
                "support": "3",
                "opposition": "1",
                "shuo": [
                    {
                        "name": "匿名",
                        "pl": "下不了你发你妹啊！版权不让下就在6V下架啊！"
                    },
                    {
                        "name": "匿名",
                        "pl": "下载版权问题网站早就提示过如何应对。用旧版迅雷下。不懂多看多问。别只会做一个SB瞎BB。"
                    },
                    ...
                ]
            },
            ...
        ]
    }
}
 *
 * @apiError err 1成功，其它值看msg字段
 */