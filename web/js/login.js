var ms1 = {
	'phoneName':'18392021969',
	'mima':'Cuiwenxu'
}
ms1=JSON.stringify(ms1);
localStorage.setItem('userMessage',ms1);
//取出用户信息
var usera = localStorage.getItem('userMessage');
console.log(usera);
//将去除信息转换成可操作的数据
var userArr = eval('('+usera+')');

// console.log(userArr[0].phoneName);
//登录数组
var logArr=[];


$('.denglu').click(function(){
	$('.zcbox').css('display','none');
	$('.dlbox').css('display','block');
	$('.zhuce').css('background','white');
	$('.denglu').css('background','gray');
});
$('.zhuce').click(function(){
	$('.zcbox').css('display','block');
	$('.dlbox').css('display','none');
	$('.zhuce').css('background','gray');
	$('.denglu').css('background','white');
});
//正则表达式
var reg1 = /\S/g;//填入信息为空字符串
var reg2 = /^[A-Z][\w]{5,11}$/g;//大写字母打头，最少6位最多12位，中间可以字母数字下划线
var reg3 = /^1[345789][0-9]{9}$/g;//电话号码正则表达式
var reg4 = /[\u4e00-\u9fa5]/g;//判断是不是中文信息
//*************************************************登录页面*********************************************************
$('.dlbox button').click(function(){
	var mingzi =  $('.name').val();
	var psw1 = $('.psw').val();
 	
 	
 	console.log(mingzi.match(reg1));
   	if(mingzi.match(reg1)==null || psw1.match(reg1)==null){
   		alert('请填入完整信息');
   	}
// 	else if(!psw1.match(reg2)){
// 		alert('请输入正确的密码');
// 	}
// 	if(mingzi=='18312345678'&&psw1=='C123456'){
// 		console.log('正确');
//		window.location.href = 'http://127.0.0.1:8020/Chinaview/system/system.html';
// 	}
	var flag = 0;
	//遍历数组验证登录账号是不是正确
	$.each(userArr, function(i,item) {
		flag++;
		console.log(mingzi);
		console.log(psw1);
		if(mingzi==item.phoneName && psw1 == item.mima){
			console.log('正确');
			//将登陆账号录入 Login 里面
			if(localStorage.getItem('Login')==''){
				localStorage.setItem('Login',mingzi);
				window.location.href = 'http://127.0.0.1:8020/Chinaview/system/system.html';
			}
			if(localStorage.getItem('Login')!=''){
//				console.log('已有用户登录');
				$('.tishi').text('已有用户登录');
			}
//			window.location.href = 'http://127.0.0.1:8020/Chinaview/system/system.html';
			return false;
		}
	});
	if(flag == userArr.length){
		$('.name').val('');
		$('.name').attr('placeholder','用户名或密码错误');
	}
})
$('.name').change(function(){
	$('.tishi').text('');
})
//********************************************************************************注册页面***********************************


//电话号码验证
$('.zc1').change(function(){
	
//	var bol = !reg3.test(tel);
//	console.log(bol);
//	if(bol) {
////		alert('请输入正确的电话号码');
////		$('.zc1').val('请输入正确的电话号码');
//		$('.zc1').val('');
//		$('.zc1').attr('placeholder','请输入正确的手机号码');
//	}
	var tel = $('.zc1').val();
	
	console.log(tel);
	if (tel.match(reg3)==null) {
		$('.zc1').val('');
		$('.zc1').attr('placeholder','请输入正确的手机号码');
	}
	//验证电话号码是否重复注册
	$.each(userArr, function(i,item) {
		if(item.phoneName==tel){
			$('.zc1').val('');
			$('.zc1').attr('placeholder','该手机号码已存在');
		}
	});
});
//密码验证
$('.zc2').change(function(){
	var p = $('.zc2').val();
	if (p.match(reg2)==null) {
		$('.zc2').val('');
		$('.zc2').attr('placeholder','请输入大写字母开端，最少6位最多12位的密码');
	}
});
//密码能不能看得见切换
$('.xianshimima').click(function(){
	if($('.zc2').attr('type') == 'password'){
		$('.zc2').attr('type','text');
	}else{
		$('.zc2').attr('type','password');
	}
})
//注册用户名验证

$('.zc3').change(function(){
	var names = $('.zc3').val();
	if (names.match(reg4)==null) {
		$('.zc3').val('');
		$('.zc3').attr('placeholder','请输真实姓名');
	}
});

//************************************************注册信息完善的时候****************************************
//下一步背景变红
$('.zc3').change(function(){
	var t = $('.zc1').val();
	var p = $('.zc2').val();
	var n = $('.zc3').val();
	if(t != '' && p !='' && n != ''){
		$('.zcbox button').css('background','red');
		//******************点击下一步，信息存储到本地，注册成功******************
		$('.zcbox button').click(function(){
			var newuser = {
				phoneName:t,
				mima:p
			}
			//更新用户信息数组
			userArr.push(newuser);
			console.log(userArr);
			//将更新后的数组转换成 JSON 字符串，然后更新本地存储
			newuser1 = JSON.stringify(userArr);
			localStorage.setItem('userMessage',newuser1);
			//注册成功，跳转登录框
			$('.zcbox').css('display','none');
			$('.dlbox').css('display','block');
			$('.zhuce').css('background','white');
			$('.denglu').css('background','gray');
			
		})
	}
})


 
