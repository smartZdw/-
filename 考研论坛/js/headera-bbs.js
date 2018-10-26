var strhref = window.location.href;

document.writeln("<div class=\"kyFr\" id=\"J_kyFr\" >");
document.writeln("<ul class=\"hdkyList\" id=\"J_hdkyList\" >");
document.writeln("<li><a href=\"register.html\" rel=\"nofollow\" title=\"注册\" target=\"_self\">注册<\/a><\/li>");
document.writeln("<li class=\"kyGap\"><\/li>");
document.writeln("<li><a href=\"login.html\" rel=\"nofollow\" title=\"登录\" target=\"_self\">登录<\/a><\/li>");
document.writeln("<\/ul>");
document.writeln("<ul class=\"kyAccount\" id=\"J_kyAccount\">" );
document.writeln("<li class=\"kyWb\"><a href=\"http:\/\/bbs.kaoyan.com\/plugin.php?id=xd_weibo:bind\" rel=\"nofollow\" title=\"微博\" target=\"_blank\">微博<\/a><\/li>");
document.writeln("<li class=\"kyQq\"><a href=\"http:\/\/bbs.kaoyan.com\/connect.php?mod=login&amp;op=init&amp;referer=http%3A%2F%2Fbbs.kaoyan.com%2F&amp;statfrom=login\" rel=\"nofollow\" title=\"QQ\" target=\"_blank\">QQ<\/a><\/li>");
document.writeln("<li class=\"kyRen\"><a href=\"http:\/\/graph.renren.com\/oauth\/authorize?client_id=ce906dd0dd6645b991e53e3c4d52117e&amp;response_type=code&amp;scope=publish_feed,publish_blog,status_update,publish_share&amp;redirect_uri=http:\/\/bbs.kaoyan.com\/plugin.php?id=renren:auth\" rel=\"nofollow\" title=\"人人\" target=\"_blank\">人人<\/a><\/li>");
document.writeln("<\/ul>");
document.writeln("<ul class=\"kyHandle\" id=\"kyHandle\">");
document.writeln("<li class=\"kyMobile\">");
document.writeln("<\/li>");
document.writeln("<\/ul>");
document.writeln("<\/div>");

var kyUserAuth = getCookie("FDX_auth");
var oKyList = document.getElementById('J_hdkyList');
var okyAccount = document.getElementById('J_kyAccount');
var oKyFr = document.getElementById('J_kyFr');

if(kyUserAuth){
    removeElement(oKyList);
    removeElement(okyAccount);
    var tempNode = document.createElement('p');
    tempNode.className = 'kyMyInfo';
    tempNode.innerHTML = '<p class="kyMyInfo"><span>Hi，欢迎进入：</span><a href="http://i.kaoyan.com/" target="_blank">个人中心</a><a href="http://bbs.kaoyan.com/forum.php?mod=guide&amp;view=my" target="_blank">我的帖子</a><a href="http://bbs.kaoyan.com/home.php?mod=space&amp;do=pm" target="_blank">消息</a><span class="kyGap"></span><a href="http://i.kaoyan.com/logout" target="_self">退出</a></p>';

    oKyFr.insertBefore(tempNode,oKyFr.childNodes[0]);
}else{
    //$(".kyFr").children().not($("#kyHandle")).show();
}

function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function removeElement(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
        _parentElement.removeChild(_element);
    }
}
