var zhong=document.getElementsByClassName('fan')[0];
var ying=document.getElementsByClassName('ying')[0];
var zi=document.getElementsByClassName('zi')[0];
var yuyan=document.getElementById('yuyan');
yuyan.addEventListener('mousemove',function(){
	zi.style.display='block'
	// ying.style.display='block'
})
yuyan.addEventListener('mouseout',function(){
	zi.style.display='none'
	// ying.style.display='none'
})
zi.addEventListener('mousemove',function(){
	zi.style.display='block'
	// ying.style.display='block'
	zhong.addEventListener('mousemove',function(){
		zhong.style.backgroundColor='#ff5c00'
		zhong.style.opacity='.5'
	})
	zhong.addEventListener('mouseout',function(){
		zhong.style.backgroundColor=''
		zhong.style.opacity=''
	})
	zhong.addEventListener('click',function(){
		yuyan.innerHTML='中文繁体'
	})
	ying.addEventListener('click',function(){
		yuyan.innerHTML='	Eglish'
	})
	ying.addEventListener('mousemove',function(){
		ying.style.backgroundColor='#ff5c00'
		ying.style.opacity='.5'
	})
	ying.addEventListener('mouseout',function(){
		ying.style.backgroundColor=''
		ying.style.opacity=''
	})
})
zi.addEventListener('mouseout',function(){
	zi.style.display='none'
})
var denglu=document.getElementsByClassName('card-1-2')[0];
var zhuce=document.getElementsByClassName('card-1-3')[0];
var xia= document.getElementsByClassName('card-1-1')[0];
var diyi=document.getElementsByClassName('content')[0];
var card=document.getElementsByClassName('card')[0];
var qita=document.getElementsByClassName('login-title')[0];
var ppp=document.getElementsByClassName('content-a')[0];
zhuce.addEventListener('click',function(){
	xia.style.left=105+'px';
	zhuce.style.color='black';
	denglu.style.color='#BBBBBB';
	diyi.style.display='none';
	card.style.height=500+'px';
	qita.style.marginTop=380+'px'
	ppp.style.left=430+'px'
	ppp.style.display='block'
})
denglu.addEventListener('click',function(){
	ppp.style.display='none'
	xia.style.left=44+'px'
	denglu.style.color='black'
	zhuce.style.color='#BBBBBB';
	diyi.style.display='block';
	diyi.style.height='';
	card.style.height='';
	qita.style.marginTop=''
})
var made=document.getElementsByClassName('made');
var ospan=document.querySelector('.made>span');
var yz=document.querySelector('.made>a');

yz.onclick=function(){
	var A=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
	var a=parseInt(Math.random()*10)
	var q=parseInt(Math.random()*10)
	var b=parseInt(Math.random()*26);
	var z=parseInt(Math.random()*26);
	var d=A[b]
	var w=A[z]
	var c=parseInt(Math.random()*4)
	var ww=a+d+q+w
	yz.innerHTML=ww
}
var reg1 = /^1[34578][0-9]{9}$/g
var sji=document.getElementsByClassName("content-3-1")[1];
var ipt1 = document.getElementById('ipt1');

// .nextSibling
ipt1.onfocus = function() {
	// ipt1.nextSibling=''
				sji.innerHTML.span='手机号码11位'
				ipt1.value = "手机号码11位";
			}
			
			
ipt1.onblur = function() {
				if (reg1.test(ipt1.value) && ipt1.value != "") {
					ipt1.className= 'gre';	
				} else {
					reg1.className= 'red';
				}
			}

var odiv=document.getElementById('2p');
var qq=document.getElementById('2q');

qq.onfocus = function() {
	// ipt1.nextSibling=''
				odiv.innerHTML='请输入手机号码'
			}
			qq.onblur = function() {
							if (reg1.test(qq.value) && qq.value != "") {
								odiv.innerHTML=qq.value
								qq.value=''
								odiv.className='gre'
								// qq.className= 'gre';	
							} else {
								odiv.innerHTML=qq.value
								qq.value=''
								odiv.className= 'red';
							}
						}