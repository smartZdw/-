
// 18周年庆
// var zhanqingCookie = getCookieFun('18zhounian');
// if (!zhanqingCookie) {
//     document.write('<style type="text/css">.celebrateDialog{width:100%;height:100%;background:rgba(0,0,0,.5);position:fixed;left:0;top:0;z-index:10000;}.celebrateDialog .main{position:fixed;width:400px;height:437px;left:50%;top:50%;margin-left:-200px;margin-top:-218px;z-index:9999;background:url(http://cdn1.kybimg.com/img/2017/07/06/194834_595e23922c7a4.png);}.celebrateDialog .dialog_close{width:20px;height:20px;position:absolute;right:20px;top:20px;background:url(http://cdn1.kybimg.com/img/2016/11/07/180405_582051952018d.png) no-repeat;text-indent:-999em;overflow:hidden;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.celebrateDialog .dialog_close:hover{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.celebrateDialog .btn_ling{position:absolute; width:100%; height:109px; bottom:0;}</style>');
//     setTimeout(function() { 
//         jQuery(function(){       
//             jQuery('<div class="celebrateDialog" id="J_celebrateDialog"><div class="main"><a href="#" class="dialog_close"></a><a href="http://bang.kaoyan.com/play/view/zhounianqing18" target="_blank" class="btn_ling"></a></div></div>').appendTo('body');
//             jQuery('.dialog_close').bind('click', function(e) {
//                 e.preventDefault();
//                 jQuery('#J_celebrateDialog').fadeOut(300, function() {
//                     jQuery('#J_celebrateDialog').remove();
//                 });
//             })   
//         }); 

//         setCookieFun('18zhounian','true',3);         
//     }, 1000);
// }

//获取cookie
function getCookieFun(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return (unescape(arr[2]));
    } else {
        return "";
    }
}

//设置cookie
function setCookieFun(name, value, hour) {
   var exp = new Date();
    var h = hour || 24; //默认过期时间24小时
    exp.setTime(exp.getTime() + h * 60 * 60 * 1000);
    var path = '/';
    var domain = '.' + this.getDomain();
    var secure = false;
    document.cookie = name + "=" + escape(value) + ((exp == null) ? "" : ("; expires=" + exp.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
}

//删除cookie
function delCookieFun(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookieFun(name);
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + '; path=/; domain=.' + getDomain();
}

//获得域名
function getDomain() {
    var domain = document.domain;
    domain = domain.split('.');
    return domain[domain.length - 2] + '.' + domain[domain.length - 1];
}