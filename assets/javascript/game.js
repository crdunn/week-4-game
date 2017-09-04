
		var counter = 0;
		var goalNumber
		var options = [1,2,3,4,5,6,7,8,9,10,11,12];
		var rand1
		var rand2
		var rand3
		var rand4
		var randArray
		var win = 0
		var loss = 0
		var audioBegin = document.createElement("audio");
      		audioBegin.setAttribute("src", "Assets/images/pylons.mp3");
		var audioLoss = document.createElement("audio");
      		audioLoss.setAttribute("src", "Assets/images/minerals.mp3");


		$("#goal").on("click", function() {
			goalNumber = Math.floor(Math.random()*101)+19;
			counter = 0
        	audioBegin.play();
			$("#numberToUse").text(goalNumber);
			$("#current").text(counter);
			rand1 = options[Math.floor(Math.random()*options.length)];
			rand2 = options[Math.floor(Math.random()*options.length)];
			rand3 = options[Math.floor(Math.random()*options.length)];
			rand4 = options[Math.floor(Math.random()*options.length)];
			randArray = [rand1,rand2,rand3,rand4];
			console.log (randArray);

		});


		$("#khalai").on("click", function() {
		  counter += rand1;
		  $("#current").text(counter);

		  	if (counter === goalNumber) {
			alert ("You win!");
			win += 1;
			$("#win").text(win);
			}

			else if (counter >= goalNumber) {
			audioLoss.play();
			loss +=1;
			$("#loss").text(loss);
			}

		 });

		$("#nerazim").on("click", function() {
		  counter += rand2;
		  $("#current").text(counter);

		  	if (counter === goalNumber) {
			alert ("You win!");
			win += 1;
			$("#win").text(win);
			}

			else if (counter >= goalNumber) {
			audioLoss.play();
			loss +=1;
			$("#loss").text(loss);
			}

		 });

		$("#talDarim").on("click", function() {
		  counter += rand3;
		  $("#current").text(counter);

		  	if (counter === goalNumber) {
			alert ("You win!");
			win += 1;
			$("#win").text(win);
			}

			else if (counter >= goalNumber) {
			audioLoss.play();
			loss +=1;
			$("#loss").text(loss);
			}

		 });

		$("#purifier").on("click", function() {
		  counter += rand4;
		  $("#current").text(counter);

		  	if (counter === goalNumber) {
			alert ("You win!");
			win += 1;
			$("#win").text(win);
			}

			else if (counter >= goalNumber) {
			audioLoss.play();
			loss +=1;
			$("#loss").text(loss);
			}

		 });
