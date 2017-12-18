/*opens ca*/
function openca()
{
	window.open("https://www.bits-apogee.org/ca/","_blank");
}
var random_text = 'Non risus etiam integer litora eros scelerisque augue aenean ante augue velit ad\
Elit quam blandit porttitor pretium egestas potenti fringilla tristique iaculis et\
Vehicula commodo donec tristique et pellentesque at feugiat\
Vivamus dolor magna purus diam\
Tempus est hac conubia semper sagittis posuere dictumst ligula\
Etiam mollis pellentesque mi elementum integer commodo ipsum ut habitant varius\
Sociosqu vel iaculis torquent ultricies molestie aliquam porttitor cursus dictumst velit\
Et nostra suscipit mollis aliquam congue dolor dapibus fames risus viverra lobortis integer'




// var Events =
// {
// 	SMS :
// 	{	color : "#03B3E5",
// 		head : "Stock Market Simulation",
// 		info : random_text,
// 		image: "Image/sms.jpeg"
// 	},
// 	RE :
// 	{	color : "#F6A211",
// 		head : "Reverse Engineering",
// 		info : random_text,
// 		image: "Image/re.jpeg"
// 	},
// 	AIC :
// 	{	color : "#F33562",
// 		head : "Apogee Innovation Challenge",
// 		info : "APOGEE Innovation Challenge, an exceptional technical symposium, aims at quenching your thirst for hands-on experience in real life problems plaguing the industrial world. Organized in collaboration with various multinational companies, this event presents before you existing challenges faced by these companies who seek their solutions from you. <br>Exciting internship offers and cash prizes await the winners. Participation certificate shall be given to all members of each team which present solutions during APOGEE ‘18. Needless to say, you can brag about cracking a professional challenge while still being in college.<br>These problems, which happen to be discipline specific (one need not belong to that discipline), are to be solved by participants in teams of 2-4 in a month. After scrutiny by company officials, top 5 teams will be presenting their final solutions during APOGEE ‘17. ",
// 		image: "Image/aic.jpg"
// 	},
// 	FTGP :
// 	{	color : "#52B5A0",
// 		head : "Full Throttle Grand Prix",
// 		info : "Sports Cars are one of the most ultimate man-made machines and their race is full of adventures and a must watch event. On the course of F1 racing BITS-Pilani is conducting Remote Controlled racing event “The Full Throttle Grand Prix”. This competition is to show your knowledge about engineering behind remote controlled cars and feel the effect of ultimate driving experience. The event requires racing of your self-built RC cars on a race track. Although it may look simple to you but you will face cut-throat competition, and finally it is the quality of the car and driver ability which will decide the winner<br>Build a Remote Controlled IC engine powered car to traverse a race track in the minimum possible time. The time trial track may be composed of several turns with increasing difficulty levels. The teams with the top best time to lap this track qualify for racing. Final round will be a race.",
// 		image: "Image/ftgp.jpeg"
// 	},
// 	HACK :
// 	{	color : "#37F275",
// 		head : "Hackathon",
// 		info : "Have you ever dreamt of exploring the world of Artificial Intelligence by solving a real life problem? If yes, then your ticket to turning this enthralling thought into reality is right in front of you. BITS-Pilani presents the premier machine learning hackathon this APOGEE 2018.",
// 		image: "Image/hack.jpg"
// 	},
// 	ICL :
// 	{	color : "#357BF3",
// 		head : "International Coding League",
// 		info : "Talk is Cheap. Show me the code- Linus Torvalds.<br>Do you think you have mastered Competitive coding, the greatest mind sport? Do you feel the urge to solve Mind blowing problems and play the Game of Codes? Here’s your stage to step on and prove your coding skills – A challenging stage, a nail biting one! BITSACM presents ICL - International Coding League: a competitive programming contest based on the ACM ICPC this Apogee 2018. In February some of the best minds in the country are to gather to compete for the crown.",
// 		image: "Image/icl.jpeg"
// 	},
// 	RAW :
// 	{	color : "#F6A211",
// 		head : "Robots At War",
// 		info : "Design a remote controlled robot to combat with the opponent's bot. The arena will be a rectangle measuring 24ft x 24ft. However, the fight zone will be 20ft x 20ft, pushing the opponent bot out of this fight zone will result in victory. The arena might be on hard and uneven ground and will be enclosed by a 5ft high wire meshes all around.",
// 		image: "Image/re.jpeg"
// 	},
// 	LEAP :
// 	{	color : "#F6A211",
// 		head : "Leap",
// 		info : random_text,
// 		image: "Image/leap.jpeg"
// 	}
// }


var Events = {
	"CIVIL": {

	},
	"CODING":{
		HACK :
		{	color : "#37F275",
			head : "Hackathon",
			info : "Have you ever dreamt of exploring the world of Artificial Intelligence by solving a real life problem? If yes, then your ticket to turning this enthralling thought into reality is right in front of you. BITS-Pilani presents the premier machine learning hackathon this APOGEE 2018.",
			image: "Image/hack.jpg"
		},
		ICL :
		{	color : "#357BF3",
			head : "International Coding League",
			info : "Talk is Cheap. Show me the code- Linus Torvalds.<br>Do you think you have mastered Competitive coding, the greatest mind sport? Do you feel the urge to solve Mind blowing problems and play the Game of Codes? Here’s your stage to step on and prove your coding skills – A challenging stage, a nail biting one! BITSACM presents ICL - International Coding League: a competitive programming contest based on the ACM ICPC this Apogee 2018. In February some of the best minds in the country are to gather to compete for the crown.",
			image: "Image/icl.jpeg"
		},
	},
	"MECHATRONICS":{},
	"MISCELLANEOUS":{
		POL:{
		head:"POLYSIS",
info:'"If you believe the major issues in the country is primarily due to institutional voids in policy making and implementation process and if you think you can create a policy agenda from the existing issues in the society and structure a well-designed solution for the same, POLYSIS (Policy Analysis) is one of a kind opportunity to contest your opinions with top minds in the country.'
},
BTB:{
head: "Bob the Builder",
info:"A pile of junk, knowledge of basic laws of science and a lot of creativity, that's all it takes to make an awesome contraption. Creative Activities Club brings to all a contraption making competition. The entire inventory will be provided on the spot along with a problem statement. "
	},
	CHM:{
head:"Checkmate",
info:"Intelligence is not to make no mistakes, but to see quickly how to make them good.<br>~ Bertolt Brecht<br>A contest designed to test the mental aptitude of the contestants. What matters is your perseverance to get out of unforeseen situations. It may consist of brain teasers, mind boggling puzzles and other aptitude questions to juggle your brain"
},
GE:{
head:"Goodbye Earth",
info:"It's the year 2050. Humans have left Planet Earth and are trying to build a colony on other planet. Your team is in-charge of this settlement and thus you have to take care of various aspects of this new colony. There will be three rounds in the event which will be declared then and there. Round will test your creative abilities and scientific aptitude. "
},
JAW:{
head:"Join & Win",
info:"As is the case that \"the one who deserve is the one who observe\" the same goes with our event Join & Win, where you spectate all around to win here. <br>The keen observant of the events throughout the day get a chance to answer various questions and puzzles based on the events held on that day and  answering and gaining maximum points makes you the winner."
},
MM:{head:"Media Mania",
info:"Test your skills in the world of Journalism. This event aims at bringing out the hidden journalist inside you.<br> Participants will be tested on their 'awareness', 'reporting skills', ‘communication skills' and whatever one can imagine of, by the word ‘media’. Specific details and rules of the various rounds of this event will be declared on the spot to retain the surprise element."
},
MS:{head:"Mind-sweeper",
info:"Ever dreamed of beating a computer which learns as you challenge it? This is the event in which you’ll challenge not only a computer but your own smartness."
}	},
	"QUIZZING":{
		OHT :{
			head: "Over Head Transmission",
			info:"Over Head Transmission, which is one of the biggest crowd pullers during APOGEE, is an event which is sure to test your lateral thinking abilities as well as simple General Knowledge. For the quizzical enough, OHT offers ample proof that quizzing isn't all about mugging.<br>Hosted by Major Chandrakant Nair."
		},
		BQ:{
			head:"Biz Quiz",
			info:"Do economics and finance interest you? This quiz will challenge your knowledge, test your limits and broaden your horizons.<br>Hosted by Kushan Patel."
		},
		IQ:{
			head:"India Quiz",
			info:"\"India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great grandmother of tradition. Our most valuable and most instructive materials in the history of man are treasured up in India only.\"<br>-Mark Twain<br>India Quiz introduces you to the different facets of India which you might have seen or heard of, but never experienced. Its people and places, its colour and hues, its opulence and magnificence are presented to you in a four hour format which promises to give you a whirlwind tour of India. It has been a successful crowd puller for the past few years and with all humility claims to be one of the foremost quizzing competitions of BITS-Pilani.<br>Hosted by Major Chandrakant Nair, a name synonymous with India-themed quizzing."
		},
		JEP:{
			head:"Jeopardy",
			info:"A quiz with a twist, get your questions answered before you can ask them, requires you to plan the questions you answer or ask rather. This event will give you a taste of the twisted TV show as well as the usual quizzing trivia! Rules: Teams of 2. Prelims round will reduce the participation to 18 teams. It is followed by Eliminations from which 6 teams will get selected to the finals. The finals, based on the Jeopardy board style, will have a number of rounds with the highest score deciding the winner. Bring a pen along."
		},
		STQ:{
			head:"Sci-Tech Quiz",
			info:"A sci-tech quiz in a tech fest in an institute of science and technology. This quiz will comprehensively examine your scientific knowledge and technological expertise, while providing a very enjoyable experience. <br>Hosted by Kushan Patel."
		},
		DQ:{
			head:"Doper’s Quiz",
			info: "This APOGEE, delve into the world of the Narcotics in our mind-boggling quiz. The questions will be based on real-life applications and situations in which the contestant will have to think logically and realistically. Audio and Visual aids will be provided to the participants in order to make the quiz more interesting."
		}

	},
	"ROBOTICS":{
		IS:{
			head:"I strike",
 			info:"Build a computer controlled robot which can move on a road with the help of overhead camera."
		},
		RAW: {
			head:"Robots at War",
			info: "Design a remote controlled robot to combat with the opponent's bot. The arena will be a rectangle measuring 24ft x 24ft. However, the fight zone will be 20ft x 20ft, pushing the opponent bot out of this fight zone will result in victory. The arena might be on hard and uneven ground and will be enclosed by a 5ft high wire meshes all around."
		},
		SDC: {
			head: "Student Design Competition",
			info: "The ASME Student Design Competition provides a platform for you all to present your solutions. Each team is required to design, construct and operate a prototype meeting the requirements of the problem statement.<br>APOGEE-2018 Student Design Competition: Robot Soccer.<br>You may choose to construct a team that is just one device or a team with multiple devices that are remotely controlled and must fit in a specified box provided by your team. The competition will have a multi-game group stage followed by a semi-final and final round for the top teams."
		},
		TOM:{
			head: "Track-O-Mania",
			info:"Maze solving line follower - A game where your problem solving skill is tested along with your ability to build a line following bot."
		},
		ARX:{
			head: "Arduinoix",
			info:"Mazes are one of the oldest puzzles known to man. Mazes have been built with walls and rooms, with hedges, turf, corn stalks, hay bales, books, paving stones of contrasting colours or designs, bricks and turf. An intricate maze will be awaiting you at Arduinoix. It’s the race against time. BOTS will be provided during the event. Contestants have to write Arduino code for the given bot to manoeuvre it through the event arena (maze)."
		},
		ADC:{
			head: "Analogue Design Challenge",
			info:"Are you intrigued by electronics? Are you bored of designing circuits on paper and want to try your skills on a world class designing platform? Then put on your thinking caps and get ready to rack your brains, Analogue Design Challenge is here.<br>The problem will be based on Analogue Design and the designing will be done using Cadence. You have to design the circuit based on the requirement specifications provided to you and within the given time limit."
		},
		CDC:{
			head: "Circuit Design Challenge",
			info:"Are you an electronics buff? Do you want to convert theoretical knowledge into a practical application? Can you do it fast enough? Then, Circuit Design Challenge is the place for you.<br>The problem will be based on Analogue and digital electronics and to be designed on a breadboard. You have to design an electronic circuit that meets the requirements of the problem by using the components provided by us."

		},
			HACKTR:{
				head:"Hackatronics",
				info:"Are you one of those people who itch to open it up whenever you look at a new gadget? Do you share the spirit of gadget-hacking? If so, you're looking at the right event.<br>This APOGEE, we give you the opportunity to open things up and make something useful and innovative out of them. Hack! Innovate! Build!"
			}

	},
	"SCIENCES":{

		AIC:{
			head:"APOGEE Innovation Challenge",
			info: "APOGEE Innovation Challenge, an exceptional technical symposium, aims at quenching your thirst for hands-on experience in real life problems plaguing the industrial world. Organized in collaboration with various multinational companies, this event presents before you existing challenges faced by these companies who seek their solutions from you. <br>			Exciting internship offers and cash prizes await the winners. Participation certificate shall be given to all members of each team<br>which present solutions during APOGEE '18. Needless to say, you can brag about cracking a professional challenge while still being in college.<br>These problems, which happen to be discipline specific (one need not belong to that discipline), are to be solved by participants in teams of 2-4 in a month. After scrutiny by company officials, top 5 teams will be presenting their final solutions during APOGEE ‘17. <br>StrategiaThe participants will be required to solve a case study,and present its solution. Certain incentives will be awarded to the participants based on the score of the first round, which can be used in the subsequent rounds. "
		},
		DXL:{
			head:"Dexter’s Laboratory",
			info:"A fun-filled quizzing and laboratory based event of the Apogee which provoke your practical thinking and logical approach to solve the mystery behind Dexter’s stolen invention."
		},
		GAMB:{
			head:"Gambling Mathematics",
			info:"Come with your team and show your skill to gamble in real time.<br>			All you should know is- How well you can handle your money (points in this event!). You need not know rules of Gambling as they would be told on spot at the event."
		},
		WHOD:{
			head:"Who Dunnit",
			info: "A murder has occurred in the locality. The teams participating will be rigorously screened and the best 6 will be put on the case to crack it. They will use resources available to them. The team that is able to solve the case fastest will be rewarded.<br>The candidates must appear in teams of 2 or 3 and will participate in 7 to 8 rounds of quizzes for screening. The final 6 teams will be chosen from the participants and be provided a murder mystery which they must solve with the help of chemicals available in the chemistry laboratory."

		},
		ZOMB: {
			head:"Zombie Mathematics",
			info:"Answer the tricky questions of your opponents and restrict their moves. It will be an online game where two teams will be playing against each other. The motive of each team will be to answer questions on each of its move in order to restrict other's way. The team that will survive till end will be the ZOMBIE of the event!"
		}
	},
	"SOCIAL":{
		DHITI:{
			head:"DHITI",
			info:"\"Have faith in people. They are basically good and smart. Given the right tools, they can do wonderful things.\"  – Steve Jobs.<br>Technology today has seeped into every aspect of our lives. But we must not forget about the society and its problems.  We, the youth form more than half of our nation's population. Our ideas and knowledge base can solve a multitude of different problems faced by the communities today. <br>We invite people to bring forth their ideas that can revolutionize the use of technology to improve people's lives. It is only by solving such basic problems that development will occur collectively in every community and not selectively.<br>APOGEE, BITS Pilani presents to you the social event of the annual technical extravaganza - DHITI.<br>Dhiti (Sanskrit for “An idea”) is a platform for passionate individuals who ideate and aspire for technology to reach the grassroots. Here we will provide you with problems and mentors to form feasible solutions to various issues and provide recognition to your solution. So, let’s put our ideas and knowledge bases to some real use.<br>Problem Statements would be updated later."
		}
	}
};



















var renderCatMenu = function(category){
	console.log(category, Events[category]);
	return function(){
		var box_wrapper_innerHTML = "";

		for(eventCode in Events[category]){
			box_wrapper_innerHTML += "<div class='box "+ eventCode.toLowerCase()+"' data-category='"+category+"' data-event='"+ eventCode+"'><div class='img'></div><p>"+ Events[category][eventCode].head+"</p></div>";
		}
		document.querySelector('.box-wrapper').innerHTML = box_wrapper_innerHTML;
		console.log(box_wrapper_innerHTML);

		Array.prototype.forEach.call(document.querySelectorAll('.box'), (el)=>{
			el.addEventListener('click',(e)=>{
				console.log(el)
				renderEvent(el.getAttribute('data-category'), el.getAttribute('data-event'))();
				closeNav();
				document.querySelector('#category-menu').querySelector('.cross-btn').click();
				document.querySelector('#event-menu').querySelector('.cross-btn').click();
			})
		});
		renderEMenu();
	};
};

(function __init_categories__(){
	var category_wrapper_html = "";
	var cat_wrapper = document.querySelector('.category-wrapper');
	for( category in Events){
		category_wrapper_html += '<div class="category" data="'+category+'">' + category + '</div>'
	}

	cat_wrapper.innerHTML = category_wrapper_html;
	var cats = document.querySelectorAll('.category');

	Array.prototype.forEach.call(cats,(el, i)=>{

		el.addEventListener('click', renderCatMenu(el.getAttribute('data')))
	});

})();




var info = document.querySelector(".infodata");
var content = document.querySelector(".infocontent")
var head = document.querySelector(".heading");
var data = document.querySelector(".data");
var slink = document.querySelector(".social_link");
var linkage = document.querySelector(".linkage");
var image = document.querySelector(".image");
var _url = document.location.pathname;
var dir = _url.substring(0,_url.lastIndexOf('/'));
function change(className, data_wrapper, footer, color, imageURL)
{

	return function(){
		document.body.className = className;
		document.body.querySelector("#data_wrapper").innerHTML = data_wrapper
		document.body.querySelector("#footer").innerHTML = footer;
		document.body.querySelector("#color").style.color = color;
		document.body.querySelector("#footer").style.backgroundColor = color;
		setTimeout(()=>{document.body.querySelector('.image').style.backgroundImage = "url(" + imageURL + ")";} , 480);
	}
}


var templates = {
	"home":{
		data_wrapper: '<div class="data">\
			<p id="head">cybernetic<br> vision</p>\
			<p id="date">22-25 february</p>\
			<p id="info">annual technical fest\
			<br>\
			 of bits pilani</p>\
		</div>',
		footer: '<ul>\
			<a href="https://www.facebook.com/bitsapogee/" target="_blank"><li><img src="./Image/fb.png"></li></a>\
			<a href="https://twitter.com/bitsapogee?lang=en" target="_blank"><li><img src="./Image/twitter.png"></li></a>\
			<a href="https://www.instagram.com/bitsapogee/" target="_blank"><li><img src="./Image/insta.png"></li></a>\
		</ul>'
	},
	"event" :{
		data_wrapper: function(category, eventCode){
			console.log(category, eventCode);
			return '<div class="letter"></div>\
			<div class="__container__">\
				<header><h1><b>' + Events[category][eventCode].head + '</b></h1></header>\
				<section>' + Events[category][eventCode].info + '</section>\
			</div>'
		},
		footer: '<h3>PROBLEM STATEMENTS</h3>'
	}
}

window.renderEvent = function(category, eventCode){
	if(eventCode == null){
		eventCode = "RE";
	}
	return change(
		"event "+ category+" "+eventCode,
		templates.event.data_wrapper(category, eventCode),
		templates.event.footer,
		Events[category][eventCode].color,
		Events[category][eventCode].image
		);
}
window.renderHome = change("home", templates.home.data_wrapper, templates.home.footer, "#04FFE5", "Image/mainbg.jpeg");
