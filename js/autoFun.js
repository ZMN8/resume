/**
 * Created by Administrator on 2016/9/20.
 */
autoFun=function(width){
    var winWidth=document.documentElement.clientWidth;//屏幕可视宽度
    if(winWidth>width){
        document.documentElement.style.fontSize=625+"%";
    }else{
        document.documentElement.style.fontSize=winWidth/this.width*625+"%";
    }
}
autoFun(640);
window.addEventListener('resize',function(){
    autoFun(640);
})