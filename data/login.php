<?php
/**接收客户端提交的用户名和密码，验证是否正确**/
/**
返回数据类型，使用JSON类型：
正确： {"status": 1, "msg":"强东" }
不存在： {"status": -404, "msg":"用户名或密码错误"}
**/
header('Content-Type: application/json');
$output = ['verify'=>1,'msg'=>''];
$uname = $_REQUEST['uname'];
$upwd = $_REQUEST['upwd'];
$conn = mysqli_connect('127.0.0.1','root','','yunketang', 3306);
mysqli_query($conn, 'SET NAMES UTF8');
$sql = "SELECT * FROM yunketang_users WHERE email='$uname' AND pwd='$upwd'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

if($row){
	$output['msg']=$uname;
}else {
	$output['verify']=0;
	$output['msg']= '用户名或密码或验证码错误';
}

echo json_encode($output);
?>