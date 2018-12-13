//1. 随机数函数
/*var sui=0;
	for(var i=0;i<4;i++){
		sui+=random(0,9)+''
		
	}
	console.log(sui);*/
function random(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}
//2. id class tag标签获取函数
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
//3.阻止事件的默认行为
//【参数】【object】event对象
//【返回】无
function preventDefault(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}
//4.阻止事件冒泡
//【参数】[object]event对象
//【返回】无
function stopPropagation(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}
//5.十六进制随机颜色
function color(){
			var color='#';
			for(var i=0;i<6;i++){
				color+='0123456789abcdef'[Math.floor(Math.random()*16)]
			}
			return color;
		}
//6.随机验证码






