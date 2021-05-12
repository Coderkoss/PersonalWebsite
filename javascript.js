$(document).ready(function(){
	//click keypress sublmit load
	//$("p").css("background-color","yellow");
	//$(window).scroll(function(){
	//	$(".art-div-wrapper").css("right","0px")
	//});
	var index = 0;
	carouse();
	

	function carouse(){
		var i;
		var x = document.getElementsByClassName("slides"); 
		for(i=0;i<x.length;i++){
			x[i].style.display = "none";
		}
		index++;
		if(index > x.length){index  = 1}
		x[index - 1].style.display = "block";
		setTimeout(carouse,4000);	
	}

});
