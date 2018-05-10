<?php
namespace app\api\controller;

class DouBan{
    private $host = 'http://api.douban.com/v2/movie/';

    public function index()
    {
        return '你好，豆瓣APIV2';
    }

    // 获取电影信息
    public function getMovieInfo(){
        $q = input('name');
        if(!empty($q)){
            $url = $this->host.'search?q='.$q.'&count=1';
            $cb = httpPost($url,'','GET');
            // dv($cb);
            if($cb['cinfo']['http_code'] == 200){
                return json(array('err'=>1,'msg'=>'获取数据成功','data'=>json_decode($cb['rsp'])));
            }else{
                return json(array('err'=>0,'msg'=>'网络请求失败'));
            }
        }else{
            return json(array('err'=>0,'msg'=>'参数不正确'));
        }
    }
}
