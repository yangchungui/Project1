
//	1-三个事件,鼠标按下,鼠标移动,鼠标抬起
//	鼠标按下
	$('.step-bg').onmousedown = function(event){
		var ev = window.event || event;
//		获取到鼠标点,距离当前盒子的左侧(顶部)的距离
		var mouseX = ev.clientX - this.offsetLeft;
		var mouseY = ev.clientY - this.offsetTop;
		//	鼠标移动
		document.documentElement.onmousemove = function(event){
			var eve = window.event || event;
//			鼠标移动的时候,不断的获取鼠标的XY坐标
//			需要减去鼠标点击时的距离
			var currentW = eve.clientX - mouseX;
			var currentH = eve.clientY - mouseY;
			
			//获取其最大值
			var maxW = document.documentElement.clientWidth - $('.step-bg').offsetWidth;
//			判断边界
			/*if(currentW <= 0){
				currentW = 0
			}else if(currentW >= x1){
				currentW = x1;
			}*/
//			扩展方法:
			currentW = Math.max(currentW,0);
			currentW = Math.min(currentW,maxW);
			
//			将该值赋给DIV
			$('#obj').style.left = currentW + 'px';
			$('#obj').style.top = currentH + 'px';
		}
		//	鼠标抬起
		
	}
	document.documentElement.onmouseup = function(){
//			将鼠标移动+鼠标按下 事件统统的取消
			this.onmousemove = this.onmousedown = null;
		}