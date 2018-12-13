/*<div id="step-bg">
	<input id="step-input" type="image" src="img/1 (18).png"/>
</div>*/

$("#step-input").onmousedown=function(event){
		var eve=event||window.event;
		
		var offsetLeft1=eve.clientX-this.offsetLeft;
		var offsetTop1=eve.clientY-this.offsetTop;
		
		$("#step-bg").onmousemove=function(event){
			var eve=event||window.event;
			var nowLeft=eve.clientX-offsetLeft1;
			var nowTop=eve.clientY-offsetTop1;
			
			//获取其最大值
			var maxLeft=$('#step-bg').offsetWidth-$('#step-input').offsetWidth;
			var maxTop=$('#step-bg').offsetHeight-$('#step-input').offsetHeight;
			//x轴的取值范围
			nowLeft=Math.max(nowLeft,0);
			nowLeft=Math.min(nowLeft,maxLeft);
			//y轴的取值范围
			nowTop=Math.max(nowTop,0);
			nowTop=Math.min(nowTop,maxTop);
		
			$("#step-input").style.left=nowLeft+"px";
			$("#step-input").style.top=nowTop+"px";
			$(".movebg")[0].style.width=nowLeft+"px";
			
			var movebgwidth=$(".movebg")[0].offsetWidth;
			
			if(movebgwidth==378){
				$(".movebg")[0].innerHTML=verifyCode();
			}
			
		}
	}
	document.onmouseup=function(){
		$("#step-bg").onmousemove=null;
	}
	function verifyCode () {
        var sStr ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var sVerify = '' ;
        for ( var i = 0 ; i < 4; i++) {
            var iCode = Math.floor(Math.random() * sStr.length);
    
            sVerify += sStr[iCode];
            
        }
        return sVerify;
    };