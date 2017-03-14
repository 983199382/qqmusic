(function() {

	//新歌
	var $reFirst = $(".infoFirst");
	var $imgBox = $(".imgBox");
	var $imgInfo = $(".imgInfo");
	$imgBox.mouseenter(function() {
		$reFirst.removeClass("infoFirst");
		$(this).next().css("background", "#31c27c");
		$(this).children().eq(1).animate({
			width: 310,
			height: 310
		}, 500);
		$(this).children().eq(0).animate({
			opacity: 1
		}, 500);
		$(this).css({
			overflow: hidden
		});

	});
	$imgBox.mouseleave(function() {
		$(this).next().css("background", "rgba(0,0,0,.5)");
		$(this).children().eq(1).animate({
			width: 300,
			height: 300
		}, 300);
		$(this).children().eq(0).animate({
			opacity: 0
		}, 500);
	});
	$imgInfo.mouseenter(function() {
		$(this).css("background", "#31c27c")
	});
	$imgInfo.mouseleave(function() {
		$(this).css("background", "rgba(0,0,0,.5)")
	});

	var nowimg = 0;

	var $rightBtn = $(".rightBtn");
	var $leftBtn = $(".leftBtn");
	var lis = $(".banner-in li");
	var $banner = $(".banner");
	var $stickBtn = $(".stickBtn span");
	var animateTime = 1000;
	var timer = null;
	var setTimer = 3000;

	var $bannerIn = $(".banner .banner-in");
	$(".banner-in li:first").clone().appendTo(".banner-in");

	$rightBtn.click(rightBtnfunc);

	function rightBtnfunc() {
		if(!$bannerIn.is(":animated")) {
			if(nowimg < lis.length - 1) {
				nowimg++;
				putong();
			} else {
				nowimg = 0;
				$bannerIn.animate({
					"left": lis.length * -1200
				}, animateTime, function() {
					$bannerIn.css("left", 0)
				})
			}
			$stickBtn.eq(nowimg).addClass('cur').siblings().removeClass("cur")
		}
	}

	$leftBtn.click(function() {
		if(!$bannerIn.is(":animated")) {
			if(nowimg > 0) {
				nowimg--;
				putong();
			} else {
				nowimg = lis.length - 1;
				$bannerIn.css("left", lis.length * -1200);
				putong();
			}
			$stickBtn.eq(nowimg).addClass('cur').siblings().removeClass("cur")
		}
	});

	$stickBtn.click(function() {
		nowimg = $(this).index();
		$bannerIn.animate({
			"left": nowimg * -1200
		}, animateTime);
		$stickBtn.eq(nowimg).addClass('cur').siblings().removeClass("cur")
	});

	function putong() {
		$bannerIn.animate({
			"left": nowimg * -1200
		}, animateTime)
	}
	timer = setInterval(rightBtnfunc, setTimer);
	$banner.mouseenter(function() {
		clearInterval(timer)
	});
	$banner.mouseleave(function() {
		clearInterval(timer);
		timer = setInterval(rightBtnfunc, setTimer)
	});

	//热门歌单
	function secondPartAnimate() {
		var $changeSe = $('.imgSeBox');
		var $changeSeFont = $('.infoSe');
		$changeSe.mouseenter(function() {
			$(this).children().eq(1).animate({
				width: "105%",
				height: "105%",
				opacity: 0.8
			}, 500);
			$(this).children().eq(0).animate({
				opacity: 1
			}, 500);
		});
		$changeSe.mouseleave(function() {
			$(this).children().eq(1).animate({
				width: '300px',
				height: '300px',
				opacity: 1
			}, 500);
			$(this).children().eq(0).animate({
				opacity: 0
			}, 500);
		});
		$changeSeFont.mouseenter(function() {
			$(this).css({
				background: '#31c27c'
			});
			$(this).children().eq(1).css('color', '#c1e9d5')
		});
		$changeSeFont.mouseleave(function() {
			$(this).css({
				background: '#333'
			});
			$(this).children().eq(1).css('color', '#999')
		});
	}
	secondPartAnimate();

	function bannerTwo() {
		var nowimgTwo = 0;
		var $rightBtnTwo = $(".rightBtnTwo");
		var $leftBtnTwo = $(".leftBtnTwo");
		var lisTwo = $(".wonder-in li");
		var $wonder = $(".wonder");
		var $filament = $(".filament span");
		var animateTimeTwo = 1000;
		var timerTwo = null;
		var setTimerTwo = 3000;

		var $wonderIn = $(".wonder .wonder-in");
		$(".wonder-in li:first").clone().appendTo(".wonder-in");

		$rightBtnTwo.click(rightBtnfuncTwo);

		function rightBtnfuncTwo() {
			if(!$wonderIn.is(":animated")) {
				if(nowimgTwo < lisTwo.length - 1) {
					nowimgTwo++;
					putongTwo();
				} else {
					nowimgTwo = 0;
					$wonderIn.animate({
						"left": lisTwo.length * -1200
					}, animateTimeTwo, function() {
						$wonderIn.css("left", 0)
					})
				}
				$filament.eq(nowimgTwo).addClass('wh').siblings().removeClass("wh")
			}
		}

		$leftBtnTwo.click(function() {
			if(!$wonderIn.is(":animated")) {
				if(nowimgTwo > 0) {
					nowimgTwo--;
					putongTwo();
				} else {
					nowimgTwo = lisTwo.length - 1;
					$wonderIn.css("left", lisTwo.length * -1200);
					putongTwo();
				}
				$filament.eq(nowimgTwo).addClass('wh').siblings().removeClass("wh")
			}
		});

		$filament.click(function() {
			nowimgTwo = $(this).index();
			$wonderIn.animate({
				"left": nowimgTwo * -1200
			}, animateTime);
			$filament.eq(nowimgTwo).addClass('wh').siblings().removeClass("wh")
		});

		function putongTwo() {
			$wonderIn.animate({
				"left": nowimgTwo * -1200
			}, animateTimeTwo)
		}
		timerTwo = setInterval(rightBtnfuncTwo, setTimerTwo);
		$wonder.mouseenter(function() {
			clearInterval(timerTwo)
		});
		$wonder.mouseleave(function() {
			clearInterval(timerTwo);
			timerTwo = setInterval(rightBtnfuncTwo, setTimerTwo)
		});
	}
	bannerTwo();

	//排行榜
	var $b = $(".box");
	$b.mouseenter(function() {
		$(this).find(".bg").animate({
			width: 310,
			height: 586
		}, 500);
		$(this).find(".playBtn00").animate({
			opacity: 1
		}, 500);
	});

	$b.mouseleave(function() {
		$(this).find(".bg").animate({
			width: 300,
			height: 567
		}, 500);
		$(this).find(".playBtn00").animate({
			opacity: 0
		}, 500);
	});

	//搜索框
	(function() {
		$("#innerInput").click(function() {
			$("#hideBox").show();
		});
		$("#header").click(function() {
			$("#hideBox").hide();
		});
		$("#main").click(function() {
			$("#hideBox").hide();
		});
	})();

	/*MV*/
	var $ch = $('.fourthPart-navBar a');
	var $imgBox22 = $('.imgBox22');

	$ch.mouseenter(function() {
		$(this).addClass('ch')
	});
	$ch.mouseleave(function() {
		$(this).removeClass('ch')
	});

	$imgBox22.mouseenter(function() {
		$(this).find('.bgImg22').animate({
			width: "105%",
			height: '105%',
			opacity: 0.8
		}, 500);
		$(this).find('.playBtn22').animate({
			opacity: 1
		}, 500);
	});
	$imgBox22.mouseleave(function() {
		$(this).find('.bgImg22').animate({
			width: 300,
			height: 170,
			opacity: 1
		}, 500);
		$(this).find('.playBtn22').animate({
			opacity: 0
		}, 500);
	});

	/*wonder*/
	var nowimg55 = 0;
	var $rightBtn55 = $(".rightBtn55");
	var $leftBtn55 = $(".leftBtn55");
	var lis55 = $(".wonder-in li");
	var $wonder = $(".wonder");
	var $filament = $(".filament span");
	var animateTime55 = 300;
	var timer55 = null;
	var setTimer55 = 3000;

	var $wonderIn = $(".wonder .wonder-in");
	$(".wonder-in li:first").clone().appendTo(".wonder-in");

	$rightBtn55.click(rightBtnfunc55);

	function rightBtnfunc55() {
		if(!$wonderIn.is(":animated")) {
			if(nowimg55 < lis55.length - 1) {
				nowimg55++;
				putong55();
			} else {
				nowimg55 = 0;
				$wonderIn.animate({
					"left": lis55.length * -1200
				}, animateTime55, function() {
					$wonderIn.css("left", 0)
				})
			}
			$filament.eq(nowimg55).addClass('wh').siblings().removeClass("wh")
		}
	}

	$leftBtn55.click(function() {
		if(!$wonderIn.is(":animated")) {
			if(nowimg55 > 0) {
				nowimg55--;
				putong55();
			} else {
				nowimg55 = lis.length - 1;
				$wonderIn.css("left", lis55.length * -1200);
				putong55();
			}
			$filament.eq(nowimg55).addClass('wh').siblings().removeClass("wh")
		}
	});

	$filament.click(function() {
		nowimg55 = $(this).index();
		$wonderIn.animate({
			"left": nowimg55 * -1200
		}, animateTime);
		$filament.eq(nowimg55).addClass('wh').siblings().removeClass("wh")
	});

	function putong55() {
		$wonderIn.animate({
			"left": nowimg55 * -1200
		}, animateTime55)
	}
	timer55 = setInterval(rightBtnfunc55, setTimer55);
	$wonder.mouseenter(function() {
		clearInterval(timer55)
	});
	$wonder.mouseleave(function() {
		clearInterval(timer55);
		timer55 = setInterval(rightBtnfunc55, setTimer55)
	});
})();