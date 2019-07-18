$('.manager-btn .btn').click(function() {
			//改变按钮颜色变化
			$('.manager-btn .btn').removeClass('btn-danger');
			$(this).addClass('btn-danger');

			//获取 date-class
			var divClass = $(this).attr('date-class');
			$('.manager div').hide();
			$('.' + divClass).show();
});
//展示列表
var imgString = localStorage.getItem('photos');
console.log(imgString);
//转换成可操作数据
var imgArr = eval('('+ imgString +')');
console.log(imgArr);
//遍历创建列表
$.each(imgArr,function(i,item){
	//创建图片管理列表
	var newObj = $('<tr><td>'+item.name+'</td><td><img src="'+ item.imgurl +'" alt="" /></td><td><div class="sure"><p> 你删一个试试！别后悔！</p><button class="yes">是</button><button class="no">否</button></div><button class="btn-info" class="changeBtn" onclick="change(this)" change-id="'+i+'" data-toggle="modal" data-target="#changeModal">修改</button><button class="btn-warning" onclick="delImg(this)" data-id="'+i+'">删除</button></td></tr>');
	//将新的对象添加到商品展示表格中
	$('.box table').append(newObj);
});

//添加按钮的点击事件（添加图片）
$('#subImg').click(function(){
	var i_name = $('#iname').val();
	var i_imgurl = $('#iImg').val();
	//将获取到的信息组装成一个对象
	var newImgObj = {
		imgurl: i_imgurl,
		name: i_name
	};
	imgArr.push(newImgObj);//添加新数据
	//将最新的 ingArr转换成Json 字符串更新 localStorage
	var newString = JSON.stringify(imgArr);
	localStorage.setItem('photos',newString);
	//刷新页面
	history.go(0);
})

//修改图片函数
function change(c){
	var index = $(c).attr('change-id');
	console.log(index);
	//模态框显示的名字 value
	 $('#changeName').val(imgArr[index].name);
	//模态框显示的图片路径
	$('#changeImg').val(imgArr[index].imgurl);
	$('#subChange').click(function(){
		//获取要修改的内容
		var c_name = $('#changeName').val();
		var c_imgurl = $('#changeImg').val();
		//将获取到的信息组装成一个对象
		var newChangeObj = {
			imgurl:c_imgurl,
			name: c_name
			
		};
		imgArr.splice(index,1,newChangeObj);
		var newString = JSON.stringify(imgArr);
		localStorage.setItem('photos',newString);
		history.go(0);
	})
}
//创建删除图片函数
function delImg(b) {
	
			$('.sure').css({
			'display':'block',
			'transform':'rotateY(90deg)'
			});
			setTimeout(function(){
				$('.sure').css({
				'transform':'rotateY(360deg)',
				'transition':'transform 2s'
				
			});
			},1);
			
			
			//a:点击的删除
			//获取删除的这条信息在 goodArr 中的位置
			var index = $(b).attr('data-id');
			console.log(index);
			//确定给删除了
			$('.yes').click(function(){
				//从数组中删除当前信息
				imgArr.splice(index,1);
				//将 goodArr转换成字符串
				var newString = JSON.stringify(imgArr);
				localStorage.setItem('photos', newString);
			
				//刷新页面
				history.go(0);
			});
			$('.no').click(function(){
				$('.sure').css('display','none');
			})
		}
console.log(imgArr);

//获取用户信息
//展示列表
var userString = localStorage.getItem('userMessage');
console.log(userString);
//转换成可操作数据
var userArr = eval('('+ userString +')');
console.log(userArr);

$.each(userArr,function(i,item){
	//创建用户管理列表
	var newObj = $('<tr><td>'+item.phoneName+'</td><td>'+item.mima+'</td><td><div class="usersure"><p> 你删一个试试！别后悔！</p><button class="useryes">是</button><button class="userno">否</button></div><button class="btn-info" class="changeBtn" onclick="changeUser(this)" uxiugai-id="'+i+'" data-toggle="modal" data-target="#modal4">修改</button><button class="btn-warning" onclick="delUser(this)" ushanchu-id="'+i+'">删除</button></td></tr>')
	//将新的对象添加到用户信息展示表格中
	$('.userManager table').append(newObj);
});
//添加用户信息
$('#subUser').click(function(){
	var u_name = $('#phone1').val();
	var u_psw = $('#pswd1').val();
	//将获取到的信息组装成一个对象
	var newUserObj = {
		phoneName: u_name,
		mima: u_psw
	};
	userArr.push(newUserObj);//添加新数据
	//将最新的 ingArr转换成Json 字符串更新 localStorage
	var newString = JSON.stringify(userArr);
	localStorage.setItem('userMessage',newString);
	//刷新页面
	history.go(0);
})


	//修改用户函数
function changeUser(d){
	console.log(userArr);
	var index = $(d).attr('uxiugai-id');
	console.log(index);
	console.log(userArr[index].phoneName);
	//模态框显示的手机账号 value
	$('#phone2').val(userArr[index].phoneName);
	
	//模态框显示用户密码
	$('#pswd2').val(userArr[index].mima);
	$('#subUser2').click(function(){
		//获取要修改的内容
		var u_name = $('#phone2').val();
		var u_psw = $('#pswd2').val();
		//将获取到的信息组装成一个对象
		var newUserObj = {
		phoneName: u_name,
		mima: u_psw
	};
		userArr.splice(index,1,newUserObj);
		var newString = JSON.stringify(userArr);
		localStorage.setItem('userMessage',newString);
		history.go(0);
	})
}

//删除用户
//创建删除图片函数
function delUser(h) {
	
			$('.usersure').css({
			'display':'block',
			'transform':'rotateY(90deg)'
			});
			setTimeout(function(){
				$('.usersure').css({
				'transform':'rotateY(360deg)',
				'transition':'transform 2s'
				
			});
			},1);
			
			
			//a:点击的删除
			//获取删除的这条信息在 goodArr 中的位置
			var index = $(h).attr('ushanchu-id');
			console.log(index);
			//确定给删除了
			$('.useryes').click(function(){
				//从数组中删除当前信息
				userArr.splice(index,1);
				//将 goodArr转换成字符串
				var newString = JSON.stringify(userArr);
				localStorage.setItem('userMessage', newString);
			
				//刷新页面
				history.go(0);
			});
			$('.userno').click(function(){
				$('.usersure').css('display','none');
			})
		}
//账户登录
$('.denglu').text(localStorage.getItem('Login'));
//退出登录
$('.tuichu').click(function(){
//置空Login，链接到登录页面
localStorage.setItem('Login','');
window.location.href = 'http://127.0.0.1:8020/Chinaview/web/login.html';
})

