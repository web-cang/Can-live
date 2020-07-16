/**
 * Created by 沧海 on 2020/7/13.
 */
$(function(){
//判断页面是手机端还是pc端
    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    var turl="";
//如果是手机端打开
    if(!IsPC()){
        turl="http://m.i6tou.com/topic/sports";
        var _str=location.href.split('?')[1];
        if(typeof(_str)!="undefined"){
            turl=turl+"?"+_str;
        }
        window.location.href = turl;
    }
});
