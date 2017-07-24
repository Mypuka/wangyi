<?php
header('Content-Type:application/json');
$uname=$_REQUEST['uname'];
$conn=mysqli_connect('127.0.0.1','root','','yunketang',3306);
mysqli_query($conn,'SET NAMES UTF8');
$sql="SELECT * FROM yunketang_users WHERE email='$uname'";


$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$str='';
for($i=0;$i<4;$i++){
	$str.=round(rand(0,9));
}	
$output=['exist'=>1,'msg'=>''];	
if($row){
	$output['msg']="该账号已被注册";		
}else{
	$output['exist']=0;
	$output['msg']=$str;
}
echo json_encode($output);
?>