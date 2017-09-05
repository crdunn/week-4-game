
var counter = 0;
var goalNumber
var options = [1,2,3,4,5,6,7,8,9,10,11,12];
var rand1 = 0
var rand2 = 0
var rand3 = 0
var rand4 = 0
var randArray
var win = 0
var loss = 0
var audioBegin = document.createElement("audio");
    audioBegin.setAttribute("src", "Assets/images/pylons.mp3");
var audioLoss = document.createElement("audio");
    audioLoss.setAttribute("src", "Assets/images/minerals.mp3");
var lossState = false;


function winCounter() {
	$("#current").text(counter);

	if (counter === goalNumber) {
	alert ("VICTORY!");
	win += 1;
	$("#win").text(win);
	} else if (counter >= goalNumber && lossState === false) {
	audioLoss.play();
	lossState = true;
	loss +=1;
	$("#loss").text(loss);
	};

};

$("#goal").on("click", function() {
	goalNumber = Math.floor(Math.random()*101)+19;
	counter = 0
	lossState = false
    audioBegin.play();
	$("#numberToUse").text(goalNumber);
	$("#current").text(counter);
	rand1 = Math.floor(Math.random()*11)+1;
	rand2 = Math.floor(Math.random()*11)+1;
	rand3 = Math.floor(Math.random()*11)+1;
	rand4 = Math.floor(Math.random()*11)+1;
	randArray = [rand1,rand2,rand3,rand4];
	console.log (randArray);

});


$("#khalai").on("click", function() {
	counter += rand1;
	winCounter ();
});

$("#nerazim").on("click", function() {
	counter += rand2;
	winCounter ();
});

$("#talDarim").on("click", function() {
 	counter += rand3;
 	winCounter ();
});

$("#purifier").on("click", function() {
	counter += rand4;
	winCounter ();
});
