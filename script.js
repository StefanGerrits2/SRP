
var auto = document.getElementById("box");
var wheel1 = document.getElementById("wheel1");
var wheel2 = document.getElementById("wheel2");
var glass = document.getElementById("glass");
var glass2 = document.getElementById("glass2");
var go = document.getElementById("go");
var status = "links";
var engine = document.getElementById("engine");


function reload() {
	location.reload();
}

function rijden(e) {
	switch(e.keyCode) {
	  case 39:
	    auto.classList.toggle("rijden");
	    wheel1.classList.toggle("draaien");
	    wheel2.classList.toggle("draaien");
	    glass.classList.toggle("shine");
	    glass2.classList.toggle("shine");
		engine.classList.toggle("show");
		bal.classList.toggle("balrolnaarauto");
	    status = "rechts";
	    setTimeout(balrollen, 850);	
		setTimeout(balterug, 1550);
		playSound();
	    break;
	
	  case 37:
	    auto.classList.toggle("terugrijden");
	    glass.classList.toggle("shineterug");
	    glass2.classList.toggle("shineterug");
	    wheel1.classList.toggle("terugdraaien");
	    wheel2.classList.toggle("terugdraaien");
		setTimeout(reload, 5000);
		playSound2();
		break;
	}
}

window.addEventListener("keydown", rijden, false);


var bal = document.getElementById("bal");
var balstatus = "links";

function balrollen() {
	
	bal.classList.toggle("omhoog");
}

function jump(e) {
	switch(e.keyCode) {
	 case 38:	
	  auto.classList.toggle("jump");
	  break;
	}
}

window.addEventListener("keydown", jump, false);

function balterug() {
	bal.classList.toggle("balterug");
}

 var sound = new Audio();
 function playSound() {
      sound.src = "audio/geluid.mp3";
      sound.play();
    }

 var sound2 = new Audio();
 function playSound2() {
      sound.src = "audio/geluid2.mp3";
      sound.play();
    }
