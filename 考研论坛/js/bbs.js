//ÂÖ²¥²å¼þ
function AdSlider(){
    this.wrap = jQuery('.adsys_slider'),
    this.timer = null,
    this.ul = jQuery('ul',this.wrap),
    this.i = 0;
    this.bigUrl = jQuery('.adsys_bigpic a','.adsys_slider'),
    this.bigPic = jQuery('.adsys_bigpic img','.adsys_slider'),
    this.desc = jQuery('.adsys_bigpic span','.adsys_slider'),
    this.li = jQuery('li',this.ul).eq(0),
    this.size = jQuery('li',this.ul).size()
}
AdSlider.prototype = {
    play : function(i){
        var curLi = jQuery('li',this.ul).eq(this.i),
            strSrc = jQuery('img',curLi).attr('src'),
            strUrl=jQuery('a',curLi).attr('href'),
            strAlt = jQuery('img',curLi).attr('alt');

        this.bigPic.attr('src',strSrc);
        this.bigUrl.attr('href',strUrl);
        this.desc.text(strAlt);
        jQuery('li',this.ul).eq(this.i).addClass('on').siblings().removeClass('on');
    },
    bindEvent : function(){
        var _this = this;

        jQuery('li',this.ul).on('mouseenter',function(){
            clearInterval(_this.timer);
            var _self = jQuery(this);
                _this.i = _self.index();
            _this.play();
        }).on('mouseleave',function(){
            var _self = jQuery(this);
                _this.i = _self.index();
            _this.auto();
        });
    },

    auto : function(){
        var _this = this;
        var _w = _this.li.width();


        _this.timer = setInterval(function(){
            _this.play();
            _this.i++;

            if(_this.i > _this.size - 1) {
                _this.i = 0;
                _this.ul.animate({
                    left : 0
                },600)
            }

            if(_this.i > 6 && _this.i < _this.size){
                _this.ul.animate({
                    left : - parseInt((_this.i - 6) * _w - 17) + 'px'
                },600)
            }
        },4000)
    },
    rander : function(){
        this.ul.css({
            'width' : this.li.width()*this.size + 'px'
        });
    },
    init : function(){
        this.rander();
        this.play();
        this.auto();
        this.bindEvent();
    }
}
jQuery(function(){
	//ÅÅÐÐ°ñ
    if(jQuery('.adsys_rank')[0]){
        jQuery('.adsys_rank_bd li','.adsys_rank').on('mouseenter',function(){
            jQuery(this).addClass('on').siblings().removeClass('on');
        })
    }

    //ÂÖ²¥Í¼
    if(jQuery('.adsys_slider')[0]){
        var mySlider = new AdSlider();
        mySlider.init();
    }
});

//¶ÔÁª

function fbScrolltopright_close(){
    jQuery('#fbScrolltopright').remove();
    return true;
}
function fbScrolltopleft_close(){
    jQuery('#fbScrolltopleft').remove();
    return true;
}


//ÂÖ²¥Í¼
var k=0;
var timers= setInterval(autoplay,3000)
jQuery('#slideBox .hd li').hover(function() {
 
    k=jQuery(this).index();
    jQuery("#slideBox .bd li").eq(k).fadeIn('700').siblings('li').fadeOut('700');
    jQuery("#slideBox .hd li").eq(k).addClass('on').siblings('li').removeClass('on');
 
});

jQuery("#slideBox").hover(function() {
    clearInterval(timers);
}, function() {
    timers= setInterval(autoplay,3000);
});
function autoplay(){
    k++;
    if(k>4){
        k=0
    }
    jQuery("#slideBox .bd li").eq(k).fadeIn('700').siblings('li').fadeOut('700');
    jQuery("#slideBox .hd li").eq(k).addClass('on').siblings('li').removeClass('on');
}

