var movieButton1 = document.querySelector("#movieButton1");
var movieButton2 = document.querySelector("#movieButton2");
var movieButton3 = document.querySelector("#movieButton3");
var movieButton4 = document.querySelector("#movieButton4");
var movieButton5 = document.querySelector("#movieButton5");
var movieButton6 = document.querySelector("#movieButton6");
var toggledMovieBtn = document.querySelector(".navFilm");
var filmPageToggle = document.querySelector("#filmPageToggle");
var colorToggle = document.querySelectorAll("#h1, #h2, #h3, #h4, #h5, #h6");

//Single Page scroll function jQuery
$('.nav').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});

//To change color of h1, h2, h3, h4, h5, h6 to white accordingly
function onMouseOver(){
	var elements = colorToggle, i, len;
	for (i = 0, len = elements.length; i < len; i++){
		elements[i].style.color = "white";
	};
	//movie icons disappears into a single movie box button
	movieButton1.style.visibility = "hidden";
	movieButton2.style.visibility = "hidden";
	movieButton3.style.visibility = "hidden";
	movieButton4.style.visibility = "hidden";
	movieButton5.style.visibility = "hidden";
	filmPageToggle.style.visibility = "hidden";
	
};

//changes color of h1, h2, h3, h4, h5, h6 to white back to black
function resetPage(){
	var elements = colorToggle, i, len;
	for (i = 0, len = elements.length; i < len; i++){
		elements[i].style.color = "black";
	};
};

//Hide Film by. Igor Drljaca when a film is clicked, and reappear when it is selected.


//films section is clicked again it will show all the movies again.
function filmBtnOnClick(){
	movieButton1.style.visibility = "visible";
	movieButton2.style.visibility = "visible";
	movieButton3.style.visibility = "visible";
	movieButton4.style.visibility = "visible";
	movieButton5.style.visibility = "visible";
	filmPageToggle.style.visibility = "visible";
	document.querySelector("#movieDescription1").style.visibility = "hidden";
	document.querySelector("#movieDescription2").style.visibility = "hidden";
	document.querySelector("#movieDescription3").style.visibility = "hidden";
	document.querySelector("#movieDescription4").style.visibility = "hidden";
	document.querySelector("#movieDescription5").style.visibility = "hidden";
};


//This section changes the film section background to be the poster of the movie
movieButton1.addEventListener("click", function(){
	//When button is clicked it will show change background to the poster of the movie and also provide a description of the movie.
	document.querySelector(".filmSection").style.backgroundImage = "url(photos/krivina_still1.jpg)";
	document.querySelector("#movieDescription1").style.visibility = "visible";
	onMouseOver();
}, false);
movieButton2.addEventListener("click", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
	document.querySelector(".filmSection").style.backgroundImage = "url(photos/fuse_still2.jpg)";
	document.querySelector("#movieDescription2").style.visibility = "visible";
	onMouseOver();
}, false);

movieButton3.addEventListener("click", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
	document.querySelector(".filmSection").style.backgroundImage = "url(photos/womaninpurple1.jpg)";
	document.querySelector("#movieDescription3").style.visibility = "visible";
	onMouseOver();
}, false);
movieButton4.addEventListener("click", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
	document.querySelector(".filmSection").style.backgroundImage = "url(photos/still_lonely_drive_2.jpg)";
	document.querySelector("#movieDescription4").style.visibility = "visible";
	onMouseOver();
}, false);
movieButton5.addEventListener("click", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
	document.querySelector(".filmSection").style.backgroundImage = "url(photos/mobilni2.jpg)";
	document.querySelector("#movieDescription5").style.visibility = "visible";
	onMouseOver();
}, false);

toggledMovieBtn.addEventListener("click", function(){
	filmBtnOnClick();
	resetPage();
	document.querySelector(".filmSection").style.backgroundImage = "";
});


