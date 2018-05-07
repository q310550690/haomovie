<?php
namespace app\api\controller;
use QL\QueryList;
class Haomovie
{
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
        $page = input('page')?input('page'):0;
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
                $returnArr = array('err'=>1,'msg'=>'搜索成功','data'=>$this->splitSearch($rcb['rsp']));
                return json($returnArr);
            }else{
                $returnArr = array('err'=>0,'msg'=>'未知错误');
                return json($returnArr);
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
                    $resut[$key]['url']=str_replace('http://www.hao6v.com','',$url_array[1][0]);
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
            $cb = httpPost('http://www.hao6v.com'.$url,'','GET');
            // 判定请求是否成功
            if($cb['cinfo']['http_code'] == 200){
                // 解析电影详情
                $movie_info = gbkToUtf($cb['rsp']);
                $this->splitMovieInfo($movie_info);
            }else{
                $returnArr = array('err'=>0,'msg'=>'网络请求失败');
                return json($returnArr);
            }
        }else{
            $returnArr = array('err'=>0,'msg'=>'未收录此电影');
            return json($returnArr);
        }
    }
    // 解析电影详情
    private function splitMovieInfo($info){
        $html = str_replace('gb2312','utf8',$info);//改变mate为utf8编码
        $ql = QueryList::html($html);
        // echo $html;
    }
}
