var obtns = document.getElementsByClassName('anliua')[0];
var obtnx = document.getElementsByClassName('anana')[0];
var top_r = document.getElementsByClassName('right-top-r')[0];
var obox = document.getElementsByClassName('left-top-l')[0];
var pica = document.getElementsByClassName('pic')[0];
var picb = document.getElementsByClassName('pic')[1];
var picc = document.getElementsByClassName('pic')[2];
var picd = document.getElementsByClassName('pic')[3];
var pice = document.getElementsByClassName('pic')[4];

var obig = document.querySelector(".big");
obtns.addEventListener('click', function() {
	top_r.style.top = '-96px'
})
obtnx.addEventListener('click', function() {
	top_r.style.top = '0px'
})
picb.addEventListener('click', function() {
	picb.style.borderWidth = '1px'
	picc.style.borderWidth = '0.2px'
	picd.style.borderWidth = '0.2px'
	pice.style.borderWidth = '0.2px'
	pica.style.borderWidth = '0.2px'
	var img = obox.lastElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu2.png");
	img.parentNode.replaceChild(newImg, img);
})
picb.addEventListener('click', function() {
	picb.style.borderWidth = '1px'
	picc.style.borderWidth = '0.2px'
	picd.style.borderWidth = '0.2px'
	pice.style.borderWidth = '0.2px'
	pica.style.borderWidth = '0.2px'
	var img = obig.firstElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu2.png");
	img.parentNode.replaceChild(newImg, img);
})
// console.log(datu.lastElementChild)
picc.addEventListener('click', function() {
	picc.style.borderWidth = '1px'
	picd.style.borderWidth = '0.2px'
	pice.style.borderWidth = '0.2px'
	pica.style.borderWidth = '0.2px'
	picb.style.borderWidth = '0.2px'
	var img = obox.lastElementChild;
	var img2 = obig.firstElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu3.png");
	img.parentNode.replaceChild(newImg, img);
});
picc.addEventListener('click', function() {
	picc.style.borderWidth = '1px'
	picd.style.borderWidth = '0.2px'
	pice.style.borderWidth = '0.2px'
	pica.style.borderWidth = '0.2px'
	picb.style.borderWidth = '0.2px'
	var img = obig.firstElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu3.png");
	img.parentNode.replaceChild(newImg, img);
	// img2.parentNode.replaceChild(newImg, img);
});
picd.addEventListener('click', function() {
	picd.style.borderWidth = '1px'
	pice.style.borderWidth = '0.2px'
	pica.style.borderWidth = '0.2px'
	picb.style.borderWidth = '0.2px'
	picc.style.borderWidth = '0.2px'
	var img = obox.lastElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu4.png");
	img.parentNode.replaceChild(newImg, img);
})
picd.addEventListener('click', function() {
	picd.style.borderWidth = '1px'
	pice.style.borderWidth = '0.2px'
	pica.style.borderWidth = '0.2px'
	picb.style.borderWidth = '0.2px'
	picc.style.borderWidth = '0.2px'
	var img = obig.firstElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu4.png");
	img.parentNode.replaceChild(newImg, img);
})
pice.addEventListener('click', function() {
	pice.style.borderWidth = '1px'
	pica.style.borderWidth = '0.2px'
	picb.style.borderWidth = '0.2px'
	picc.style.borderWidth = '0.2px'
	picd.style.borderWidth = '0.2px'
	var img = obox.lastElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu5.png");
	img.parentNode.replaceChild(newImg, img);
})
pice.addEventListener('click', function() {
	pice.style.borderWidth = '1px'
	pica.style.borderWidth = '0.2px'
	picb.style.borderWidth = '0.2px'
	picc.style.borderWidth = '0.2px'
	picd.style.borderWidth = '0.2px'
	var img = obig.firstElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu5.png");
	img.parentNode.replaceChild(newImg, img);
})
pica.addEventListener('click', function() {
	pice.style.borderWidth = '1px'
	pica.style.borderWidth = '0.2px'
	picb.style.borderWidth = '0.2px'
	picc.style.borderWidth = '0.2px'
	picd.style.borderWidth = '0.2px'
	var img = obox.lastElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu.png");
	img.parentNode.replaceChild(newImg, img);
})
pica.addEventListener('click', function() {
	pica.style.borderWidth = '1px'
	picb.style.borderWidth = '0.2px'
	picc.style.borderWidth = '0.2px'
	picd.style.borderWidth = '0.2px'
	pice.style.borderWidth = '0.2px'
	var img = obig.firstElementChild;
	var newImg = document.createElement("img");
	newImg.setAttribute("src", "img/niu.png");
	img.parentNode.replaceChild(newImg, img);
})
	var topb=document.getElementsByClassName('top-body')[0];
picb.addEventListener('click', function() {
	//容器
	var obox = document.querySelector(".left-top-l");
	//放大镜
	var olayer = document.querySelector(".small");
	//大图容器

	//大图
	var obigimg = document.querySelector(".big>img");
	// var obigimg = document.getElementById('wdnmd');
	//当鼠标移入容器，显示放大镜，显示大图
	obox.onmouseover = function() {
		olayer.style.display = "block";
		obig.style.display = "block";
	}
	//当鼠标移出容器，隐藏放大镜，隐藏大图
	obox.onmouseout = function() {
		olayer.style.display = "none";
		obig.style.display = "none";
	}

	//在容器中移动，移动放大镜
	obox.onmousemove = function(e) {
		//获取当前坐标点距离小图容器的距离
		var x = e.clientX - topb.offsetLeft;
		var y = e.clientY -  topb.offsetTop;
		//得到放大镜距离小图容器的偏移距离
		var px = x - olayer.offsetWidth/2;
		var py=y-olayer.offsetHeight/2;
		// console.log(py)
		//条件，移动的范围
		//左出界
		if (px <= 0) {
			px = 0;
		}
		//右出界
		if (px > this.clientWidth - olayer.offsetWidth) {
			px = this.clientWidth - olayer.offsetWidth;
		}
		//上出界
		if (py <= 0) {
			py = 0;
		}
		//下出界
		if (py >= this.clientHeight - olayer.offsetHeight) {
			py = this.clientHeight - olayer.offsetHeight;
		}
		// var obigimg = document.getElementById('wdnmd');
		//设置放大镜偏移属性值
		olayer.style.left = px + "px";
		olayer.style.top = py + "px";


		/*
			放大镜水平偏移          大图在大图容器中水平偏移
			   0                         0
			   px                        ？
	小图容器可视宽-放大镜占位宽     大图宽度-大图容器宽度
			*/
		// 小图容器可视宽-放大镜占位宽
		var a = obox.clientWidth - olayer.offsetWidth;
		// 大图宽度-大图容器宽度
		var b = obigimg.offsetWidth - obig.clientWidth;
		// console.log(obox.offsetWidth)
		// 大图在大图容器中水平偏移
		var c = px * b / a;
		// console.log(px);
		// console.log(a);//160
		// console.log(b);//600
		// console.log(c);//

		// 小图容器可视高-放大镜占位高
		var a1 = obox.clientHeight - olayer.offsetHeight;
		// 大图高度-大图容器高度
		var b1 = obigimg.offsetHeight - obig.clientHeight;

		// 大图在大图容器中垂直偏移
		var c1 = py * b1 / a1;

		// console.log(c);
		// console.log(c1);


		// //设置大图在大图容器中的偏移距离
		obigimg.style.left = -c + "px";
		obigimg.style.top = -c1 + "px";

	}
})
//容器
var obox = document.querySelector(".left-top-l");
//放大镜
var olayer = document.querySelector(".small");
//大图容器

//大图
// var obigimg = document.querySelector(".big>img");
var obigimg = document.getElementById('wdnmd');
//当鼠标移入容器，显示放大镜，显示大图
obox.onmouseover = function() {
	olayer.style.display = "block";
	obig.style.display = "block";
}
//当鼠标移出容器，隐藏放大镜，隐藏大图
obox.onmouseout = function() {
	olayer.style.display = "none";
	obig.style.display = "none";
}

obox.onmousemove = function(e) {
	var x = e.clientX - topb.offsetLeft;
	var y = e.clientY -  topb.offsetTop;
	//得到放大镜距离小图容器的偏移距离
	var px = x - olayer.offsetWidth/2;
	var py=y-olayer.offsetHeight/2;
	if (px <= 0) {
		px = 0;
	}
	if (px > this.clientWidth - olayer.offsetWidth) {
		px = this.clientWidth - olayer.offsetWidth;
	}
	if (py <= 0) {
		py = 0;
	}
	if (py >= this.clientHeight - olayer.offsetHeight) {
		py = this.clientHeight - olayer.offsetHeight;
	}
	olayer.style.left = px + "px";
	olayer.style.top = py + "px";
	var a = obox.clientWidth - olayer.offsetWidth;
	var b = obigimg.offsetWidth - obig.clientWidth;
	var c = px * b / a;
	var a1 = obox.clientHeight - olayer.offsetHeight;
	var b1 = obigimg.offsetHeight - obig.clientHeight;
	var c1 = py * b1 / a1;
	obigimg.style.left = -c + "px";
	obigimg.style.top = -c1 + "px";
}


picc.addEventListener('click', function() {
	var obox = document.querySelector(".left-top-l");
	var olayer = document.querySelector(".small");
	var obigimg = document.querySelector(".big>img");
	obox.onmouseover = function() {
		olayer.style.display = "block";
		obig.style.display = "block";
	}
	obox.onmouseout = function() {
		olayer.style.display = "none";
		obig.style.display = "none";
	}
	obox.onmousemove = function(e) {
		var x = e.clientX - topb.offsetLeft;
		var y = e.clientY -  topb.offsetTop;
		//得到放大镜距离小图容器的偏移距离
		var px = x - olayer.offsetWidth/2;
		var py=y-olayer.offsetHeight/2;
		if (px <= 0) {
			px = 0;
		}
		if (px > this.clientWidth - olayer.offsetWidth) {
			px = this.clientWidth - olayer.offsetWidth;
		}
		if (py <= 0) {
			py = 0;
		}
		if (py >= this.clientHeight - olayer.offsetHeight) {
			py = this.clientHeight - olayer.offsetHeight;
		}
		olayer.style.left = px + "px";
		olayer.style.top = py + "px";
		var a = obox.clientWidth - olayer.offsetWidth;
		var b = obigimg.offsetWidth - obig.clientWidth;
		var c = px * b / a;
		var a1 = obox.clientHeight - olayer.offsetHeight;
		var b1 = obigimg.offsetHeight - obig.clientHeight;
		var c1 = py * b1 / a1;
		obigimg.style.left = -c + "px";
		obigimg.style.top = -c1 + "px";
	}
})

picd.addEventListener('click', function() {
	var obox = document.querySelector(".left-top-l");
	var olayer = document.querySelector(".small");
	var obigimg = document.querySelector(".big>img");
	obox.onmouseover = function() {
		olayer.style.display = "block";
		obig.style.display = "block";
	}
	obox.onmouseout = function() {
		olayer.style.display = "none";
		obig.style.display = "none";
	}
	obox.onmousemove = function(e) {
		var x = e.clientX - topb.offsetLeft;
		var y = e.clientY -  topb.offsetTop;
		//得到放大镜距离小图容器的偏移距离
		var px = x - olayer.offsetWidth/2;
		var py=y-olayer.offsetHeight/2;
		if (px <= 0) {
			px = 0;
		}
		if (px > this.clientWidth - olayer.offsetWidth) {
			px = this.clientWidth - olayer.offsetWidth;
		}
		if (py <= 0) {
			py = 0;
		}
		if (py >= this.clientHeight - olayer.offsetHeight) {
			py = this.clientHeight - olayer.offsetHeight;
		}
		olayer.style.left = px + "px";
		olayer.style.top = py + "px";
		var a = obox.clientWidth - olayer.offsetWidth;
		var b = obigimg.offsetWidth - obig.clientWidth;
		var c = px * b / a;
		var a1 = obox.clientHeight - olayer.offsetHeight;
		var b1 = obigimg.offsetHeight - obig.clientHeight;
		var c1 = py * b1 / a1;
		obigimg.style.left = -c + "px";
		obigimg.style.top = -c1 + "px";
	}
})

pice.addEventListener('click', function() {
	var obox = document.querySelector(".left-top-l");
	var olayer = document.querySelector(".small");
	var obigimg = document.querySelector(".big>img");
	obox.onmouseover = function() {
		olayer.style.display = "block";
		obig.style.display = "block";
	}
	obox.onmouseout = function() {
		olayer.style.display = "none";
		obig.style.display = "none";
	}
	obox.onmousemove = function(e) {
		var x = e.clientX - topb.offsetLeft;
		var y = e.clientY -  topb.offsetTop;
		//得到放大镜距离小图容器的偏移距离
		var px = x - olayer.offsetWidth/2;
		var py=y-olayer.offsetHeight/2;
		if (px <= 0) {
			px = 0;
		}
		if (px > this.clientWidth - olayer.offsetWidth) {
			px = this.clientWidth - olayer.offsetWidth;
		}
		if (py <= 0) {
			py = 0;
		}
		if (py >= this.clientHeight - olayer.offsetHeight) {
			py = this.clientHeight - olayer.offsetHeight;
		}
		olayer.style.left = px + "px";
		olayer.style.top = py + "px";
		var a = obox.clientWidth - olayer.offsetWidth;
		var b = obigimg.offsetWidth - obig.clientWidth;
		var c = px * b / a;
		var a1 = obox.clientHeight - olayer.offsetHeight;
		var b1 = obigimg.offsetHeight - obig.clientHeight;
		var c1 = py * b1 / a1;
		obigimg.style.left = -c + "px";
		obigimg.style.top = -c1 + "px";
	}
})

pica.addEventListener('click', function() {
	var obox = document.querySelector(".left-top-l");
	var olayer = document.querySelector(".small");
	var obigimg = document.querySelector(".big>img");
	obox.onmouseover = function() {
		olayer.style.display = "block";
		obig.style.display = "block";
	}
	obox.onmouseout = function() {
		olayer.style.display = "none";
		obig.style.display = "none";
	}
	obox.onmousemove = function(e) {
		var x = e.clientX - topb.offsetLeft;
		var y = e.clientY -  topb.offsetTop;
		//得到放大镜距离小图容器的偏移距离
		var px = x - olayer.offsetWidth/2;
		var py=y-olayer.offsetHeight/2;
		if (px <= 0) {
			px = 0;
		}
		if (px > this.clientWidth - olayer.offsetWidth) {
			px = this.clientWidth - olayer.offsetWidth;
		}
		if (py <= 0) {
			py = 0;
		}
		if (py >= this.clientHeight - olayer.offsetHeight) {
			py = this.clientHeight - olayer.offsetHeight;
		}
		olayer.style.left = px + "px";
		olayer.style.top = py + "px";
		var a = obox.clientWidth - olayer.offsetWidth;
		var b = obigimg.offsetWidth - obig.clientWidth;
		var c = px * b / a;
		var a1 = obox.clientHeight - olayer.offsetHeight;
		var b1 = obigimg.offsetHeight - obig.clientHeight;
		var c1 = py * b1 / a1;
		obigimg.style.left = -c + "px";
		obigimg.style.top = -c1 + "px";
	}
})
var ojian=document.getElementsByClassName('jianhaoya')[0];
var ojia=document.getElementsByClassName('num-atn')[0];
var wenben=document.getElementById('wenben');
ojian.addEventListener('click',function(){
	if(wenben.value>=1){
		wenben.value=wenben.value-1
	}else{
		wenben.value==0
	}
})
ojia.addEventListener('click',function(){
	if(wenben.value>=0){
		wenben.value=parseInt( wenben.value)+1
	}else{
		wenben.value==0
	}
})
var osoping=document.getElementsByClassName('la')[0];
var osay=document.getElementsByClassName('la')[1];
var opinglun=document.getElementsByClassName('pinglun')[0];
var owenti=document.getElementById('nnn');
var otu=document.getElementsByClassName('tututu')[0];
var oxia=document.getElementsByClassName('zhuan')[0];
var owentiw=document.getElementsByClassName('wentiw')[0];
osay.addEventListener('click',function(){
	otu.style.display='none';
	owentiw.style.display='none';
	opinglun.style.display='block';
	oxia.style.left=130+'px';
	// oxia.style.width=130+'px'
})
owenti.addEventListener('click',function(){
	otu.style.display='none';
	opinglun.style.display='none';
	owentiw.style.display='block';
	// owenti.style.display='block'
	oxia.style.left=265+'px';
	// oxia.style.width=130+'px'
})
osoping.addEventListener('click',function(){
	otu.style.display='block';
	opinglun.style.display='none';
	owentiw.style.display='none';
	// owenti.style.display='block'
	oxia.style.left=0+'px';
	// oxia.style.width=130+'px'
})
var www = document.getElementsByClassName("www")[0];
document.onscroll = function() {
	var top = document.documentElement.scrollTop
	if (top >= 550) {
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
