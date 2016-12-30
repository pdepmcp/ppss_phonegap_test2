//$.ready(function(){
//$("body").append("<p>questo è aggiunto da geiquiri!</p>");
//$("body p").html("modifico il testo");
//})

$("#header .topmenu a").on("click",function(ev){
	ev.preventDefault();

	var dest = $(this).attr("data-href");
	$("body").append("<p>mi hanno pigiato"+dest+"</p>");
	if (window.location.href.indexOf(dest)>=0){
		$("body").append("<p>me pias no:"+dest+"</p>");
		return;
	}
	$("body").append("<p>mi dirigo verso"+dest+"</p>");
	window.location.href=dest;
});

var maincontent = $("section#body .doublecontent");
var mainpanels = maincontent.find(".panel");

$("#views .viewsmenu a").on("click",function(ev){
	ev.preventDefault();

	var dest = $(this).attr("data-href");
	//$("body").prepend("<p>mi hanno pigiato"+dest+"</p>");
	if (window.location.href.indexOf(dest)>=0){
		$("body").append("<p>me pias no:"+dest+"</p>");
		return;
	}
	var url;
	if (dest.startsWith("http")){
		url = dest;
	}else{
		url = "../views/"+dest;
	}
	$.ajax(url,{
		method:"GET",
		success:function(data){
			if (maincontent.hasClass("shift")){
				mainpanels.eq(0).html(data);
			}else{
				mainpanels.eq(1).html(data);
			}
			maincontent.toggleClass("shift");
		},
		error:function(){
			//alert("something went wrong");
			$("body").html("<p>me pias no: ERROR loading ajax!</p>");
		},
		complete:function(data){
			//alert("completed");console.log(data);
		}
	});
});
