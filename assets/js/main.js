$(document).ready(function(){
	a = [
		"bat",
		"bear",
		"bee",
		"bird",
		"butterfly",
		"cat",
		"cheetah",
		"chicken",
		"cow",
		"crab",
		"crocodile",
		"deer",
		"dog",
		"dolphin",
		"duck",
		"elephant",
		"fish",
		"flamingo",
		"frog",
		"giraffe",
		"goat",
		"hippo",
		"horse",
		"jellyfish",
		"kangaroo",
		"koala",
		"lion",
		"lizard",
		"meerkat",
		"monkey",
		"mouse",
		"octopus",
		"ostrich",
		"panda",
		"peacock",
		"penguin",
		"pig",
		"rabbit",
		"rhino",
		"seal",
		"shark",
		"sheep",
		"snake",
		"spider",
		"squirrel",
		"tiger",
		"turtle",
		"whale",
		"wolf",
		"zebra"
	];
	var c = 0, n = [];
	while(c < a.length){
		while(0 == 0){
			var r = Math.floor(Math.random() * a.length);
			if(!n.includes(r)){
				n.push(r);
				break;
			};
		};
		r = a[r];
		$(".swiper-wrapper").append("<div><img src='assets/img/" + r + ".png'><h1>" + r[0].toUpperCase() + r.slice(1) + "<audio><source src='assets/audio/" + r + ".mp3'></audio><i class='fas fa-volume-up'></i></h1></div>");
		$("div div div:eq(" + c + "), div div div:eq(" + c + ") *").attr("eq", c + 1);
		c++;
	};
	$(".swiper-wrapper>div").attr("class", "swiper-slide");
	swiper = new Swiper('.swiper-container', {
		loop:true,
		preventInteractionOnTransition:true,
		speed:250
	}), i = 0;
	bkgd();
	swiper.on("slideNextTransitionEnd", function(){
		i++;
		if(i == 6){
			i = 0
		};
		bkgd();
	});
	swiper.on("slidePrevTransitionEnd", function(){
		i--;
		if(i == -1){
			i = 5
		};
		bkgd();
	});
	$(".fa-volume-up").click(function(){
		document.getElementsByTagName("audio")[+$(this).attr("eq")].play()
	});
});
function bkgd(){
	var b = ["5b41c1", "5893e0", "43c2c2", "58e55c", "fcf04e", "f25a5f"], e = +$(".swiper-slide").eq(swiper.activeIndex).attr("eq"), m = i + 1;
	if(m == 6){
		m = 0
	};
	$("meta").eq(1).attr("content", "#" + b[m]);
	$(".swiper-slide").eq(e).css("background", "#" + b[i]);
	var n = i + 1, p = i - 1;
	if(n == 6){
		n = 0
	};
	if(p == -1){
		p = 5
	};
	$(".swiper-slide").eq(e).next().css("background", "#" + b[n]);
	$(".swiper-slide").eq(e).prev().css("background", "#" + b[p]);
}