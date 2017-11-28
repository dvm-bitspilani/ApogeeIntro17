var boxes = [
	{	class: "re",
		name: "Reverse Enginering",
		image: "../ApogeeIntro18/Image/re.jpeg"
	},
	{	class: "sms",
		name: "Stock Market Simulation",
		image: "../ApogeeIntro18/Image/sms.jpeg"
	},
	{	class: "aic",
		name: "Apogee Inovation Challenge",
		image: "../ApogeeIntro18/Image/aic.jpg"
	},
	{	class: "ftgp",
		name: "Full Throttle Grand Prix",
		image: "../ApogeeIntro18/Image/ftgp.jpeg"
	},
	{	class: "hack",
		name: "Hackathon",
		image: "../ApogeeIntro18/Image/hack.jpg"
	},
	{	class: "icl",
		name: "International Coding League",
		image: "../ApogeeIntro18/Image/icl.jpeg"
	},
	{	class: "leap",
		name: "Leap",
		image: "../ApogeeIntro18/Image/leap.jpeg"
	},
	{	class: "raw",
		name: "Robots at War",
		image: "../ApogeeIntro18/Image/re.jpeg	"
	},
]
var openEventMenu = document.querySelector('.eMenu-link');
var aboutPage = document.querySelector('.about-link');
var eMenu = document.querySelector('#event-menu');
var about = document.querySelector('#about');
var boxWrapper = document.querySelector('.box-wrapper');																																										
var crossAbt = document.querySelector('#cross-abt');
var crossEm = document.querySelector('#cross-em');
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
for(var i = 0;i < boxes.length;i++)
{																																																																																																																						
	var box = document.createElement("div");
	box.className = "box"+" "+boxes[i].class;
	var img = document.createElement("div");
	img.className = "img";
	img.style.backgroundImage = "url(" + boxes[i].image + ")";
	var p = document.createElement("p");
	p.innerHTML = boxes[i].name;
	box.appendChild(img);
	box.appendChild(p);
	boxWrapper.appendChild(box);
}

openEventMenu.addEventListener("click",function(e){
	eMenu.style.display = "flex";

});

aboutPage.addEventListener("click",function(e){
	about.style.display = "flex";
	p1.innerHTML ="Birla Institute of Technology and Science, Pilani is one of the most prestigious institutes in the country. Over years, BITS Pilani has maintained the reputation of imparting the right mix of education and experience that form the basis for achieving success in the world.";
	p2.innerHTML = "Retrofuturism is an exploration of the themes of tension between the new and old, between the alienating and empowering effects of technology. It might be best described as the act or tendency of an artist to progress by moving backwards, focussing on the futurist visions of eras past. Futurism was born out of humanity's reaction to a sudden thrust into technological revolution. To the many that witnessed the rapid change, it seemed technological utopia was fast approaching. This unbridled optimism caused the collective imagination to run wild.";
});

crossAbt.addEventListener("click",function(e){
	about.style.display = "none";
});

crossEm.addEventListener("click",function(){
	eMenu.style.display = "none";
})
/*navbar ham*/
