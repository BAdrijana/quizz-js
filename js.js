$(function () {


//popup

let popup = $(".popup");
let dropdown = $(".dropdown");
popup.hide();

// The slideToggle() method toggles between slideUp() and slideDown() 
//for the selected elements.
//This method checks the selected elements for visibility. 
//slideDown() is run if an element is hidden. 
//slideUp() is run if an element is visible - This creates a toggle effect.

dropdown.on('click', function(){
	popup.slideToggle();
	popup.toggleClass('down'); 
	if(popup.hasClass('down')){
		 $(this).find('i')
		 .removeClass('fas fa-caret-down')
		 .addClass('fas fa-caret-up');
	}else{
		$(this).find('i')
		 .removeClass('fas fa-caret-up')
		 .addClass('fas fa-caret-down ');
	}

});





// slider

// let position = 0;
// let slider = $('.img_slide');
// let count = slider.length;
// let sliderWidth = slider.width();
//  $('.slide').css('width', sliderWidth * count);
// setInterval(SlideImage, 2000);

// function SlideImage() {
//  if (position == count - 1)
//  position = 0;
//  else
//   count++;
//  $('.slide').animate({
//   'marginLeft': sliderWidth * (-position)
//   });
//   }


// change img

$('.slides img:first').addClass('top');
//to change class
let change = function (){
  let current = $('.slides img.top');
  let next = current.next();
  if(!next.length){
    next = $('.slides img:first');
    next.addClass('top');
    current.removeClass('top');
  }else{
  	next.css({opacity:0.0})
  	.addClass('top') 
 	.animate({opacity: 1.0}, 500, function(){
 		current.removeClass('top');
 	}
 )};

}

//The setInterval() method calls a function or evaluates an expression 
//at specified intervals (in milliseconds).
 setInterval(change,3000);


//*******************************
// ---------- Quizz -------------
//*******************************

	let html = $(".htmlcss");
	let js = $(".javascript");

	let currentQuestion = 0;
	let correct = 0;
	let quizOver = false;
	let nextButton = $(".nextButton");
	let nextButton2 = $(".nextButton2");
	let message = $(".quizMessage");


	let quizContainer = $(".quizContainer").hide();
	

	html.on('click', function(){
		currentQuestion = 0;
		nextButton2.hide();
		quizContainer.show();
		$(".choiceList>li").remove();
		js.removeClass('active');
		$(this).addClass('active');
		nextButton.show().text('Next Question');
		$(".quizMessage").hide(); 


	let Question = [
		{
			question: "Who is making the Web standards?",
  			choices: [" Google", 
  					  " The World Wide Web Consortium",  //correct
  					  " Mozilla", 
  					  " Microsoft"],
    		answer: 1
		},
			{
			question: "Which of these text properties is not supported by IE?",
  			choices: [" Text-shadow",
  					  " Word-wrap", //correct
  					  " Both A,B",
  					  " None of these"],
    		answer: 1
		},
			{
			question: "Which HTML attribute is used to define inline styles?",
  			choices: [" font",
  					  " styles", 
  					  " style ", //correct
  					  " class "],
    		answer: 2
		},
			{
			question: " In HTML, which attribute is used to specify that an input field must be filled out?",
  			choices: [" validate", 
  					  " placeholder",
  					  " required", //correct
  					  " formvalidate"],
    		answer: 2
		},
			{
			question: "In the following code snippet, what value is given for the left margin: margin: 5px 10px 3px 8px;?",
  			choices: [" 3px ",
  					  " 10px", 
  					  " 5px ",  
  					  " 8px "],//correct
    		answer: 3
		}

	];
		

	displayCurrentQuestion();

	nextButton.on("click", function () {

		if (!quizOver) {
			//To get the value from the selected radioName use :checked
            value = $("input[type='radio']:checked").val();
            console.log(value);
            if (value == undefined) {
                message.text("Please choise your answer");
                message.show();
            }else{
            	message.hide();
	            	 if (value == Question[currentQuestion].answer) {
	                    correct++;
	                }
	                	if(!html.hasClass('active')){
	                		console.log("reset");
	                	}
	                currentQuestion++;
	            	 if (currentQuestion < Question.length) {
	            	 	$(".choiceList>li").remove();
	                    displayCurrentQuestion();
	            	} else{
	            	quizOver = true;
	            	message.text(" Your score: "+ correct + " correct answers")
	            	message.show();
	            	nextButton.text('Play Again?')
	            	}
        
            }


		}else{
			
        	reset();
            displayCurrentQuestion();
		}
		
	});

	//*************
	// Display Question Function
	//************
	function displayCurrentQuestion() {
		let question = Question[currentQuestion].question;
	    let questionClass = $(".question");
	    let choicesN = Question[currentQuestion].choices.length;
	    let choiceList = $(".choiceList");
	    let choice;

	    $(questionClass).text(question);
	    
	    for (i = 0; i < choicesN; i++) {
	        choice = Question[currentQuestion].choices[i];
	        $('<li><input type="radio" value=' + i + ' name="radio" />' + choice + '</li>').appendTo(choiceList);
	    };
	     
};

	//********
	// RESET Function
	// *******
	function reset() {
		quizOver = false;
	    $(".choiceList>li").remove();
	    currentQuestion = 0;
	    correct = 0;  
	    nextButton.text('Next question');
	    $(".quizMessage").hide(); 
};

	});




// js
// *************



   js.on('click', function(){
   
   	currentQuestion = 0;
   	$(".choiceList>li").remove();
   	nextButton.hide();
   	html.removeClass('active');
	$(this).addClass('active');
	nextButton2.show().text('Next Question');
	$(".quizMessage").hide(); 
	quizContainer.show();


	let Question = [
		{
			question: "Inside which HTML element do we put the JavaScript?",
  			choices: [" js", 
  					  " javascript",
  					  " scripting",  
  					  " script"], //correct
    		answer: 3
		},
			{
			question: "IsNaN() Evalutes and argument to determine if given value:",
  			choices: [" Is Not a Number", //correct
  					  " Is Not a Null",
  					  " Is Not a New Object",
  					  " None Of The Above"],
    		answer: 0
		},
			{
			question: "Which is not a primitive data type in JavaScript?",
  			choices: [" Boolean",
  					  " Number", 
  					  " String ", //correct
  					  " Character "],
    		answer: 2
		},
			{
			question: " Which object is the server-side JavaScript object?",
  			choices: [" Database", 
  					  " FileUpload", //correct
  					  " Cursor", 
  					  " Client"],
    		answer: 1
		},
			{
			question: "Which built-in method removes the last element from an array and returns that element?",
  			choices: [" last() ",
  					  " get()", 
  					  " pop() ",  //correct
  					  " None of the above. "],
    		answer: 2
		}

	];
		

	displayCurrentQuestion();

	nextButton2.on("click", function () {


		if (!quizOver) {
			//To get the value from the selected radioName use :checked
            value = $("input[type='radio']:checked").val();
            console.log(value);
            if (value == undefined) {
                message.text("Please choise your answer");
                message.show();
            }else{
            	message.hide();
	            	 if (value == Question[currentQuestion].answer) {
	                    correct++;
	                }
	                currentQuestion++;
	            	 if (currentQuestion < Question.length) {
	            	 	$(".choiceList>li").remove();
	                    displayCurrentQuestion();
	            	} else{
	            	quizOver = true;
	            	message.text(" Your score: "+ correct + " correct answers")
	            	message.show();
	            	nextButton2.text('Play Again?')
	            	}
        
            }


		}else{
		
        	reset();
 			displayCurrentQuestion() 
               
		}
		
	}); // end of next button function

	//*************
	// Display Question Function
	//************
	function displayCurrentQuestion() {
		let question = Question[currentQuestion].question;
	    let questionClass = $(".question");
	    let choicesN = Question[currentQuestion].choices.length;
	    let choiceList = $(".choiceList");

	    $(questionClass).text(question);

	    let choice;

	    for (i = 0; i < choicesN; i++) {
	        choice = Question[currentQuestion].choices[i];
	        $('<li><input type="radio" value=' + i + ' name="radio" />' + choice + '</li>').appendTo(choiceList);
	    };
	     
};

//********
	// RESET Function
	// *******
	function reset() {
	quizOver = false;
   	$(".choiceList>li").remove();
    currentQuestion = 0;
    correct = 0;  
    nextButton2.text('Next question');
    $(".quizMessage").hide(); 
};

	});


let close = $('.close');
close.on('click', function(){
	quizContainer.hide();
	if(html.hasClass('active') || js.hasClass('active') ){
		html.removeClass('active');
		js.removeClass('active');
	}
	
});

});
	
