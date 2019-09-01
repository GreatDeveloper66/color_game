/*jshint esversion:6*/
/*global document*/
/*global $*/
/*global window*/
/*global console*/

$(document).ready(function () {
	let gameMode = "NOVICE";
	let gameFormat = "RGBA";
	let colorState = "";
	let randomSquare = 0;
	let randomColor = "";

	function renderBoard() {
		$("span#mainHeading").text("Play the Color Game");
		$("button#reset").text("New Colors");
		$("body").css("background", "rgba(0, 0, 255, 0.1)");
		let numSquares = gameMode === "BEGINNER" ? 3 : gameMode === "NOVICE" ? 6 : 9;
		let squares = [];
		let colorString = "";
		let colorStrings = [];
		
		for (let i = 0; i < numSquares; i++) {
			
			if (gameFormat === 'RGB') {
				let r = Math.floor(Math.random() * 256);
				let g = Math.floor(Math.random() * 256);
				let b = Math.floor(Math.random() * 256);
				colorString = "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")";
			} else if (gameFormat === 'RGBA') {
				let r = Math.floor(Math.random() * 256);
				let g = Math.floor(Math.random() * 256);
				let b = Math.floor(Math.random() * 256);
				let o = Math.floor(Math.random() * 100) / 100;
				colorString = "rgba(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ", " + o.toString() + ")";
			} else {
				colorString = "#" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16);
			} 
			squares.push(`<div class="square" id="${i}"></div>`);
			colorStrings.push(colorString);
		}

		randomSquare = Math.floor(Math.random() * numSquares);
		randomColor = colorStrings[randomSquare];
		$("span#colorDisplay").text(`Pick the Square that matches ${randomColor}`);
		$("#container").html($(squares.join('')));

		for (let i = 0; i < numSquares; i++) {
			
			let selector = `.square:nth-of-type(${i + 1})`;
			$(selector).css("background", colorStrings[i]);
		}

		$("div.square").click(function () {
			let clickedColor = $(this).css("background");
			let clickedSquare = parseInt($(this).attr('id'));
	
			if (clickedSquare === randomSquare) {
				$("span#mainHeading").text("You picked the right color.");
				$("button#reset").text("Play Again?");
				$("div#container").html("");
				$("body").css("background", clickedColor);
			} else {
				$("span#mainHeading").text("Sorry, try again.");
			}
		});
	}

	renderBoard();

	$(".format").click(function () {
		$(".format").removeClass("selected");
		$(this).addClass("selected");
		gameFormat = $(this).text();
		
		renderBoard();

	});
	$(".mode").click(function () {
		$(".mode").removeClass("selected");
		$(this).addClass("selected");
		gameMode = $(this).text();
		renderBoard();
	});
	$("button#reset").click(function () {
		renderBoard();
	});
});