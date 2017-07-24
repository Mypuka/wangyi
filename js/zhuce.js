$('#account').blur(function(){
	var reg=/^(\w)+([+-.]\w+)*@163.com$/;
	if(!reg.test(this.value)){
		
		$('.zhanghao .yanzheng').html('请输入正确邮箱账号');
		$('.zhanghao .yanzheng').removeClass('vali_success');
		$('.zhanghao .yanzheng').addClass('vali_fail');
	}else{
		$.post('data/register.php',{uname:$('#account').val()},function(data){

			if(data.exist==1){
				$('.zhanghao .yanzheng').html(data.msg);
				$('.zhanghao .yanzheng').removeClass('vali_success');
				$('.zhanghao .yanzheng').addClass('vali_fail');
			}else{
				$('.zhanghao .yanzheng').removeClass('vali_fail');
				$('.zhanghao .yanzheng').addClass('vali_success');
			}	
		})
		/*
		$('.zhanghao .yanzheng').removeClass('vali_fail');
		$('.zhanghao .yanzheng').addClass('vali_success');
		*/
	}
});

$('#password').blur(function(){
	var reg=/(?!^[a-zA-Z]+$)(?!^[0-9a-zA-Z]+$)^[0-9A-Za-z,.!?+-@#$%&*()\/]{6,16}$/
	if(!reg.test(this.value)){
		$('.mima .yanzheng').html('请输入正确密码');
		$('.mima .yanzheng').removeClass('vali_success');
		$('.mima .yanzheng').addClass('vali_fail');
	}else{
		$('.mima .yanzheng').removeClass('vali_fail');
		$('.mima .yanzheng').addClass('vali_success');
	}
});

$('#password2').blur(function(){
	var reg=/(?!^[a-zA-Z]+$)(?!^[0-9a-zA-Z]+$)^[0-9A-Za-z,.!?+-@#$%&*()\/]{6,16}$/
	if(this.value!==$('#password').val()||!reg.test(this.value)||this.value==""){
		$('.queren .yanzheng').html('两次密码输入不一致');
		$('.queren .yanzheng').removeClass('vali_success');
		$('.queren .yanzheng').addClass('vali_fail');
	}else{
		$('.queren .yanzheng').removeClass('vali_fail');
		$('.queren .yanzheng').addClass('vali_success');
	}
});

$('#phone').blur(function(){
	var reg=/^1[35678]\d{9}$/;
	if(!reg.test(this.value)){
		$('.phone .yanzheng').html('请输入正确手机号');
		$('.phone .yanzheng').removeClass('vali_success');
		$('.phone .yanzheng').addClass('vali_fail');
	}else{
		$('.phone .yanzheng').removeClass('vali_fail');
		$('.phone .yanzheng').addClass('vali_success');
		$('.btn_sms').css('opacity','1');
		$('.btn_sms').css('cursor','pointer');
	}
});
$('.btn_sms').click(function(){
	$('.btn_sms').css('cursor','default');
	$('.btn_sms').css('opacity','0.6');
	if($('#phone').val()){
		
		console.log($('#phone').val());
		$.post('data/register.php',{uname:$('#account').val()},function(data){
			console.log($('#account').val());
			if(data.exist==0){
				console.log(data.msg);
				$('#sms').blur(function(){
					if($(this).val()!=data.msg){
						$('.duanxin .yanzheng').html('验证码输入错误');
						$('.duanxin .yanzheng').removeClass('vali_success');
						$('.duanxin .yanzheng').addClass('vali_fail');
					}else{
						$('.duanxin .yanzheng').removeClass('vali_fail');
						$('.duanxin .yanzheng').addClass('vali_success');
						$('.btn_register').css('opacity','1');
						$('.btn_register').css('cursor','pointer');
					}
				})
				var t=30;
				$('.btn_sms').html(t+'S后重试');
				var timer=setInterval(function(){
					t--;
					t>=0&&$('.btn_sms').html(t+'S后重试');
					if(t<0){
						clearInterval(timer);
						timer=null;
						$('.btn_sms').html('点击获取验证码');
						$('.btn_sms').css('opacity','1');
						$('.btn_sms').css('cursor','pointer');
					}
				},1000);
			}
		});
	}
});	
$('.btn_register').click(function(){
	var uname=$('#account').val(),
		upwd=$('#password').val(),
		upwd2=$('#password2').val(),
		phone=$('#phone').val(),
		sms=$('#sms').val(),
		zhanghao=$('.zhanghao .yanzheng').html(),
		mima=$('.mima .yanzheng').html(),
		queren=$('.queren .yanzheng').html(),
		xphone=$('.phone .yanzheng').html(),
		btn_sms=$('.btn_sms .yanzheng').html();
	if(uname&&(!zhanghao)&&upwd&&(!mima)&&upwd2&&(!queren)&&phone&&(!xphone)&&sms&&(!btn_sms)){
		$.post('data/add.php',{uname:uname,upwd:upwd,phone:phone},function(data){
			if(data.success){
				$('.body_content').css('display','none');
				$('.body_content2').css('display','block');
			}
		})
	}
	
})



	/*
		if(!$('#regphone').next().html()){
			
			$.post('data/register.php',{phone:$('#regphone').val()},function(data){
				if(data.has==0){
					$('#phone-register').prev().css('visibility','visible');
				}else{
					console.log(data.has);
					$('#auth-code').blur(function(){
						if($(this).val()!=data.has){
							$(this).next().next().html('验证码输入错误');
						}else{
							$(this).next().next().html('');	
						}
					})
					var t=30;
				$('#get-code').attr('disabled',true);
					$('#get-code').addClass('disabled');
					$('#get-code').html(t+'S后重试');
					$('#phone-register').prev().css('visibility','hidden');
					var timer=setInterval(function(){
						t--;
						t>=0&&$('#get-code').html(t+'S后重试');
						if(t<0){
							clearInterval(timer);
							timer=null;
							$('#get-code').removeClass('disabled');
							$('#get-code').html('点击获取验证码');
							$('#get-code').attr('disabled',false);
						}
					},1000);
				}
			
			})
		}else{
			$('#regphone').focus();
		}
	*/
		

