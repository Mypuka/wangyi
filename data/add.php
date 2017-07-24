<?php
header('Content-Type:application/json');
$uname=$_REQUEST['uname'];
$upwd=$_REQUEST['upwd'];
$phone=$_REQUEST['phone'];
$conn=mysqli_connect('127.0.0.1','root','','yunketang',3306);
mysqli_query($conn,'SET NAMES UTF8');
$sql="INSERT INTO yunketang_users VALUES('$uname','$upwd','$phone');";
$result=mysqli_query($conn,$sql);
$output=['success'=>false];
if($result){
	$output['success']=true;
}
echo json_encode($output);
?>
