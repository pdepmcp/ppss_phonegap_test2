//$.ready(function(){
$("body").append("<p>questo è aggiunto da geiquiri!</p>");
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
})