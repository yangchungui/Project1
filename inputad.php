<?php
	header('Content-type:text/html;charset=utf-8');
	//1.接收数据
	$stepPhone=$_GET['stepPhone'];
	$userpass=$_GET['userpass'];
	//2.从数据库中查询
	$conn=mysql_connect('localhost','root','root');	
	if(!$conn){
		die('连接失败'.mysql_error());
//		3.响应
	}else{
//      2).选择数据库
		mysql_select_db('pro',$conn);
//		3.执行SQL语句
		$sqlstr="select *from phone where stepPhone='$stepPhone'";
		$result=mysql_query($sqlstr,$conn);
//		4.关闭数据库
		mysql_close($conn);
		if(mysql_num_rows($result)==0){
			echo '0';//没有人注册
		}else{
			echo '1';//已经有人注册了
		}
	}
?>