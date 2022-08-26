// 头部开始
var xieyi = document.getElementById("js-1");
var zi1 = document.getElementById("zi1");
var zi2 = document.getElementById("zi2");
var sping = document.getElementsByClassName("sping")[0];
var sping_1 = document.getElementsByClassName("sping-1")[0];
var sping_2 = document.getElementsByClassName("sping-2")[0];
xieyi.addEventListener("mousemove", function () {
	sping.style.display = 'block';
})
sping.addEventListener("mouseout", function () {
	sping.style.display = 'none';
})
xieyi.addEventListener("mouseout", function () {
	sping.style.display = 'none';
})
sping_1.addEventListener("mousemove", function () {
	sping_1.style.backgroundColor = '#845f3f';
	zi1.style.color = "#fff"
})
sping_1.addEventListener("mouseout", function () {
	sping_1.style.backgroundColor = '#fff';
	zi1.style.color = "#707070"
})
sping_2.addEventListener("mousemove", function () {
	sping_2.style.backgroundColor = '#845f3f';
	zi2.style.color = "#fff"
})
sping_2.addEventListener("mouseout", function () {
	sping_2.style.backgroundColor = '#fff';
	zi2.style.color = "#707070"
})
// 头部结束
//展示框
var banner_1 = document.getElementsByClassName("banner-1")[0];
var banner1_2 = document.getElementsByClassName("banner-1-2")[0];
var banner1_3 = document.getElementsByClassName("banner-1-3")[0];
var bannerli1 = document.getElementsByClassName("bannerli")[0];
var bannerli2 = document.getElementsByClassName("bannerli")[1];
var bannerli3 = document.getElementsByClassName("bannerli")[2];
var bannerli4 = document.getElementsByClassName("bannerli")[3];
var bannerli5 = document.getElementsByClassName("bannerli")[4];
var bannerli6 = document.getElementsByClassName("bannerli")[5];
var bannerli7 = document.getElementsByClassName("bannerli")[6];
var bannerli8 = document.getElementsByClassName("bannerli")[7];
var bannerli9 = document.getElementsByClassName("bannerli")[8];
var bannerli10 = document.getElementsByClassName("bannerli")[9];
var bannerli11 = document.getElementsByClassName("bannerli")[10];
var bannerli12 = document.getElementsByClassName("bannerli")[11];
var bannerli13 = document.getElementsByClassName("bannerli")[12];
bannerli1.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_2.style.display = "block"
});
bannerli1.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_2.style.display = "none"
});

banner1_2.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_2.style.display = "block"
	bannerli1.style.backgroundColor = "#876d46";
});
banner1_2.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_2.style.display = "none"
	bannerli1.style.backgroundColor = "";
});

bannerli2.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_3.style.display = "block"

});
bannerli2.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_3.style.display = "none"

});
banner1_3.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_3.style.display = "block"
	bannerli2.style.backgroundColor = "#876d46";

});
banner1_3.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_3.style.display = "none"
	bannerli2.style.backgroundColor = "";
});

bannerli3.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_2.style.display = "block"
});
bannerli3.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_2.style.display = "none"
});

bannerli4.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_3.style.display = "block"
});
bannerli4.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_3.style.display = "none"
});

bannerli5.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_3.style.display = "block"
});
bannerli5.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_3.style.display = "none"
});

bannerli6.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_2.style.display = "block"
});
bannerli6.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_2.style.display = "none"
});

bannerli7.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_3.style.display = "block"
});
bannerli7.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_3.style.display = "none"
});

bannerli8.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_2.style.display = "block"
});
bannerli8.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_2.style.display = "none"
});

bannerli9.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_2.style.display = "block"
});
bannerli9.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_2.style.display = "none"
});

bannerli10.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_3.style.display = "block"
});
bannerli10.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_3.style.display = "none"
});

bannerli11.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_2.style.display = "block"
});
bannerli11.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_2.style.display = "none"
});

bannerli12.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_3.style.display = "block"
});
bannerli12.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_3.style.display = "none"
});
bannerli13.addEventListener("mousemove", function () {
	banner_1.style.height = "445PX"
	banner1_2.style.display = "block"
});
bannerli13.addEventListener("mouseout", function () {
	banner_1.style.height = "345PX"
	banner1_2.style.display = "none"
});

//手柄节点集合
var ohandle = document.querySelectorAll(".handle>div");
//图片的容器
var oimg = document.querySelector(".imgs");
//控制器的圆点节点集合
var odots = document.querySelectorAll(".dot>li");
//容器节点
var odiv = document.querySelector(".banner-2");


//当前图片节点的索引
var i = 1;
//点击右手柄，向右轮播
ohandle[1].onclick = function () {
	// 下一张
	i++;
	// 添加过渡
	oimg.style.transition = "all 1s";
	// 移动到下一张
	oimg.style.left = -859 * i + "px";
	//当索引是6时，延迟0.9s后，直接显示索引为1的图片
	// （延迟的原因：必须要让过渡的效果完成）
	if (i >= 6) {
		//强行将第1个小圆点激活
		for (var x = 0; x < odots.length; x++) {
			//清除所有圆点上已有的active类名
			odots[x].className = "";
		}
		odots[0].className = "active";

		setTimeout(function () {
			// 先关闭过渡，移动到索引为1的图片，索引还原为1
			oimg.style.transition = "";
			oimg.style.left = -859 + "px";
			i = 1;
		}, 900);
	} else {
		//获取所有控制器圆点，将当前的圆点添加active类名，其他的删除active
		for (var x = 0; x < odots.length; x++) {
			//清除所有圆点上已有的active类名
			odots[x].className = "";
		}
		odots[i - 1].className = "active";
	}

}
//点击左手柄，向左轮播
ohandle[0].onclick = function () {
	// 上一张
	i--;
	// 添加过渡
	oimg.style.transition = "all 1s";
	// 移动到上一张
	oimg.style.left = -859 * i + "px";


	//当索引是0时，延迟0.9s后，直接显示索引为5的图片
	if (i <= 0) {
		//强行将最后1个小圆点激活
		for (var x = 0; x < odots.length; x++) {
			//清除所有圆点上已有的active类名
			odots[x].className = "";
		}
		odots[4].className = "active";

		setTimeout(function () {
			// 先关闭过渡，移动到索引为1的图片，索引还原为1
			oimg.style.transition = "";
			oimg.style.left = -859 * 5 + "px";
			i = 5;
		}, 900);
	} else {
		//获取所有控制器圆点，将当前的圆点添加active类名，其他的删除active
		for (var x = 0; x < odots.length; x++) {
			//清除所有圆点上已有的active类名
			odots[x].className = "";
		}
		odots[i - 1].className = "active";
	}

}
//自动轮播
var time = setInterval(function () {
	ohandle[1].onclick();
}, 3000);
//鼠标移入时，清除定时器
odiv.onmouseover = function () {
	clearInterval(time);
}
//鼠标离开时，添加定时器
odiv.onmouseout = function () {
	time = setInterval(function () {
		ohandle[1].onclick();
	}, 3000);
}
//点击控制器的圆点，实现图片的切换
for (var y = 0; y < odots.length; y++) {
	//对每个圆点的节点指定一个属性index，保存当前节点所在节点集合中的索引。
	odots[y].index = y;
	odots[y].onclick = function () {
		//显示当前索引对应的图片和圆点
		// console.log(y);
		console.log(this.index);

		//图片容器的移动
		oimg.style.left = -859 * this.index + "px";
		//圆点的激活
		for (var x = 0; x < odots.length; x++) {
			//清除所有圆点上已有的active类名
			odots[x].className = "";
		}
		odots[this.index].className = "active";
		//更新全局索引
		i = this.index;
	}
}

var oall = document.getElementsByClassName("all")[0];
var oall1 = document.getElementsByClassName("all")[1];
var obuttom_l = document.getElementById("buttom-f");
var obuttom_r = document.getElementById("buttom-r");
var obuttom_l1 = document.getElementsByClassName("fff")[0];
var obuttom_r1 = document.getElementsByClassName("lll")[0];
// obuttom_r.addEventListener("click",function(){
// 	bottom_h.style.right="100px"
// });
var i2 = 0
obuttom_r.addEventListener("click", function () {
	i2++

	oall.style.left = -276 * i2 + "px"

	if (i2 >= 3) {
		oall.style.left = -552 + "px"
		i2 = 2
	}
});
obuttom_l.addEventListener("click", function () {
	oall.style.transition = "all 1s";
	i2--
	if (i2 <= 0) {
		oall.style.left = 0 + "px"
		i2 = 0
	} else {
		oall.style.left = -276 * i2 + "px"
	}
});

var i3 = 0
obuttom_r1.addEventListener("click", function () {
	i3++

	oall1.style.left = -276 * i3 + "px"

	if (i3 >= 3) {
		oall1.style.left = -552 + "px"
		i3 = 2
	}
});

obuttom_l1.addEventListener("click", function () {
	oall1.style.transition = "all 1s";
	i3--
	if (i3 <= 0) {
		oall1.style.left = 0 + "px"
		i3 = 0
	} else {
		oall1.style.left = -276 * i3 + "px"
	}
});
var www = document.getElementsByClassName("www")[0];
document.onscroll = function () {
	var top = document.documentElement.scrollTop
	if (top >= 550) {
		www.style.display = "block";
	} else {
		www.style.display = "none";
	}
}
var spans = document.querySelectorAll('.mi_miaosha2>span');
function countDown(time) {
	setInterval(function () {
		var nowTime = +new Date();
		var inputTime = +new Date(time);
		var times = (inputTime - nowTime) / 1000;
		var data = parseInt(times / 60 / 60 / 24);
		var hour = parseInt(times / 60 / 60 % 24);
		if (hour < 10) {
			hour = '0' + hour;
		}
		var minutes = parseInt(times / 60 % 60);
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		var seconds = parseInt(times % 60);
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		spans[0].innerHTML = hour;
		spans[2].innerHTML = minutes;
		spans[4].innerHTML = seconds;
	}, 1000)

}
countDown('2021-12-17 24:00:00');
var to = document.getElementsByClassName('to')[0];
var kefu = document.getElementsByClassName('wang')[0];
kefu.addEventListener('mousemove', function () {
	to.style.display = 'block';

})
kefu.addEventListener('mouseout', function () {
	to.style.display = 'none';
})

var inp = document.querySelector('.logo-3>input')
inp.onfocus = function () {
	inp.placeholder = "";
}
inp.onblur = function () {
	inp.placeholder = "抢双12神券";
}