$(function () {
$("#menu").click(function () {
			$(".overlay").slideDown(750);
			$(".changer").slideDown(750);
			$(".onhover").slideUp(750);
			$("#home").fadeOut(750);
	});
});

$("#menu-up").click(function () {
	$(".overlay").slideUp(750);
	$(".changer").slideUp(750);
	$(".onhover").slideDown(750);
	$("#home").fadeIn(750);
});

$(".webInit").click(function () {
	$("#webdev").fadeIn(750);
	$("#content").fadeOut(750);
	$(".overlay").slideUp(750);
	$(".changer").slideUp(750);
	$(".overlay-2").slideUp(750);
	$(".changer-2").slideUp(750);
	$(".overlay-3").slideUp(750);
	$(".changer-3").slideUp(750);
	$(".overlay-4").slideUp(750);
	$(".changer-4").slideUp(750);
});

$(".adminInit").click(function () {
	$("#admin").fadeIn(750);
	$("#content").fadeOut(750);
	$("#webdev").fadeOut(750);
	$(".overlay").slideUp(750);
	$(".changer").slideUp(750);
	$(".onhover-1").slideDown(750);
	$("#dev").fadeIn(750);
	$(".overlay-1").slideUp(750);
	$(".changer-1").slideUp(750);
	$(".onhover-2").slideDown(750);
	$("#admin_content").fadeIn(750);
	$(".overlay-2").slideUp(750);
	$(".changer-1").slideUp(750);
});

$(".multiInit").click(function () {
	$("#multi").fadeIn(750);
	$("#admin").fadeOut(750);
	$("#content").fadeOut(750);
	$("#webdev").fadeOut(750);
	$(".overlay").slideUp(750);
	$(".changer").slideUp(750);
	$(".onhover-1").slideDown(750);
	$("#dev").fadeIn(750);
	$(".overlay-1").slideUp(750);
	$(".changer-1").slideUp(750);
	$(".onhover-2").slideDown(750);
	$("#admin_content").fadeIn(750);
	$(".overlay-2").slideUp(750);
	$(".changer-2").slideUp(750);
	$(".onhover-3").slideDown(750);
	$("#lang").fadeIn(750);
	$(".overlay-3").slideUp(750);
	$(".changer-3").slideUp(750);
});

$(".photoInit").click(function () {
	$("#photo").fadeIn(750);
	$("#multi").fadeOut(750);
	$("#admin").fadeOut(750);
	$("#content").fadeOut(750);
	$("#webdev").fadeOut(750);
	$(".overlay").slideUp(750);
	$(".changer").slideUp(750);
	$(".onhover-1").slideDown(750);
	$("#dev").fadeIn(750);
	$(".overlay-1").slideUp(750);
	$(".changer-1").slideUp(750);
	$(".onhover-2").slideDown(750);
	$("#admin_content").fadeIn(750);
	$(".overlay-2").slideUp(750);
	$(".changer-2").slideUp(750);
	$(".onhover-3").slideDown(750);
	$("#lang").fadeIn(750);
	$(".overlay-3").slideUp(750);
	$(".changer-3").slideUp(750);
	$(".onhover-4").slideDown(750);
	$("#photo_content").fadeIn(750);
	$(".overlay-4").slideUp(750);
	$(".changer-4").slideUp(750);
});

$(".back").click(function () {
	$("#photo").fadeOut(750);
	$("#multi").fadeOut(750);
	$("#webdev").fadeOut(750);
	$("#admin").fadeOut(750);
	$("#content").fadeIn(750);
	$(".onhover").slideDown(750);
	$("#home").fadeIn(750);
	$(".onhover-1").slideDown(750);
	$("#dev").fadeIn(750);
	$(".overlay-1").slideUp(750);
	$(".changer-1").slideUp(750);
	$(".onhover-2").slideDown(750);
	$("#admin_content").fadeIn(750);
	$(".overlay-2").slideUp(750);
	$(".changer-2").slideUp(750);
	$(".onhover-3").slideDown(750);
	$("#lang").fadeIn(750);
	$(".overlay-3").slideUp(750);
	$(".changer-3").slideUp(750);
	$(".onhover-4").slideDown(750);
	$("#photo_content").fadeIn(750);
	$(".overlay-4").slideUp(750);
	$(".changer-4").slideUp(750);
});

$(function () {
$("#web").click(function () {
			$(".overlay-1").slideDown(750);
			$(".onhover-1").slideUp(750);
			$(".changer-1").slideDown(750);
			$("#dev").fadeOut(750);
	});
});

$("#web-up").click(function () {
	$(".overlay-1").slideUp(750);
	$(".onhover-1").slideDown(750);
	$(".changer-1").slideUp(750);
	$("#dev").fadeIn(750);
});

$(function () {
$("#admindev").click(function () {
			$(".overlay-2").slideDown(750);
			$(".onhover-2").slideUp(750);
			$(".changer-2").slideDown(750);
			$("#admin_content").fadeOut(750);
	});
});

$("#admin-up").click(function () {
	$(".overlay-2").slideUp(750);
	$(".onhover-2").slideDown(750);
	$(".changer-2").slideUp(750);
	$("#admin_content").fadeIn(750);
});

$(function () {
$("#multidev").click(function () {
			$(".overlay-3").slideDown(750);
			$(".onhover-3").slideUp(750);
			$(".changer-3").slideDown(750);
			$("#lang").fadeOut(750);
	});
});

$("#multi-up").click(function () {
	$(".overlay-3").slideUp(750);
	$(".onhover-3").slideDown(750);
	$(".changer-3").slideUp(750);
	$("#lang").fadeIn(750);
});

$(function () {
$("#photodev").click(function () {
			$(".overlay-4").slideDown(750);
			$(".onhover-4").slideUp(750);
			$(".changer-4").slideDown(750);
			$("#photo_content").fadeOut(750);
	});
});

$("#photo-up").click(function () {
	$(".overlay-4").slideUp(750);
	$(".onhover-4").slideDown(750);
	$(".changer-4").slideUp(750);
	$("#photo_content").fadeIn(750);
});
