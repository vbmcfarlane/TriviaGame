$(document).ready(function() {
    var selectQuest=[];
	$(".food").hide();
	$(".music").hide();
	$(".history").hide();
	$(".politics").hide();
	$(".country").hide();
	$(".choice").hide();
	$("#image").hide();
	$("#description").hide();
	$("#success").hide();
	$("#fail").hide();
	$("#timeUp").hide();
	$("#triviaOver").hide();
	$("#time-left").css({"color":"red"
						,"text-align":"center"})

 var selection='';
//=============SELECT FROM AVAILABLE 5 CATEGORIES =======================================================
	$(".cat").click(function(){
		 		 
	if(this.id == 'food')
	 	 {  
	 	 	resetCounters();
	 	 	$(".panel-title").html("Category:  Jamaican Food")
	 	 	$(".food").show();
	 	 	selection = food;
	 	 	loadRec(selection);
	 	 	disableCatBurrons();
		 } else if(this.id == 'music') 
		 {
		 	resetCounters();
		 	$(".panel-title").html("Category:  Jamaican Music")
	 	 	$(".music").show();
	 	 	selection = music;
		 	loadRec(selection);
		 	disableCatBurrons();
		 
		 } else if (this.id == 'history') 
		 {
		 	resetCounters();
		 	$(".panel-title").html("Category:  Jamaican History")
	 	 	$(".history").show();
	 	 	selection = history;
	 	 	loadRec(selection);
			disableCatBurrons();
		 } else if (this.id == 'politics') 
		 {
		 	resetCounters();
		 	$(".panel-title").html("Category:  Jamaican Politics")
	 	 	$(".politics").show();
	 	 	selection = politics;
		 	loadRec(selection);
		 	disableCatBurrons();
		 } else if (this.id == 'country') 
		 {
		 	resetCounters();
		 	$(".panel-title").html("Category:  Jamaica")
	 	 	$(".country").show();
	 	 	selection = country;
	 	 	loadRec(selection);
		 	disableCatBurrons();
		 }   
})	
//====================================================================
//  Use the following link inside the Audio function below:
//  https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90

 // audio = new Audio("media/" + song);  future feature


//This function will provide the score to match, through generating a random number.  It will then populate the HTML with this number.

//==============GOLBAL VARIBLES=========================
	var audio;
	var correct = 0;
	var wrong = 0;
	var noAnswer = 0;
	var numRecs=0;
	var questionNum=0;
	var questionsLeft=10;
	var recsLoaded=0;
	var timer = 0;
    var intervalId=0;
	var answerSelected_A='';
	var answerSelected_B='';
	var answerSelected_C='';
	var answerSelected_D='';
	var rightAnswer='';
	var selectedAnswer ='';
	var buttonText='';
	var imageUrl;

//========================================================================	
 function loadRec(selection){ 
 		
			$(".answers").show();

			if (recsLoaded <= 10) {
				$("#triviaOver").slideUp();
				populateValues();
				console.log("RecsLoaded = " + recsLoaded);
				console.log("Load next Record");
			}else {
				resetCounters();
				clearInterval(intervalId);
				console.log("Stop Loading Records");
				console.log("Show category options");
				console.log("**** Enable Category Buttons****")
				enableCatBurrons();
	
		 		} //end of if  code
  } // end of function loadRec

//========================================================================	
        
function disableCatBurrons(){
	$('#food').attr('disabled','disabled');
	$('#music').attr('disabled','disabled');
	$('#history').attr('disabled','disabled');
	$('#politics').attr('disabled','disabled');
	$('#country').attr('disabled','disabled');
}
//========================================================================	

function enableCatBurrons(){
	$('#food').removeAttr('disabled');
	$('#music').removeAttr('disabled');
	$('#history').removeAttr('disabled');
	$('#politics').removeAttr('disabled');
	$('#country').removeAttr('disabled');
}
//========================================================================	

function checkAnswers() { 

		 if (selectedAnswer === rightAnswer)  {
	 		correct++;
	 		 $("#RA").text(correct); 
	 		clearInterval(intervalId);
	 		
	 		$("#success").fadeIn(1000).delay(5000).fadeOut(1000);
	 		
		 	}   else {
		 		wrong++;
		 		 $("#WA").text(wrong); 
		 		clearInterval(intervalId);
		 		$("#fail").fadeIn(1000).delay(5000).fadeOut(1000);
		 		
		 	}	


 	
 			$("#image").fadeIn(500).delay(6000).fadeOut(500);
		    $("#description").slideDown(1000).delay(5000).slideUp(1000);
	 		 
	 		if (recsLoaded <= 10){
	 			resetValues();
	 			setTimeout(populateValues, 7000);
	 		
	 		} else {
	 			flushVar();

	 		}
	 		

}

//========================================================================	
     function flushVar() {

     	console.log("flushing variables");
	 		 
	 		//	alert("recsLoaded= " + recsLoaded);
	 		//	alert(" get summary of score");

			resetValues();
			resetCounters();
			selectQuest=[];
	        timer = 0;
		    intervalId = 0;
			answerSelected_A='';
			answerSelected_B='';
			answerSelected_C='';
			answerSelected_D='';
			rightAnswer='';
			selectedAnswer ='';
			buttonText='';
			$("#image").hide();
			$("#description").hide();
			$("#success").hide();
			$("#fail").hide();
			$("#timeUp").hide();

	 }
//========================================================================	
function resetValues() {
				 console.log("resetValues");
				quest="";
				answerSelected_A = ""; 
				answerSelected_B = ""; 
				answerSelected_C = ""; 
				answerSelected_D = ""; 
			   $("#pt").slideUp(1000);
		       $("#pb").slideUp(1000);
			     
}	

function resetCounters() {
	 		console.log("resetCounters");

			correct = 0;
			$("#RA").text(correct);
			wrong = 0;
			$("#WA").text(wrong);
			noAnswer = 0;
			$("#MA").text(noAnswer); 
			questionsLeft=10;
			$("#Q").text(questionsLeft);
			recsLoaded=0;
			numRecs = 0;
			questionNum=0;
			
			
			
			console.log("correct = " + correct) ; 
			console.log("wrong = " + wrong);
			console.log("noAnswer =" + noAnswer);
			console.log("numRecs = "+ numRecs);
			console.log("questionNum = "  + questionNum);
			console.log("questionsLeft = "+ questionsLeft);
			console.log("recsLoaded = " + recsLoaded);
}

//========================================================================	
function getRandNum(){ 
console.log("getRandNum");
			do { 
				numRecs= Math.floor((Math.random() * selection.length));
				console.log (numRecs + " Chosen");
				console.log("Check : " + (jQuery.inArray(numRecs, selectQuest) == -1));
				console.log("Array = " + selectQuest);
			}
			while (jQuery.inArray(numRecs, selectQuest) !== -1){
             
           		 // Get a new number to avoid dupl questions
                // Adding question selected to  question selected array "selectQuest"
                selectQuest.push(numRecs);
            }
}

function populateValues() {
	//audio.play(); *****Future upgrade ****
	$("#quest").show();
	$("#ansp").show();
	$("#panel").show();
	 console.log("populateValues");
	//Clear out last timer activity
	 
	clearInterval(intervalId);
	console.log("Reset Timer to 20 secs")
	timer = 21; // set to 21 to account for animation of answers
	
	 $("#Q").text(questionsLeft); 
	 questionsLeft--;
	 recsLoaded++;

	 if (recsLoaded > 10) {
	 	console.log("enableCatBurrons");
	 	enableCatBurrons();
	 	console.log("records loaded > 10");
	 	$("#triviaOver").slideDown();
	 	timer=0;
		$("#pt").hide();
		$("#pB").hide();
		$("#quest").hide();
		$("#panel").hide();	
		$("#ansp").hide();
	 } else { 
			console.log("Loading Records");
			 
			//========================================================
			// Get a new random to load question
			getRandNum();
          
            // Check for duplicate button values. doesn't run existing buttons
           
					//=====load question==================================================	

					$("#quest").show();
					$(".answers").show();
					$("#pt").slideDown(1000);
		  			$("#pb").slideDown(1000);
					$("#buttonA").show();
					$("#buttonB").show();
					$("#buttonC").show();
					$("#buttonD").show();

					answerSelected_A = selection[numRecs][1] [0];
					answerSelected_B = selection[numRecs][1] [1];
					answerSelected_C = selection[numRecs][1] [2];
					answerSelected_D = selection[numRecs][1] [3];
					rightAnswer = selection[numRecs][2];
					
					$("#quest").text("Question # " + recsLoaded +": " + selection[numRecs][0]); 
					$("#buttonA").text("(A):   "+ selection[numRecs][1][0]);
					$("#buttonB").text("(B):   "+ selection[numRecs][1][1]);
					$("#buttonC").text("(C):   "+ selection[numRecs][1][2]);
					$("#buttonD").text("(D):   "+ selection[numRecs][1][3]);
					$("#description").text(selection[numRecs][3]);
					imageUrl = selection[numRecs][4];
					
					var imgc = $("#image").attr('src');
				//	alert("image = " + imgc); 
				//	console.log("image = " + imgc);

				  $("#image").attr('src',imageUrl);
					imgc = $("#image").attr('src');
				//alert("image = " + imgc); 
				//	console.log("image = " + imgc);
					runTimer();
					
	}		
}


//====================TIMER FUNCTIONS==================================
    function runTimer() {
    	console.log("runTimer");
    	if(recsLoaded < 11){
   				  console.log("Running Interval Timer");
			      intervalId = setInterval(decrement, 1000);
		}else {
				clearInterval(intervalId);
				 console.log("Stop Running Interval Timer");
		}	      
	}		  
//====================DECREMENT TIMER FUNCTION==================================
    function decrement() {
    	console.log("decrement");
    //  console.log("Decrementing Timer by one sec");
      timer--;
      //  Show the number in the #show-number tag.
      $("#time-left").html("<h2>" + timer + "</h2>");
      //  Once number hits zero... process unanswer questions
      if (timer === 0) {
      //  console.log("Incrementing noAnswer by one");
        noAnswer++;
	//	console.log("Decrementing Timer by one sec");
        clearInterval(intervalId);
        $("#pt").slideUp(1000);
		$("#pb").slideUp(1000);
		$("#image").fadeIn(500).delay(6000).fadeOut(500);
        $("#description").slideDown(1000).delay(5000).slideUp(1000);
        $("#MA").text(noAnswer);  
 		$("#timeUp").fadeIn(1000).delay(5000).fadeOut(1000);
        $("#time-left").html("Time's Up!");
        setTimeout(populateValues, 7000);
      }
    }
//====================STOP TIMER FUNCTION==================================
    function stopTimer() {
   // stop running timer activity
      console.log("Stop Timer: Stopping Interval Timer");
      clearInterval(intervalId);
    }

//====================SELECT TRIVIA ANSWERS FUNCTION====================================================  

$(".choice").click(function(){
	console.log("Answer Buttons");	 		 
	if(this.id == 'buttonA'){
	 	  selectedAnswer = answerSelected_A;
	 	 	 	
	 	 } else if(this.id == 'buttonB') 
		 {	
		 	selectedAnswer = answerSelected_B;
	 		
		 } else if (this.id == 'buttonC') 
		 {	
		 	selectedAnswer = answerSelected_C;
	 		
		 } else if (this.id == 'buttonD') 
		 {
		 	selectedAnswer = answerSelected_D;
	 		
		 } 
      checkAnswers();
})

//===================FOOD ARRAY===================================	

var food=[
  ["what is Ackee?",["A vegetable","A tree grown fruit","A condiment","A type of milk"],"A tree grown fruit","The flesh of the cooked ackee fruit looks quite similar to fried eggs. Ackee and saltfish is the national breakfast.","assets/images/ackee&saltfish.jpg","ackee & saltfish"],
  ["what is festival",["A soup served at weddings","A curry","Fried sugared cornmeal dough","A type of stew"],"Fried sugared cornmeal dough","Festival dumpling is street food at it’s best and traditionally eaten on the beach alongside Escovitch Fish. Festival is sweet, crisp on the outside and dense.","assets/images/festival.jpg","festival"],
  ['what is "manish water"?',["A soup made from coconuts","An alcoholic beverage","A thick fish stew","Goat's head soup"],"Goat's head soup","Goats head soup is a common dish for special occasions such as weddings, nine night ceremonies,restaurants and Dance Hall gatherings","assets/images/manishWater.jpg","manishwater"],
  ["Jamaica Jerk. What is it?",["A spicy salad","A method of barbecuing meat","A blend of pureed vegetables","A spicy salad"],"A method of barbecuing meat","The term jerk is said to come from the word charqui, a Spanish term of Quechua origin for jerked or dried meat, which eventually became the word jerky in English.Jerk is also derived from the action of jerking, which referred to poking meat with holes so that flavor could more easily be absorbed.The term jerk spice (also commonly known as Jamaican jerk spice) refers to a spice rub. The word jerk refers to the spice rub, wet marinade, and to the particular cooking technique. Jerk cooking has developed a following in United States, Canadian and Western European cosmopolitan urban centers with Caribbean/West Indian communities","assets/images/jerkChicken.jpg","jerkchicken"],
 ["What is: Dip and fall back",["A stew of mackerel and cooked green bananas with coconut milk","Oxtails stewed with lima beans","Corn Beef and Cabbage","Fried fish and cooked vegetables"],"A stew of mackerel and cooked green bananas with coconut milk","The name 'dip and fall back' resulted from dipping the green banana or ground provision in the custard-like liquid of the run dung and then throwing the head back (fall back) to ensure that the liquid on the food goes into the mouth.","assets/images/dip&FallBack.jpg","dip&fallback"],
  ["What is Matrimony",["various grilled meat","A soup of Vegetables","A blend of star apple and other fruit","A coconut flavored cake"],"A blend of star apple and other fruit","Fruit Salad is called Matrimony.  Traditionally Matrimony uses three fruits: oranges, grapefruit and star apple. Since star apples aren’t always easy to find outside the tropics you can substitute other peeled fruits. Mango, pineapple and juicy stone fruits like plums and peaches work best. (If you have star apples, use the pulp of 4 apples with the citrus instead). Adding nutmeg and sweetened condensed milk is what makes this dessert really Jamaican.","assets/images/matrimony.jpg","matrimony"],
  [' what is "Solomon Gundy"?',["A pulpy squashlike gourd","fried fish and dumplings"," Pig intestines soup","Pickled herring condiment" ],"Pickled herring condiment","In Jamaican cuisine, Solomon Gundy is a pickled pâté usually served with crackers as an appetizer. The Jamaican pâté is made with smoked red herring (although other fish such as mackerel and shad are also sometimes used) and is minced and spiced with chili peppers and seasonings. The dish appears on the menus of Jamaican restaurants and resorts. It is also sold as a packaged food for export.","assets/images/SolomonGrundy.jpg","SolomonGundy"],
  ['What is "stamp and go"?',["Saltfish fritters","Stuffed bell peppers","cassava pancakes","Red kidney beans stewed with salt-pork" ],"Saltfish fritters","Stamp and Go is a fish fritter made with salt fish in Jamaican cuisine. It is part of a Jamaican breakfast along with ackee and callaloo fritters. It is referred to as one of the original fast foods in Jamaica. The unusual name is supposed to have derived from the 18th-century British sailing ships. If an officer wanted something to be done in a hurry the order was Stamp and Go!. These bite-sized, salty delights are a favorite at cocktail parties served with tangy dips. The larger ones are great for breakfast, and one can well imagine just how popular this journey food was many years ago","assets/images/Stamp&Go.jpg","StampandGo"],
  ["What is Duckunu",["Fruity rum cake","A pastry with grated coconut","Pudding","Almond flavored grated coconut" ],"Pudding","Jamaican Blue Drawers or Duckunoo (pronounced doo-koo-noo) is a fairly rare traditional dessert made with mixed ground provisions and raisins. The simple ingredients are wrapped in banana leaves and steamed to become tender morsels. You’ll find this dessert, similar to Barbadian Conkies, in the more rural areas of the island more often than in the cities.","assets/images/Duckunu.jpg","Duckunu"],
  ["What is Bulla and Pear",["Sweet potato pudding with pear","Spiced bun and cheese","A fried dumpling with mixed fruit","Cake with wet sugar and avocado" ],"Cake with wet sugar and avocado","Bulla cake, usually referred to as bulla, is a rich Jamaican cake made with molasses and spiced with ginger and nutmeg, sometimes dark-colored and other times light-colored. Bulla are small loaves that are flat and round. They are inexpensive and easy to make using molasses, flour and baking soda. Bulla is traditionally a popular treat for schoolchildren. It is usually eaten with pear(avocado), cheese or butter","assets/images/bulla&pear.jpg","bulla & pear"],
  [" Made primarily from chips of dried coconut, ginger, spices, brown sugar and have a fudge-like consistency:What is it ?",["Grater Cake","Drops","Matrimony"," Busta Backbone" ],"Drops"," Drops is a carmelized coconut bits mixed with ginger and sugar. It's a favorite treat for Jamaicans","assets/images/drops.jpg","Drops"],
  ["While technically classified as a fruit, this item is often mistaken for a vegetable. Often paired with saltfish, what is the name of the fruit that is one half of the Jamaican National Dish?",["Mango","Banana","Ackee","Breadfruit" ],"Ackee","The ackee fruit was imported to The Caribbean from Ghana before 1725,  The scientific name honours Captain William Bligh who took the fruit from Jamaica to the Royal Botanic Gardens in Kew.","assets/images/ackee&saltfish.jpg","ackee & saltfish"],
  ["Sometimes know as Hell A Top, Hell A Bottom, Hallelujah In De Middle, what is the name of this sweet Jamaican treat?",["Banana Cake","Sweet Potato Pudding","Mango Pie","Papaya Custard" ],"Sweet Potato Pudding","Hell A Top, Hell A Bottom, Hallelujah In De Middle is the name of the Jamaican Sweet Potato Pudding","assets/images/sweetPotatoPudding.jpg","sweetPotatopudding"],
  ["What is the name given to the popular hot pepper used in Jamaican cooking?",[" Hot-Pon-It Peppers","Scotch Bonnet Peppers", "Chillis","Jalapenos" ],"Scotch Bonnet Peppers","Most Scotch bonnets have a heat rating of 100,000–350,000 Scoville units. For comparison, most jalapeño peppers have a heat rating of 2,500 to 8,000 on the Scoville scale. However, completely sweet varieties of Scotch bonnet are grown on some of the Caribbean islands, called cachucha peppers.","assets/images/scotchBonnetPepper.jpg","scotchBonnetPepper"],
  [" Middle Quarters on Jamaica's South Coast is famous for what culinary delight?",["Jerked Pork","Rum Punch","Bammy","Peppered Shrimp" ],"Bammy","Bammy or bami is a traditional Jamaican cassava flatbread descended from the simple flatbread eaten by the Arawaks, Jamaica's original inhabitants. Today, it is produced in many rural communities and sold in stores and by street vendors in Jamaica and abroad.","assets/images/Bammy.jpg","bammy"],
   ["What are Jamaican Spinners?",["Spiral carved potatoes","A type of candy","Bicycle racers","Small flour dumplings added to soups and stews" ],"Small flour dumplings added to soups and stews","Small flour dumplings made of  whisk together flour and salt. Add enough water to make a stiff dough. Once the dough is formed, pinch off about 1/2 ounce of dough and roll it between your hands to from a softly tapered cylindrical shape. Repeat until all of the dough has been transformed to spinners.","assets/images/spinners.jpg","spinners"],
   ["Often called Polenta in other regions, this dish is known by a different name in Jamaica? ",["Couscous","Green Banana Porridge","Steamed Cereal","Tu'n Cornmeal" ],"Tu'n Cornmeal","Often called Polenta in other regions, this dish is known by -Tu'n Cornmeal- in Jamaica. Usually the soft seasoned variety is served. Ingredients like saltfish, salted beef, onions, peppers and coconut milk may be added for flavoring.","assets/images/tunCornmeal.jpg","tunCornmeal"],
   ["What's a pinch-mi-round",["Gizzarda","Beef patties"," Turnovers","Tarts" ],"Gizzarda","A local pastry consisting of a sticky coconut filling in a tart shell and sometimes called pinch-mi-round, this local item is known by this more popular name. The name pinch-mi-round comes from the decoration that is traditionally formed in the individual tart shells by pinching sections of the outer shell to create pointed segments.","assets/images/Gizzarda.jpg","Gizzarda"]
];
//===================FOOD ARRAY===================================	
var music=[
			["Many Rivers to Cross- Which Jamaican artiste made it popular?",["Jimmy Cliff","Garnet Silk","Tarrus Riley","Bunny Wailer"],"Jimmy Cliff","Many Rivers to Cross is a song written in 1969 by Jimmy Cliff","assets/images/JimmyCliffManyRiversToCross.jpg","Jimmy Cliff"],
			["It's Growing: Which Jamaican artiste made it popular? ",["Jimmy Cliff","Garnet Silk","Tarrus Riley","Bunny Wailer"],"Garnet Silk","No Description","assets/images/GaretSilk-ItsGrowing.jpg","It's Growing"],
			["She's Royal-Which Jamaican artiste made it popular? ",["Jimmy Cliff","Garnet Silk","Tarrus Riley","Bunny Wailer"],"Tarrus Riley","No description","assets/images/TarrusRiley-ShesRoyal.jpg","TarrusRiley-ShesRoyal"],
			["Remember Jah- Which Jamaican artiste made it popular?",["Devon Black","Neville Martin","Satsang","Eric Donaldson" ],"Satsang","No Description","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Dead This Time- Which Jamaican artiste made it popular?",["Devon Black","Neville Martin","Omar Reid","Bounty Killer" ],"Bounty Killer","No Description","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Blackheart ManWhich Jamaican artiste made it popular?",["Bunny Wailer","Neville Martin","Omar Reid","Stanley Astronaut" ],"Bunny Wailer","No Description","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["No Woman no cry- Which Jamaican artiste made it popular?",["Devon Black","Neville Martin","Peter Tosh","Bob Marley" ],"Bob Marley","Bob Marley Song","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Who sang Rivers of Babylon?",["The Heptones","Jimmy Cliff","The Melodians","The Abyssinians" ],"The Melodians","The Melodian's Song","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Who was the deejay on Wake the Town?",["I Roy","U Roy","Big Youth","Sugar Minott" ],"U Roy","U Roy","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Bam Bam-Jamaican Song Festival in 1966, Who sang it",["The Jamaicans ","Neville Martin","The Maytals ","Desmond Dekker & The Aces" ],"The Maytals ","The Maytals-1966 Festival winning Song: Bam Bam","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Ba Ba Boom-Jamaican Song Festival in 1967, Who sang it",["Devon Black","The Jamaicans ","Omar Reid","Freddie McKay" ],"The Jamaicans","The Jamaicans-1967 Festival winning Song:Ba Ba Boom","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Music Like Dirt (Intensified '68)-Jamaican Song Festival in 1968, Who sang it",["Devon Black","Desmond Dekker & The Aces","Omar Reid","Stanley Astronaut" ],"Desmond Dekker & The Aces","Desmond Dekker & The Aces-1968 Festival winning Song: Music Like Dirt (Intensified '68","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Sweet and Dandy-Jamaican Song Festival in 1969, Who sang it",["Devon Black","Singer Jay","Omar Reid","The Maytals" ],"The Maytals","The Maytals-1969 Festival winning Song: Sweet and Dandy","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Boom Shacka Lacka-Jamaican Song Festival in 1970, Who sang it",["Hopeton Lewis"," Eric Donaldson","Omar Reid","Stanley Astronaut" ],"Hopeton Lewis","Hopeton Lewis-1970 Festival winning Song: Boom Shacka Lacka","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Cherry Oh Baby-Jamaican Song Festival in 1971, Who sang it",["Devon Black","Neville Martin","Omar Reid","Eric Donaldson" ],"Eric Donaldson","Eric Donaldson-1971 Festival winning Song: Cherry Oh Baby","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Pomps and Pride-Jamaican Song Festival in 1972, Who sang it",["Singer Jay"," Eric Donaldson","Omar Reid","Stanley Astronaut" ],"Toots & the Maytals ","Toots & the Maytals-1972 Festival winning Song: Pomps and Pride","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Jump In The Line-Jamaican Song Festival in 1973, Who sang it",["Devon Black","Morvin Brooks","Stanley & The Turbines ","Stanley Astronaut" ],"Morvin Brooks","Morvin Brooks-1973 Festival winning Song: Jump In The Line","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Play de Music-Jamaican Song Festival in 1974, Who sang it",["Tinga Stewart","Neville Martin","Omar Reid","Stanley Astronaut" ],"Tinga Stewart","Tinga Stewart-1974 Festival winning Song: Play de Music","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Hooray Festival-Jamaican Song Festival in 1975, Who sang it",["Devon Black","Neville Martin","Tinga Stewart ","Roman Stewart" ],"Roman Stewart","Roman Stewart-1975 Festival winning Song","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Dance This Ya Festival-Jamaican Song Festival in 1976, Who sang it",["Devon Black","Freddie McKay","Donald White","Stanley Astronaut" ],"Freddie McKay","Freddie McKay-1976 Festival winning Song: Dance This Ya Festival","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Sweet Jamaica-Jamaican Song Festival in 1977, Who sang it",["Devon Black","Neville Martin","Eric Donaldson","Stanley Astronaut" ],"Eric Donaldson","Eric Donaldson-1977 Festival winning Song: Sweet Jamaica","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Land of my Birth-Jamaican Song Festival in 1978, Who sang it",["Devon Black","Neville Martin","Tinga Stewart ","Singer Jay" ],"Eric Donaldson","Eric Donaldson-1978 Festival winning Song: Land of my Birth","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Born Jamaican-Jamaican Song Festival in 1979, Who sang it",["The Astronauts","Neville Martin","Omar Reid","Stanley Astronaut" ],"The Astronauts","1979 Festival winning Song: Born Jamaican","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Come Sing With Me-Jamaican Song Festival in 1980, Who sang it",["Stanley & The Turbines ","Tinga Stewart","Stanley & The Turbines","Roy Rayon" ],"Stanley & The Turbines","Stanley & The Turbines-1980 Festival winning Song: Come Sing With Me","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Nuh Wey Nuh Betta Dan Yard-Jamaican Song Festival in 1981, Who sang it",["Devon Black","Neville Martin","Omar Reid","Tinga Stewart" ],"Tinga Stewart","Tinga Stewart-1981 Festival winning Song: Nuh Wey Nuh Betta Dan Yard","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Mek Wi Jam-Jamaican Song Festival in 1982, Who sang it",["Devon Black","Neville Martin","The Astronauts","Stanley Astronaut" ],"The Astronauts","The Astronauts-1982 Festival winning Song: Mek Wi Jam","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Jamaica I'll Never Leave You-Jamaican Song Festival in 1983, Who sang it",["Roy Rayon ","Stanley & The Turbines ","Omar Reid","Ras Karbi " ],"Ras Karbi ","Ras Karbi-1983 Festival winning Song: Jamaica I'll Never Leave You","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Proud to be Jamaican-Jamaican Song Festival in 1984, Who sang it",["Devon Black","Neville Martin","Omar Reid","Eric Donaldson" ],"Eric Donaldson","Eric Donaldson-1984 Festival winning Song:Proud to be Jamaican","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Love Fever-Jamaican Song Festival in 1985, Who sang it",["Roy Rayon","Neville Martin","Omar Reid","Stanley & The Turbines " ],"Roy Rayon ","Roy Rayon- 1985 Festival winning Song: Love Fever","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Dem a fe Squirm-Jamaican Song Festival in 1986, Who sang it",["Devon Black","Stanley & The Turbines","Omar Reid","Stanley Astronaut" ],"Stanley & The Turbines","1986 Festival winning Song","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Give Thanks and Praise-Jamaican Song Festival in 1987, Who sang it",["Devon Black","Neville Martin","Omar Reid","Roy Rayon" ],"Roy Rayon","Roy Rayon-1987 Festival winning Song: Love Fever","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Jamaica Land We Love-Jamaican Song Festival in 1988, Who sang it",["Singer Jay","Neville Martin","Omar Reid","Stanley Astronaut" ],"Singer Jay","Singer Jay-1988 Festival winning Song: Jamaica Land We Love","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Stop and Go-Jamaican Song Festival in 1989, Who sang it",["Devon Black","Neville Martin","Michael Forbes","Stanley Astronaut" ],"Michael Forbes","Michael Forbes:1989 Festival winning Song: Stop and Go","assets/images/jamaicanMapFlag.jpg","jamaican map"],
			["Island Festival-Jamaican Song Festival in 1990, Who sang it",["Robbie Forbes","Heather Grant ","Eric Donaldson","Zac Henrry " ],"Robbie Forbes","Robbie Forbes-1990 Festival winning Song: Island Festival","assets/images/jamaicanMapFlag.jpg","jamaican map"]
  		 ];




//========================================HISTORY ARRAY===================================	
var history=[
				["When did Jamaica become independent?",["11 March 1958","6 August 1969","6 August 1962","18 December 1971" ],"6 August 1962","The Colony of Jamaica gained independence from the United Kingdom on 6 August 1962. In Jamaica, this date is celebrated as Independence Day, a national holiday.","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["What did Christopher Columbus call Jamaica?",["Jamaica","Santiago","Valparaiso","Xaymaca" ],"Santiago","The Spanish Empire began its official rule in Jamaica in 1509, with formal occupation of the island by conquistador Juan de Esquivel and his men. Santiago was a Spanish colony of the Spanish West Indies and within the Viceroyalty of New Spain, in the Caribbean region. Its location is the present-day island and nation of Jamaica","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["Who was Jamaica’s governor general in 2007?",["Sir Howard Cooke","Sir Florizel Glasspole ","Sir Kenneth O. Hall","Sir Patrick Allen" ],"Sir Kenneth O. Hall","The Queen, on the advice of the Prime Minister, appoints a governor-general as her representative in Jamaica. Both The Queen and the Governor-General hold much power, but rarely exercise it, usually only in emergencies and, in some cases,","assets/images/jamaicanMapFlag.jpg","jamaican map"]
				
				
   ];







//=========================================POLITICS ARRAY=================================================	
var politics=[
				["Which party won Jamaica’s general election in 2007?",["People's National Party","Jamaica Labour Party","Jamaica Revolutionary Party","Progressive Party" ],"Jamaica Labour Party","General elections were held in Jamaica on 3 September 2007. They had originally been scheduled for 27 August 2007 but were delayed due to Hurricane Dean. The preliminary results indicated a slim victory for the opposition Jamaican Labour Party led by Bruce Golding","assets/images/BruceGolding.jpg","bruce golding"]
				[" when was the highest percentage of electorate turnout in Jamaica’s independent?.",["2006","1980","1967","1972" ],"1980","Voter turnout in the 1980 election was 86.1%, the highest in Jamaican history. The JLP, under the lead of The Hon. Edward Seaga won 51 of the 60 parliamentary seats.","assets/images/EdwardSeaga.jpg","Edward Seaga"],
				["When was the first general election held in Jamaica?",["Devon Black","1962","Omar Reid","1944" ],"1944","At this time, the country had been granted full adult suffrage for the election of members to the House of Representatives. Led by Alexander Bustamante, the JLP won 22 seats, the PNP won 5 and the Independents won 5 seats.","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["Jamaica's shortest serving prime minister?",["Donald Sangster","Neville Martin","Omar Reid","Stanley Astronaut" ],"Donald Sangster","Donald Sangster has the unfortunate distinction of being the shortest-serving Prime Minister to date. He was prime minister for 48 days. Sir Donald was in the post for less than two months before succumbing to illness.Sangster died on April 11, 1967 at 55 years and six months old. ","assets/images/DonaldSangster.jpg","Donald Sangster"],
				["Who is the longest serving prime minister in Jamaica?",["Sir Alexander Bustamante","Edward Seaga","Norman Manley","P. J. Patterson" ],"P. J. Patterson","P. J. Patterson, served as the sixth Prime Minister of Jamaica from 1992 to 2006. He was the leader of the People's National Party from 1992 to 2006","assets/images/PJPatterson.jpg","P. J. Patterson"],
				["Who was the first prime minister of independent Jamaica?",["Norman Manley","Hugh Shearer","Sir Alexander Bustamante","Portia Simpson Miller" ],"Sir Alexander Bustamante","Sir Alexander Bustamante was Jamaica's first Prime Minister. He served from August 6, 1962 to February 27, 1967. He was made a national hero in 1969.","assets/images/AlexanderBustamante.jpg","Alexander Bustamante"],
				[" Which was the first political party founded in Jamaica.",["Jamaica Labour Party","People’s National Party","Jerusalem Bread Foundation","People’s Political Party" ],"People’s Political Party","National Hero Marcus Garvey’s People’s Political Party (PPP) was Jamaica’s first modern political party founded in September 1929.","assets/images/MarcusGarvey.jpg","Marcus Garvey"],
				["Who is the longest serving Member of Parliament in Jamaica.",["Mike Henry","Alexander Bustamante","Derrick Smith","Edward Seaga" ],"Edward Seaga ","The Hon. Edward Seaga is the longest serving Member of Parliament (MP) in modern Caribbean history.He's served 43 consecutive years as MP for West Kingston, the Hon. Edward Seaga is the longest serving MP.","assets/images/EdwardSeaga.jpg","Edward Seaga"],
				["youngest Prime Minister in Jamaican history",["Devon Black","Neville Martin","Omar Reid","Andrew Holness" ],"Andrew Holness","The Hon. Andrew Holness is the first Jamaican head of Government to be born after the country gained Independence in 1962.Born in 1972, Holness is also the youngest Prime Minister in Jamaican history.","assets/images/AndrewHolness.jpg","Andrew Holness"],
				["The first Jamaican head of Government to be born after Independence in 1962.",["Devon Black","Portia Simpson-Miller","Andrew Holness ","Bruce Golding" ],"Andrew Holness","The Hon. Andrew Holness is the first Jamaican head of Government to be born after the country gained Independence in 1962.Born in 1972, Holness is also the youngest Prime Minister in Jamaican history.","assets/images/AndrewHolness.jpg","Andrew Holness"],
				["Which Jamaican election had the narrowest victory",["2016","1962","1976","1993" ],"2016","General elections were held in Jamaica on 25 February 2016. The elections were largely a contest between the governing People's National Party (PNP) and the opposition Jamaica Labour Party (JLP). The result was a narrow victory for the JLP, which won 32 of the 63 seats.","assets/images/AndrewHolness.jpg","Andrew Holness"],
				["Who is first female Prime Minister in the Caribbean.",["Portia Simpson Miller","Ertha Pascal-Trouillot","Dame Mary Eugenia Charles ","Claudette Werleigh" ],"Dame Mary Eugenia Charles ","Portia Simpson Miller is the first female prime minister of Jamaica. However the first Dame Mary Eugenia Charles of Dominica was the first female Prime Minister in the Caribbean, with her first term beginning in July 1980.","assets/images/DameMaryEugeniaCharles.jpg","DameMaryEugeniaCharles"],
				["Which Party won the 1962 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"Jamaica Labour Party","General elections were held in Jamaica on 10 April 1962. The result was a victory for the Jamaica Labour Party, which won 26 of the 45 seats. Voter turnout was 72.9%","assets/images/JLP2.jpg","JLP"],
				["Which Party won the 1967 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"Jamaica Labour Party","General elections were held in Jamaica on 21 February 1967.The result was a victory for the Jamaica Labour Party, which won 33 of the 53 seats. Voter turnout was 82.2%","assets/images/JLP2.jpg","JLP"],
				["Which Party won the 1972 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"People's National Party","General elections were held in Jamaica on 29 February 1972. The result was a victory for the People's National Party, which won 37 of the 53 seats. Voter turnout was 78.9%.","assets/images/PNP.png","PNP"],
				["Which Party won the 1976 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"People's National Party","General elections were held in Jamaica on 15 December 1976. The result was a victory for the People's National Party, which won 47 of the 60 seats. Voter turnout was 85.2%","assets/images/PNP.png","PNP"],
				["Which Party won the 1980 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"Jamaica Labour Party","General elections were held in Jamaica on 30 October 1980. The result was a victory for the Jamaica Labour Party, which won 51 of the 60 seats. Voter turnout was 86.9%","assets/images/JLP2.jpg","JLP"],
				["Which Party won the 1983 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"Jamaica Labour Party","Early general elections were held in Jamaica on 15 December 1983. The election was boycotted by the main opposition party, the People's National Party, in protest at the refusal of the ruling Jamaican Labour Party to update the electoral roll.  It allowed the Labour Party to win all 60 seats in the House of Representatives, with their leader, Edward Seaga, continuing as Prime Minister.","assets/images/JLP2.jpg","JLP"],
				["Which Party won the 1989 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"People's National Party","General elections were held in Jamaica on 9 February 1989. The result was a victory for the People's National Party, which won 45 of the 60 seats. Voter turnout was 78.4%","assets/images/PNP.png","PNP"],
				["Which Party won the 1993 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"People's National Party","General elections were held in Jamaica on 30 March 1993. The result was a victory for the People's National Party, which won 52 of the 60 seats. Voter turnout was 67.4%","assets/images/PNP.png","PNP"],
				["Which Party won the 1997 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"People's National Party","General elections were held in Jamaica on 18 December 1997. The ruling People's National Party of Prime Minister P. J. Patterson won 50 of the 60 seats defeating the main opposition Jamaica Labour Party.","assets/images/PNP.png","PNP"],
				["Which Party won the 2002 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"People's National Party","General elections were held in Jamaica on 16 October 2002. The result was a victory for the People's National Party, which won 34 of the 60 seats, whilst voter turnout was 59.1%","assets/images/PNP.png","PNP"],
				["Which Party won the 2007 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"Jamaica Labour Party","General elections were held in Jamaica on 3 September 2007. They had originally been scheduled for 27 August 2007 but were delayed due to Hurricane Dean. The preliminary results indicated a slim victory for the opposition Jamaican Labour Party led by Bruce Golding, which grew by two seats from 31-29 to 33-27 after official recounts. The JLP defeated the People's National Party after eighteen years of unbroken governance. ","assets/images/JLP2.jpg","JLP2"],
				["Which Party won the 2012 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"People's National Party","The 2012 Jamaican Government Election was held on 26 March 2012 in Jamaica. The People's National Party secured a landslide victory by winning 151 divisions to the Jamaica Labour Party's 75.","assets/images/PNP.png","PNP"],
				["Which Party won the 2016 General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"Jamaica Labour Party","General elections were held in Jamaica on 25 February 2016. The elections were largely a contest between the governing People's National Party (PNP) and the opposition Jamaica Labour Party (JLP). The result was a narrow victory for the JLP, which won 32 of the 63 seats. One political commentator described the poll as the closest election Jamaica has ever had","assets/images/JLP2.jpg","JLP2"],
				["Which Party serve the longest consecutive term of governance",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"People's National Party","General elections were held in Jamaica on 3 September 2007 resulted in a slim victory for the opposition Jamaican Labour Party.  The JLP defeated the People's National Party after eighteen years of unbroken governance. ","assets/images/PNP.png","PNP"],
				["Which Prime Minister won the 1962 General Election",["Norman Manley","Alexander Bustamante","Donald Sangster","Hugh Shearer" ],"Alexander Bustamante","Sir William Alexander Clarke Bustamante GBE PC (24 February 1884 – 6 August 1977) was a Jamaican politician and labour leader who in 1962 became the first prime minister of Jamaica. He founded the Bustamante Industrial Trade Union following the 1938 labour riots, and the Jamaican Labour Party in 1943. Bustamante is honoured in Jamaica with the title National Hero of Jamaica in recognition of his achievements.","assets/images/AlexanderBustamante.jpg","Alexander Bustamante"],
				["Which Prime Minister won the 1967 General Election",["Norman Manley","Alexander Bustamante","Donald Sangster","Hugh Shearer"],"Donald Sangster","Donald Sangster was prime minister for 48 days. He succeeded Jamaica's first prime minister in political independence, Sir Alexander Bustamante.","assets/images/DonaldSangster.jpg","DonaldSangster"],
				["Which Prime Minister won the 1972 General Election",["Hugh Shearer","Micheal Manley","Edward Seaga","PJ Patterson" ],"Micheal Manley","Michael Norman Manley ON OCC (10 December 1924 – 6 March 1997) was a Jamaican politician who served as the fourth Prime Minister of Jamaica from 1972 to 1980 and from 1989 to 1992. Coming from a prosperous background, Manley was a democratic socialist. According to opinion polls, he remains one of Jamaica's most popular Prime Ministers since independence","assets/images/MichealManley.jpg","Micheal Manley"],
				["Which Prime Minister won the 1976 General Election",["Hugh Shearer","Micheal Manley","Edward Seaga","PJ Patterson" ],"Micheal Manley","Michael Norman Manley ON OCC (10 December 1924 – 6 March 1997) was a Jamaican politician who served as the fourth Prime Minister of Jamaica from 1972 to 1980 and from 1989 to 1992. Coming from a prosperous background, Manley was a democratic socialist. According to opinion polls, he remains one of Jamaica's most popular Prime Ministers since independence","assets/images/MichealManley.jpg","Micheal Manley"],
				["Which Prime Minister won the 1980 General Election",["Hugh Shearer","Micheal Manley","Edward Seaga","PJ Patterson" ],"Edward Seaga","General elections were held in Jamaica on 30 October 1980. The result was a victory for the Jamaica Labour Party, which won 51 of the 60 seats. Voter turnout was 86.9%","assets/images/EdwardSeaga.jpg","Edward Seaga"],
				["Which Prime Minister won the 1983 General Election",["Hugh Shearer","Micheal Manley","Edward Seaga","PJ Patterson"],"Edward Seaga","Early general elections were held in Jamaica on 15 December 1983. The election was boycotted by People's National Party. It allowed the Labour Party to win all 60 seats in the House of Representatives, with their leader, Edward Seaga, continuing as Prime Minister.","assets/images/EdwardSeaga.jpg","Edward Seaga"],
				["Which Prime Minister won the 1989 General Election",["Hugh Shearer","Micheal Manley","Edward Seaga","PJ Patterson" ],"Micheal Manley","Michael Norman Manley ON OCC (10 December 1924 – 6 March 1997) was a Jamaican politician who served as the fourth Prime Minister of Jamaica from 1972 to 1980 and from 1989 to 1992. Coming from a prosperous background, Manley was a democratic socialist","assets/images/MichealManley.jpg","Micheal Manley"],
				["Which Prime Minister won the 1993 General Election",["Micheal Manley","Edward Seaga","PJ Patterson","Bruce Golding"],"PJ Patterson","Percival Noel James Patterson, ON, PC, QC (born 10 April 1935), is a former Jamaican politician who served as the sixth Prime Minister of Jamaica from 1992 to 2006. He was the leader of the People's National Party from 1992 to 2006 and as the Member of Parliament (MP)","assets/images/PJPatterson.jpg","PJPatterson"],
				["Which Prime Minister won the 1997 General Election",["Micheal Manley","Edward Seaga","PJ Patterson","Bruce Golding"],"PJ Patterson","Percival Noel James Patterson, ON, PC, QC (born 10 April 1935), is a former Jamaican politician who served as the sixth Prime Minister of Jamaica from 1992 to 2006. He was the leader of the People's National Party from 1992 to 2006 and as the Member of Parliament (MP)","assets/images/PJPatterson.jpg","PJPatterson"],
				["Which Prime Minister won the 2002 General Election",["Micheal Manley","Edward Seaga","PJ Patterson","Bruce Golding"],"PJ Patterson","Percival Noel James Patterson, ON, PC, QC (born 10 April 1935), is a former Jamaican politician who served as the sixth Prime Minister of Jamaica from 1992 to 2006. He was the leader of the People's National Party from 1992 to 2006 and as the Member of Parliament (MP)","assets/images/PJPatterson.jpg","PJPatterson"],
				["Which Prime Minister won the 2007 General Election",["Portia Simpson-Miller","Edward Seaga","PJ Patterson","Bruce Golding"],"Bruce Golding","Orette Bruce Golding (born 5 December 1947) is a former Jamaican politician who served as eighth Prime Minister of Jamaica from 11 September 2007 to 23 October 2011. He is a member of the Jamaica Labour Party which he led from 2005 to his resignation in 2011.","assets/images/BruceGolding.jpg","Bruce Golding"],
				["Which Prime Minister won the 2012 General Election",["Portia Simpson-Miller","Edward Seaga","PJ Patterson","Bruce Golding"],"Portia Simpson-Miller","Portia Lucretia Simpson-Miller is a Jamaican politician. She served as Prime Minister of Jamaica from March 2006 to September 2007 and again from 5 January 2012 to 3 March 2016.","assets/images/PortiaSimpsonMiller.jpg","Portia Simpson-Miller"],
				["Which Prime Minister won the 2016 General Election",["Portia Simpson-Miller","Andrew Holness","PJ Patterson","Bruce Golding"  ],"Andrew Holness","General elections were held in Jamaica on 25 February 2016. The elections were largely a contest between the governing People's National Party (PNP) and the opposition Jamaica Labour Party (JLP). The result was a narrow victory for the JLP, which won 32 of the 63 seats. Andrew Holness was sworn in as Prime Minister on 3 March 2016, succeeding People's National Party (PNP) leader Portia Simpson-Miller.","assets/images/AndrewHolness.jpg","Andrew Holness"],
				["Which Jamaican Prime Minister never won a General Election",["Jamaica Labour Party","People's National Party","Independent Labour Party","Jamaica Independent Movement" ],"Hugh Shearer","Hugh Lawson Shearer was a Jamaican politician and trade unionist, who served as the third Prime Minister of Jamaica, from 1967 to 1972, after Donald Sangster served was prime minister for 48 days succumbing to illness.Sangster died on April 11, 1967.","assets/images/HughShearer.jpg","Hugh Shearer"]
   ];







//=====================================GENERAL COUNTRY ARRAY===================================	
var country=[
				["Who got Jamaica its first gold medal in a women’s event in Olympics?",["Merlene Ottey","Deon Hemmings","Grace Jackson","Tayna Lawrence" ],"Deon Hemmings","Deon Hemmings born 9 October 1968 in Saint Ann, Jamaica, is a former female 400 metres hurdler. Hemmings was the first ever Jamaican woman to win an Olympic Gold when she won the 400m Hurdles at the 1996 Olympics breaking the Olympic record which stood to 2004","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["Which is the official language of Jamaica?",["Jamaican","English","Patois","Patwah" ],"English","The official language is Jamaican Standard English (JSE) or Standard Jamaican English (SJE), which is used in all domains of public life, including the government, the legal system, the media, and education. However, the primary spoken language is an English-based creole called Jamaican Patois (or Patwa).","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["What is the area of Jamaica?",["4,324 sq. mi.","4,244 sq. mi.","4,322 sq. mi.","4,926 sq. mi." ],"4,244 sq. mi.","Jamaica is an island country situated in the Caribbean Sea, consisting of the third-largest island of the Greater Antilles. The island, 10,990 square kilometres, approximately (4,244 sq mi) in area, lies about 145 kilometres (90 mi) south of Cuba","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["Which is the longest river in Jamaica?",["Green River","Yallahs River","Black River","Rio Minho" ],"Rio Minho","The Rio Minho is the longest river in Jamaica at 92.8 kilometres (57.7 mi). It rises close to the island's geographic centre, flows generally south-southwest and reaches the Caribbean Sea at Carlisle Bay in the central south coast, to the west of the island's southernmost point, Portland Point.","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["Which popular Jamaican radio personality has the following signoff: Father Time, Mother Earth willing, we do it together again.",["Elise Kelly","DahJah","Ron Muschette","Wilmott" ],"Elise Kelly","Elise Kelly the Empress and Queen of Mid Morning radio on Irie FM, Jamaica's #1 Reggae station","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["Pedro Cays, a group of 7 islands located 80 km off the south coast of Jamaica, are considered a part of which parish?",["Manchester","Kingston","St. Elizabeth","Clarendon"],"Kingston","Pedro Cays, at 17°00′N 77°50′W, four small, flat (2 to 5 metres high), low-lying and mostly uninhabited cays, lie about midway along the southern edge of the eastern half of Pedro Bank. The sparse land vegetation consists of six species of plants, none of which are endemic. The cays are regionally important seabird nesting and roosting areas (masked boobies, roseate terns and others) and also provide several endangered turtle species such as hawksbills and loggerheads with nesting grounds. The islets yield some guano and coconuts. More importantly, they represent the primary harvesting area for the largest export of Queen Conch from the Caribbean region. They were occupied by the British in 1863 and made part of Jamaica in 1882. They are considered part of the parish of Kingston, for all purposes except taxes.","assets/images/jamaicanMapFlag.jpg","jamaican map"],
				["In October 2007, the then Prime Minister's did not use his first name.  His first name is:",["Patroe","Orette","Fitzalbert","Augustus"],"Orette","Orette Bruce Golding (born 5 December 1947) is a former Jamaican politician who served as eighth Prime Minister of Jamaica from 11 September 2007 to 23 October 2011. He is a member of the Jamaica Labour Party which he led from 2005 to his resignation in 2011.","assets/images/jamaicanMapFlag.jpg","jamaican map"]
   ];



//=================================================END OF ARRAYS==============================================
});