<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
// use think\Request;
// use think\Session;
// use think\Controller;
// 模拟请求
function httpPost($url,$rsp="",$qer=""){
    $ch = curl_init();
    curl_setopt_array($ch, array(
        // CURLOPT_PROXY=>'127.0.0.1:8888',//设置代理服务器
        CURLOPT_URL => $url,
        CURLOPT_MAXREDIRS => 1, //重定向次数
        CURLOPT_TIMEOUT => 30, // 超时时间
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => $qer?"GET":"POST",
        CURLOPT_POSTFIELDS => $rsp,
        CURLOPT_SSL_VERIFYPEER => false,//终止从服务器端验证
        CURLOPT_RETURNTRANSFER => true,//不直接输出内容
        // CURLOPT_FOLLOWLOCATION => true,// 跟踪重定向
        CURLOPT_HTTPHEADER => array(
            "Cache-Control: no-cache",
            "Content-Type: application/x-www-form-urlencoded",
            'content-length:' . strlen($rsp),
        ),
        ));
    $response = curl_exec($ch);
    $cinfo = curl_getinfo($ch);
    curl_close($ch);
    return array('rsp'=>$response,'cinfo'=>$cinfo);
}
// gbk 转 utf8
function gbkToUtf($d){
    return mb_convert_encoding($d,'UTF-8', 'UTF-8,GBK,GB2312,BIG5');
}
// utf8 转 gbk
function utfToGbk($d){
    return mb_convert_encoding($d,'gbk', 'UTF-8,GBK,GB2312,BIG5');
}
// 原样输出html
function echoHtml($html){
    return htmlentities($html,ENT_QUOTES,"UTF-8");
}
