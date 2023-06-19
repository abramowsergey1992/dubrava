$(function () {
	if ($(".front-prod__bg").length) {
		let cf = $(".front-prod__bg-circle").first();

		$(".front-prod__left").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
		});
	}
	if ($(".front-contract__bg").length) {
		let cf = $(".front-contract__bg-circle").first();
		let cl = $(".front-contract__bg-circle").last();

		$(".front-contract__img").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
			cl.css(
				"transform",
				"translate(" + x * 130 + "px, " + y * 130 + "px)"
			);
		});
	}
	if ($(".front-where").length) {
		let cf = $(".front-where__bg-circle").first();
		let cl = $(".front-where__bg-circle").last();

		$(".front-where").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
			cl.css(
				"transform",
				"translate(" + x * 130 + "px, " + y * 130 + "px)"
			);
		});
	}
	if ($(".front-partners").length) {
		let cf = $(".front-partners__bg-circle").first();
		let cl = $(".front-partners__bg-circle").last();

		$(".front-partners").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
			cl.css(
				"transform",
				"translate(" + x * 130 + "px, " + y * 130 + "px)"
			);
		});
	}
	if ($(".front-top").length) {
		let cf = $(".front-top__bg-circle").first();
		let cl = $(".front-top__bg-circle").last();

		$(".front-top").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
			cl.css(
				"transform",
				"translate(" + x * 130 + "px, " + y * 130 + "px)"
			);
		});
	}
	if ($(".front-catalog").length) {
		let cf = $(".front-catalog__bg-circle").first();

		$(".front-catalog").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
		});
	}
	if ($(".front-work").length) {
		const swiper = new Swiper(".front-work__slider", {
			slidesPerView: 1,
			spaceBetween: 16,
			navigation: {
				nextEl: $(".front-work__next")[0],
				prevEl: $(".front-work__prev")[0],
			},
			breakpoints: {
				500: {
					slidesPerView: 2,
				},
				800: {
					slidesPerView: 3,
				},
				1100: {
					slidesPerView: 4,
				},
			},
		});
	}
	if ($(".front-news").length) {
		const swiper = new Swiper(".front-news__swiper", {
			slidesPerView: "auto",
			spaceBetween: 16,
			navigation: {
				nextEl: $(".front-news__next")[0],
				prevEl: $(".front-news__prev")[0],
			},
		});
	}
	if ($(".front-top").length) {
		const swiper = new Swiper(".front-top__slider", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 16,
			navigation: {
				nextEl: $(".front-top__slider-right")[0],
				prevEl: $(".front-top__slider-left")[0],
			},
		});
	}
	$(".front-top__full-btn").click(function () {
		$(".front-top").toggleClass("_full-video");
	});
});

$(function(){})
function header() {
	let header = $(".header");
	let prevscroll = $(window).scrollTop();
	// if (isFront) {
	// 	prevscroll = window.innerHeight * 2;
	// }

	if (prevscroll > 5) {
		header.addClass("_bg");
	} else {
		header.removeClass("_bg");
	}
	$(window).scroll(() => {
		let currentScroll = $(window).scrollTop();

		if (currentScroll > 5) {
			header.addClass("_bg");
		} else {
			header.removeClass("_bg");
		}
		if (currentScroll > prevscroll) {
			header.addClass("_header-hidden");
		} else {
			header.removeClass("_header-hidden");
		}
		if (currentScroll <= 10) {
			header.removeClass("_header-hidden");
		}
		prevscroll = currentScroll;
	});
}
$(function () {
	header();
});

$(function(){})
$(function(){})