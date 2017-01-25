$(window).load(function() {
	unlockButtons();
});

var getRandomButton = function() {
	var x = Math.floor(Math.random()*4);
	return x;
};

var gameStack = [],
	playerStack = [];

var unlockButtons = function() {
	$("#start-button").on("click", function() {
		resetGame();
		gameTurn();
	});

	$("#b0").on("click", function() {
		userClickHandler("0");
	});
	$("#b1").on("click", function() {
		userClickHandler("1");
	});
	$("#b2").on("click", function() {
		userClickHandler("2");
	});
	$("#b3").on("click", function() {
		userClickHandler("3");
	});

};

var lightUp = function(btnId) {
	$("#b"+btnId).addClass("alternate");
	var timeRef = setTimeout(function() {
		$("#b"+btnId).removeClass("alternate");	
	}, 400);
};

var userClickHandler = function(btnId){
	lightUp(btnId);
};