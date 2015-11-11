$(function () {
	console.log(window);
	$(window).scroll(function () {
		console.log($(window).scrollTop());
	});
	var s = skrollr.init();
	var waypoint = new Waypoint({
		element: document.getElementById("lewis-diagram"),
		handler: function (direction) {
			if (direction == "down") {
				$("#chemical-compound-formula").css("display", "none");
				$("#lewis-diagram").css("position", "fixed");
				$("#lewis-diagram").css("top", "5%");
			} else {
				$("#chemical-compound-formula").css("display", "block");
				$("#lewis-diagram").css("position", "relative");
			}
		},
		offset: 150
	});
	//var waypointThree = new Waypoint({
	//	element: document.getElementById("molecular-structure"),
	//	handler: function (direction) {
	//		if (direction == "down") {
	//			console.log("hel")
	//			$("element-info").css("display", "none");
	//			$("#molecular-structure").css("position", "fixed");
	//			$("#molecular-structure").css("top", "5%");
	//		} else {
	//			$("element-info").css("display", "block");
	//			$("#molecular-structure").css("position", "relative");
	//		}
	//	}
	//});
		//var waypointTwo = new Waypoint({
		//element: document.getElementById("lewis-diagram"),
		//handler: function (direction) {
		//	if (direction == "down") {
		//		$("#lewis-diagram").css("position", "fixed");
		//		$("#lewis-diagram").css("top", "5%");
		//	} else {
		//		$("#lewis-diagram").css("position", "relative");
		//	}
		//}
	//});
	//var waypointThree = new Waypoint ({
	//	element: document.getElementById("element-info"),
	//	handler: function (direction) {
	//		if (direction == "down") {
	//			$("#lewis-diagram").css("display", "none");
	//		} else {
	//			$("#lewis-diagram").css("display", "block");
	//		}
	//	},
	//	offset: Waypoint.viewportHeight() - 40
	//});
});