$(document).ready(function() {
	
	$(".popup").magnificPopup({
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$(".item_img").magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery:{
			enabled: true
		}
	});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.open({
				items: {
					src: '<div id="go_popup" class="hid_popup"><div class="one_go_popup"><h4>Ваша заявка отправлена</h4><span>В ближайшее время с Вами свяжется<br>наш сотрудник.</span></div><div class="two_go_popup my_stl_btn"></div></div>',
					type: 'inline'
				}
			});
			$("form").trigger("reset");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});

});