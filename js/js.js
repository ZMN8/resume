/**
 * Created by Administrator on 2016/9/19.
 */
var json={
    width:640,
    director:$(".director"),
    dir:$(".dir"),
    fadeInFun:function(){
        json.director.animate({"bottom":"0.05rem"},1000,'ease-out');
        json.dir.animate({"opacity":"0"},1000,'ease-out',function(){
            json.director.css("bottom","0.2rem");
            json.dir.css("opacity","1");
        });

    },
    autoFun:function(){
        var winWidth=document.documentElement.clientWidth;//屏幕可视宽度
        if(winWidth>this.width){
            document.documentElement.style.fontSize=625+"%";
        }else{
            document.documentElement.style.fontSize=winWidth/this.width*625+"%";
        }
    },
    init:function(){
        var that=this;
        that.autoFun();
        window.setInterval( that.fadeInFun,2000);
        window.addEventListener("resize",function(){
            that.autoFun();
        })
    }
}
json.init();