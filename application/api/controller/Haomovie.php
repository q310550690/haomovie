<?php
namespace app\api\controller;
use QL\QueryList;
class Haomovie
{
    private $host = 'http://www.hao6v.com';

    public function index()
    {
        return '什么鬼啊';
    }
    
    // hao6v.com 搜索接口解析
    public function parseHao6v(){

    }
    // 搜索电影名字
    public function getSearch(){
        $name = input('name');
        $page = input('page') ?? 0;
        $movieName = urlencode(utfToGbk($name));
        $url = 'http://so.hao6v.com/e/search/index.php';
        $data = 'show=title%2Csmalltext&tempid=1&keyboard='.$movieName.'&tbname=article&x=0&y=0';
        $cb = httpPost($url,$data);
        // 判定是否有重定向
        if($cb['cinfo']['http_code'] == 302 || $cb['cinfo']['http_code'] == 301){
            $redUrl = $cb['cinfo']['redirect_url'];
            // 得到重定向的数据
            $rcb =gbkToUtf( httpPost($redUrl.'&page='.$page));
            if($rcb['cinfo']['http_code'] == 200){
                return json(array('err'=>1,'msg'=>'搜索成功','data'=>$this->splitSearch($rcb['rsp'])));
            }else{
                return json(array('err'=>0,'msg'=>'未知错误'));
            }
        }else{
            
        }
    }
    // 截取搜索电影结果
    private function splitSearch($info){
        $sub = str_replace(array("\r\n", "\r", "\n"),'',$info);
        $table = '/<table width="100%" border="0" align="center" cellpadding="3" cellspacing="1">(.*)<\/table>/U';//定位到条数
        $name = "/<span class=\"blue14\"><a href=.* target=_blank>(.*)<\/a><\/span>/U";//获取电影名字
        $url = "/<span class=\"blue14\"><a href=(.*) target=_blank>.*<\/span>/U";//获取电影url
        preg_match_all($table,$sub, $pat_array);
        // var_dump($pat_array);
        if(!empty($pat_array[1])){
            foreach ($pat_array[1] as $key => $value) {
                preg_match_all($name,$value, $name_array);
                preg_match_all($url,$value, $url_array);
                // 获取电影名
                $movie = strip_tags($name_array[1][0]);
                preg_match_all("/《(.*)》/U",$movie, $movieRe);
                if(!empty($movieRe[1][0])){
                    $resut[$key]['title']=$movie;
                    $resut[$key]['name']=$movieRe[1][0];
                    $resut[$key]['url']=str_replace($this->host,'',$url_array[1][0]);
                }
            }
            return $resut;
        }else{
            return 0;
        }
    }
    // 获取电影详情
    public function movieInfo(){
        $url = input('url');
        if(!empty($url)){
            $cb = httpPost($this->host.$url,'','GET');
            // 判定请求是否成功
            if($cb['cinfo']['http_code'] == 200){
                // 解析电影详情
                $movie_info = gbkToUtf($cb['rsp']);
                // $this->splitMovieInfo($movie_info);
                return json(array('err'=>1,'msg'=>'获取数据成功','data'=>$this->splitMovieInfo($movie_info)));
            }else{
                return json(array('err'=>0,'msg'=>'网络请求失败'));
            }
        }else{
            return json(array('err'=>0,'msg'=>'未收录此电影'));
        }
    }
    // 解析电影详情
    private function splitMovieInfo($info){
        $html = str_replace('gb2312','utf8',$info);//改变mate为utf8编码
        $returnMovie = [];
        $ql = QueryList::html($html);
        $movie_title = $ql->find('h1')->text();//电影标题
        $movie_img = $ql->find('#endText img:eq(0)')->src;//封面图
        $movie_img_prv = $ql->find('#endText img:not(:first)')->attrs('src')->all();//预览图
        $movie_shuo_url = $ql->find('#ifc')->src; //解析评论urlid
        // 解析出电影介绍
        $movie_info = $ql->find('#endText > p')->html();// 电影介绍
        $movie_dinfo = [];
        foreach (explode('◎',$movie_info) as $key => $value) {
            // dv($value);
            if(!empty($value)){
                // 替换主演名单里面的空格为,
                $v = str_replace('　　　　　　',',',$value);
                // 去除所有空格
                $v = str_replace(array("\r\n", "\n","\t",'　'),'',$v);
                // 去除html标签
                $v = strip_tags($v);
                // dv($v);
                if(!empty($v)){
                    // 分类
                    if(strpos($v,'译名') === 0){
                        $movie_dinfo +=array('译名'=>str_replace('译名','',$v));
                    }
                    if(strpos($v,'片名') === 0){
                        $movie_dinfo +=array('片名'=>str_replace('片名','',$v));
                    }
                    if(strpos($v,'年代') === 0){
                        $movie_dinfo +=array('年代'=>str_replace('年代','',$v));
                    }
                    if(strpos($v,'产地') === 0){
                        $movie_dinfo +=array('产地'=>str_replace('产地','',$v));
                    }
                    if(strpos($v,'类别') === 0){
                        $movie_dinfo +=array('类别'=>str_replace('类别','',$v));
                    }
                    if(strpos($v,'语言') === 0){
                        $movie_dinfo +=array('语言'=>str_replace('语言','',$v));
                    }
                    if(strpos($v,'字幕') === 0){
                        $movie_dinfo +=array('字幕'=>str_replace('字幕','',$v));
                    }
                    if(strpos($v,'上映日期') === 0){
                        $movie_dinfo +=array('上映日期'=>str_replace('上映日期','',$v));
                    }
                    if(strpos($v,'豆瓣评分') === 0){
                        $movie_dinfo +=array('豆瓣评分'=>str_replace('豆瓣评分','',$v));
                    }
                    if(strpos($v,'IMDb评分') === 0){
                        $movie_dinfo +=array('IMDb评分'=>str_replace('IMDb评分','',$v));
                    }
                    if(strpos($v,'片长') === 0){
                        $movie_dinfo +=array('片长'=>str_replace('片长','',$v));
                    }
                    if(strpos($v,'导演') === 0){
                        $movie_dinfo +=array('导演'=>str_replace('导演','',$v));
                    }
                    if(strpos($v,'主演') === 0){
                        $movie_dinfo +=array('主演'=>str_replace('主演','',$v));
                    }
                    if(strpos($v,'简介') === 0){
                        $movie_dinfo +=array('简介'=>str_replace('简介','',$v));
                    }
                }
            }
        }
        // 解析下载地址
        $movie_dow_html = $ql->find('#endText > table')->htmls();
        $movie_dow = [];
        foreach ($movie_dow_html as $key => $value) {
            $table_ql = QueryList::html($value);
            $tds = $table_ql->find('td')->htmls();
            $movie_dow[$key]['title']=$table_ql->find('td > strong')->text();//表格名字
            $movie_dow[$key]['dow'] = [];
            foreach ($tds as $key2 => $value2) {
                $tds_ql = QueryList::html($value2);
                // 判定有没有连接
                $a = $tds_ql->find('a')->href;
                $a_text = $tds_ql->find('a')->text();
                if(!empty($a)){
                    // 分割名字与地址
                    $ap = explode('：',$tds[$key2]);
                    // 判定是否分隔成功，不成功去读取a标签里面的名字
                    if(count($ap) <= 1){
                        array_push($movie_dow[$key]['dow'],array($a_text=>$a));
                    }else{
                        if(strpos($ap[0],'网盘') === 0){
                            array_push($movie_dow[$key]['dow'],array('网盘'=>$a,'密码'=>$ap[2]));
                        }else{
                            array_push($movie_dow[$key]['dow'],array($ap[0]=>$a));
                        }
                    }
                }
            }
        }
        // 返回数据
        $returnMovie['info'] = $movie_dinfo;
        $returnMovie['img_title'] = $movie_img;
        $returnMovie['img_prv'] = $movie_img_prv;
        $returnMovie['dow'] = $movie_dow;
        // $returnMovie['shuo_id'] = explode('?',$movie_shuo_url)[1];
        $returnMovie['shuo_id'] = $movie_shuo_url;
        return $returnMovie;
    }
    // 获取电影评论
    public function shuoInfo(){
        $url = '/e/pl/?'.$_SERVER['QUERY_STRING'];
        $page = input('page') ?? 0;
        if(!empty($url)){
            $cb = httpPost($this->host.$url.'&page='.$page,'GET');
            // 判定请求是否成功
            if($cb['cinfo']['http_code'] == 200){
                // 解析电影详情
                $movie_shuo = gbkToUtf($cb['rsp']);
                $this->splitShoInfo($movie_shuo);
                // return json(array('err'=>1,'msg'=>'获取数据成功','data'=>$this->splitShoInfo($movie_shuo)));
            }else{
                return json(array('err'=>0,'msg'=>'网络请求失败'));
            }
        }else{
            return json(array('err'=>0,'msg'=>'未收录此电影'));
        }
    }
    // 解析电影评论
    private function splitShoInfo($info){
        $html = str_replace('gb2312','utf8',$info);//改变mate为utf8编码
        $return = [];
        $ql = QueryList::html($html);
        $shuo_pf = $ql->find('#showpf')->text();//评分
        $shuo_pf_num = $ql->find('#fennum')->text();//评分人数
        $shuo_pl_html = $ql->find('table[cellpadding=4]')->htmls();//评论楼数
        $shuo_pl_text = [];
        foreach ($shuo_pl_html as $key => $value) {
            // dv($value);
            $pl_line = QueryList::html($value);
            $shuo_pl_text[$key]['name'] = preg_replace('/\xc2\xa0/','',explode('发表于',$pl_line->find('td:eq(0)')->text())[0]);//发表人昵称
            $shuo_pl_text[$key]['time'] = preg_replace('/\xc2\xa0/','',explode('发表于',$pl_line->find('td:eq(0)')->text())[1]);//时间
            $shuo_pl_text[$key]['support'] = $pl_line->find('span:eq(0)')->text();//支持人数
            $shuo_pl_text[$key]['opposition'] = $pl_line->find('span:eq(1)')->text();//反对人数
            foreach ($pl_line->find('td:eq(2)')->htmls() as $key2 => $value2) {
                $pl = QueryList::html($value2);
                // echo
                // 查找是否有盖楼
                $pl_gl = $pl->find('.ecomment')->htmls();
                if(count($pl_gl)>=1){
                    // dv($pl_gl);
                }else{
                    $shuo_pl_text[$key]['shuo'][$key2]=$value2;
                }
                // dv($value2);
            }
        }
        dv($shuo_pl_text);
    }
}
