var ozzzz=document.getElementsByClassName("top-reg-ul-zzzz")[0];
var ozzul=document.getElementsByClassName("top-reg-ul-zzzz-ul")[0];
var ozzli1=document.getElementById("top-reg-ul-zzzz-ul-li1");
var ozzli2=document.getElementById("top-reg-ul-zzzz-ul-li2");
ozzzz.addEventListener("mouseover",function(){
	ozzul.style.display="block";
});
ozzzz.addEventListener("mouseout",function(){
	ozzul.style.display="none";
});
ozzul.addEventListener("mouseout",function(){
	ozzul.style.display="none";
});
ozzli1.addEventListener("mouseover",function(){
	ozzli1.style.backgroundColor="#8c6351";
	ozzli1.style.color="white";
});
ozzli1.addEventListener("mouseout",function(){
	ozzli1.style.backgroundColor="";
	ozzli1.style.color="";
});
ozzli2.addEventListener("mouseover",function(){
	ozzli2.style.backgroundColor="#8c6351";
	ozzli2.style.color="white";
});
ozzli2.addEventListener("mouseout",function(){
	ozzli2.style.backgroundColor="";
	ozzli2.style.color="";
});

//搜索清空
var qkq=document.querySelector(".center-log-div3>input");
qkq.onfocus=function(){
	qkq.placeholder="";
}
var qkq=document.querySelector(".center-log-div3>input");
qkq.onblur=function(){
	qkq.placeholder="抢双12神券";
}

// 动起来

var oproduct=document.querySelectorAll(".product-box-imgs-li");
for(var o=0;o<oproduct.length;o++){
	oproduct[o].onmouseover=function(){
		this.style.top=-2+"px";
	}
	oproduct[o].onmouseout=function(){
		this.style.top=0+"px";
	}
}

// 翻页

var oback=document.querySelector(".page-back");
var oforward=document.querySelector(".page-forward");
var onub=document.querySelectorAll(".page-nub");
for(var nn in onub){
	onub[nn].onclick=function(){
		for(var i=0;i<onub.length;i++){
			onub[i].style.background="";
		}
		this.style.background="#845F3F";
	}
}
var nowPage=0;
oback.onclick=function(){
	for(var i=0;i<onub.length;i++){
		onub[i].index=i;
		if(!onub[i].style.background==""){
			nowPage=i;
		}
		onub[i].style.background="";
	}
	nowPage--;
	if(nowPage>=0){
		onub[nowPage].style.background="#845F3F";
	}else{
		onub[0].style.background="#845F3F";
	}
}
oforward.onclick=function(){
	for(var i=0;i<onub.length;i++){
		onub[i].index=i;
		if(!onub[i].style.background==""){
			nowPage=i;
		}
		onub[i].style.background="";
	}
	nowPage++;
	if(nowPage<=2){
		onub[nowPage].style.background="#845F3F";
	}else{
		onub[2].style.background="#845F3F";
	}
}

var www = document.getElementsByClassName("www")[0];
document.onscroll = function() {
	var top = document.documentElement.scrollTop
	if (top >= 200) {
		www.style.display = "block";
	} else {
		www.style.display = "none";
	}
}
var to=document.getElementsByClassName('to')[0];
var kefu=document.getElementsByClassName('wang')[0];
kefu.addEventListener('mousemove',function(){
		to.style.display='block';
		
})
kefu.addEventListener('mouseout',function(){
		to.style.display='none';
})