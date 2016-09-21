/**
 * Created by Administrator on 2016/9/19.
 */
    //https://zmn8.github.io/HuiZhong/
    //https://zmn8.github.io/ajax_award/    抽奖
    //https://zmn8.github.io/Citroen_XTL/    雪铁龙   要改！！！！
    //https://zmn8.github.io/Publish/   //发布
    //https://zmn8.github.io/SpringSport/  //春季运动
    //https://zmn8.github.io/WeChatPay/   微付客
    //https://zmn8.github.io/TiaoBanWeb/   跳板往
var json={
    width:640,
    director:$(".director"),
    contactLinodes:$('.contactMain li'),
    linkjson:{
        "汇众":"https://zmn8.github.io/HuiZhong/" ,
        "雪铁龙":"https://zmn8.github.io/Citroen_XTL/",
        "跳板网":"https://zmn8.github.io/TiaoBanWeb/",
        "春季运动指南":"https://zmn8.github.io/TiaoBanWeb/",
        "超级囤货日":"https://zmn8.github.io/SuperSave/",
        "微付客":"https://zmn8.github.io/WeChatPay/",
        "计算机":"https://zmn8.github.io/MyCalculate/",
        "2048小游戏":"https://zmn8.github.io/2048Game/",
        "发布":"https://zmn8.github.io/Publish/"
    },
    contactJson:{
        0:"电话：15957136209",
        1:"QQ：1033711326",
        2:"邮箱：13136108758@163.com",
        3:"住址：杭州市江干区中国计量大学"
    },

    fadeInFun:function(){
        json.director.animate({"bottom":"0.05rem","opacity":"0"},1000,'ease-out',function(){
            json.director.css({"bottom":"0.4rem","opacity":"1"});
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
    skillFun:function(){
        var ulNods=$(".skill ul") ;
        var liNodes_1=ulNods.eq(0).children();
        liNodes_1.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_1.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_1.eq(2).animate({"color":"#7dc234"},100,function(){
                    liNodes_1.eq(3).animate({"color":"#7dc234"},100,function(){
                        liNodes_1.eq(4).animate({"color":"#7dc234"},100)
                    })
                })
            })
        });
        var liNodes_2=ulNods.eq(1).children();
        liNodes_2.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_2.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_2.eq(2).animate({"color":"#7dc234"},100,function(){
                    liNodes_2.eq(3).animate({"color":"#7dc234"},100,function(){
                        liNodes_2.eq(4).animate({"color":"#7dc234"},100)
                    })
                })
            })
        });
        var liNodes_3=ulNods.eq(2).children();
        liNodes_3.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_3.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_3.eq(2).animate({"color":"#7dc234"},100,function(){
                    liNodes_3.eq(3).animate({"color":"#7dc234"},100)
                })
            })
        });
        var liNodes_4=ulNods.eq(3).children();
        liNodes_4.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_4.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_4.eq(2).animate({"color":"#7dc234"},100,function(){
                    liNodes_4.eq(3).animate({"color":"#7dc234"},100)
                })
            })
        });
        var liNodes_5=ulNods.eq(4).children();
        liNodes_5.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_5.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_5.eq(2).animate({"color":"#7dc234"},100,function() {
                    liNodes_5.eq(3).animate({"color": "#7dc234"}, 100)
                })
            })
        });
        var liNodes_6=ulNods.eq(5).children();
        liNodes_6.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_6.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_6.eq(2).animate({"color":"#7dc234"},100,function(){
                    liNodes_6.eq(3).animate({"color":"#7dc234"},100)
                })
            })
        });
        var liNodes_7=ulNods.eq(6).children();
        liNodes_7.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_7.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_7.eq(2).animate({"color":"#7dc234"},100,function(){
                    liNodes_7.eq(3).animate({"color":"#7dc234"},100)
                })
            })
        });
        var liNodes_8=ulNods.eq(7).children();
        liNodes_8.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_8.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_8.eq(2).animate({"color":"#7dc234"},100,function(){
                    liNodes_7.eq(3).animate({"color":"#7dc234"},100)
                })
            })
        });
        var liNodes_9=ulNods.eq(8).children();
        liNodes_9.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_9.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_9.eq(2).animate({"color":"#7dc234"},100)
            })
        });
        var liNodes_10=ulNods.eq(9).children();
        liNodes_10.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_10.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_10.eq(2).animate({"color":"#7dc234"},100)
            })
        });
        var liNodes_11=ulNods.eq(10).children();
        liNodes_11.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_11.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_11.eq(2).animate({"color":"#7dc234"},100)
            })
        });
        var liNodes_12=ulNods.eq(11).children();
        liNodes_12.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_12.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_12.eq(2).animate({"color":"#7dc234"},100)
            })
        });
        var liNodes_13=ulNods.eq(12).children();
        liNodes_13.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_13.eq(1).animate({"color":"#7dc234"},100,function(){
                liNodes_13.eq(2).animate({"color":"#7dc234"},100)
            })
        });
        var liNodes_14=ulNods.eq(13).children();
        liNodes_14.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_14.eq(1).animate({"color":"#7dc234"},100)
        });
        var liNodes_15=ulNods.eq(14).children();
        liNodes_15.eq(0).animate({"color":"#7dc234"},100,function(){
            liNodes_15.eq(1).animate({"color":"#7dc234"},100)
        });
        var liNodes_16=ulNods.eq(15).children();
        liNodes_16.eq(0).animate({"color":"#7dc234"},100);
    },
    creatiNode:function(){
        var frag=document.createDocumentFragment();
          for(var i=0;i<this.contactLinodes.length;i++){
              var str=this.contactJson[i];
              var strLengh=str.length;
              for(var j=0;j<strLengh;j++){
                  var iNode=document.createElement("i");
                  iNode.textContent=str.charAt(j);
                  iNode.className="ani";
                  $(iNode).attr({"swiper-animate-effect":"bounceInDown","swiper-animate-duration":"1s","swiper-animate-delay":(0.1*(j+1)+0.3)+"s"});
                  frag.appendChild(iNode);
              }
              this.contactLinodes[i].appendChild(frag);

          }

    },
    clearskillFun:function(){
      $('.skill .icon-star').css('color','#e1f2df');
    },
    init:function(){
        var that=this;
       $(function(){
           that.autoFun();
       });
        that.creatiNode();
        window.setInterval( that.fadeInFun,2000);
        window.addEventListener("resize",function(){
            that.autoFun();
        })
    }
};
json.init();