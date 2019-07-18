var mySwiper = new Swiper('.swiper-container', {
	autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop:true,
    },
    //控制左右
     navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function(){
      if(this.isEnd){
        this.navigation.$nextEl.css('display','none');
      }else{
        this.navigation.$nextEl.css('display','block');  
      }
    },
  },
})

 //鼠标经过停止播放
  mySwiper.el.onmouseover = function(){
  mySwiper.autoplay.stop();
}
  //鼠标移除自动播放
  mySwiper.el.onmouseout = function(){
  mySwiper.autoplay.start();
}
 //介绍点击影藏出现内容
 $('.intro-btn .btn').click(function() {
			//改变按钮颜色变化
			$('.intro-btn .btn').removeClass('btn-danger');
			$(this).addClass('btn-danger');

			//获取 date-class
			var divClass = $(this).attr('date-class');
			console.log(divClass);
			$('.introduce div').hide();
			$('.' + divClass).show();
			
		});

//图片展示部分
//取出数据
var photo = localStorage.getItem('photos');
console.log(photo);
//将取出的json 格式的字符转换成可操作数据格式（数组或者对象）
var picture = eval('('+ photo +')');
console.log(picture);
//遍历数组将图片添加进页面
$.each(picture,function(i,item){
	var newObj = $('<div class="col-xs-12 col-sm-6 col-md-3"><img src="'+item.imgurl+'" alt="" /><p>'+item.name+'</p></div>');
	//将新元素添加到页面
	$('.container3 .row').append(newObj);
});


//滚轮事件
function getScrollTop(){ 
		var scrollTop=0; 
		if(document.documentElement&&document.documentElement.scrollTop){ 
			scrollTop=document.documentElement.scrollTop; 
		}else if(document.body){ 
			scrollTop=document.body.scrollTop; 
		} 
		return scrollTop; 
	} 
	document.onscroll = function(){
		var a = getScrollTop();
		console.log(a);
		if(a>=120){
			$('.serchbox').css({
				'position':'fixed',
				'top':'0',
				'left':'3%',
				'z-index':'999'
			});	
			$('.fanhui').css('display','block');
			$('.fanhui').click(function(){
				document.documentElement.scrollTop = 0;
			})
		}
		if(a<120){
			$('.serchbox').css({
				'position':'relative',
			});
			$('.fanhui').css('display','none');
		}
	}

		