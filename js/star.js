

	var oimg = document.getElementById("box");
	var music = document.getElementById("music");
	music.play();
	var isOn = true;
	oimg.onclick = function(){
		
		isOn = !isOn;
		
		if(isOn){
			oimg.style.animationPlayState = "running";
			music.play();
			//return false;
		}else{
			oimg.style.animationPlayState = "paused";
			music.pause();
			//return false;
		}
	}
	
	