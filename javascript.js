$(document).ready(function(){
	var index = 0;
	animateCarousel();
	

	function animateCarousel(){
		var x = document.getElementsByClassName("slides"); 
		for(var i=0;i<x.length;i++){
			x[i].style.display = "none";
		}
		index++;
		if(index > x.length){index  = 1}
		x[index - 1].style.display = "block";
		setTimeout(carouse,4000);	
	}

});
