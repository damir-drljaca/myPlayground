var movieButton1 = document.querySelector("#movieButton1");
var movieButton2 = document.querySelector("#movieButton2");
var movieButton3 = document.querySelector("#movieButton3");
var movieButton4 = document.querySelector("#movieButton4");
var movieButton5 = document.querySelector("#movieButton5");
var movieButton6 = document.querySelector("#movieButton6");
var toggledMovieBtn = document.querySelector("#navMovies");
// var bkImgReset = document.querySelector("body");
var colorToggle = document.querySelectorAll("h1, h2, h3, h4, h5, h6");


function onMouseOver(){
	var elements = colorToggle, i, len;
	for (i = 0, len = elements.length; i < len; i++){
		elements[i].style.color = "white";
	}
	//movie icons disappears into a single movie box button
	toggledMovieBtn.style.visibility = "visible";
	movieButton1.style.visibility = "hidden";
	movieButton2.style.visibility = "hidden";
	movieButton3.style.visibility = "hidden";
	movieButton4.style.visibility = "hidden";
	movieButton5.style.visibility = "hidden";
	movieButton6.style.visibility = "hidden";
	
};

function onMouseOut(){
	var elements = colorToggle, i, len;
	for (i = 0, len = elements.length; i < len; i++){
		elements[i].style.color = "black";
	}
	//movie icons reappear as user scroll out

};

function movieBtn(){
	toggledMovieBtn.style.visibility = "visible";
}

function movieBtnOnClick(){
	movieButton1.style.visibility = "visible";
	movieButton1.style.opacity = "1";
	movieButton1.style.transition = "opacity .25s ease-in-out";
	movieButton2.style.visibility = "visible";
	movieButton3.style.visibility = "visible";
	movieButton4.style.visibility = "visible";
	movieButton5.style.visibility = "visible";
	movieButton6.style.visibility = "visible";
	toggledMovieBtn.style.visible = "hidden";
}

// function bkImgReset(){
// 	bkImgReset.style.backgroundImage = ""
// };

movieButton1.addEventListener("click", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.	
	document.querySelector("body").style.backgroundImage = "url(photos/krivina_still1.jpg)";
	onMouseOver();
	movieBtn();
}, false);
// movieButton1.addEventListener("mouseout", function(){
// 	//When mouse out it will change to nautral background
// 	document.querySelector("body").style.backgroundImage = "";
// 	onMouseOut();
// }, false);

movieButton2.addEventListener("mouseover", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
	document.querySelector("body").style.backgroundImage = "url(photos/fuse_still2.jpg)";
	onMouseOver();
	movieBtn();
}, false);

movieButton3.addEventListener("mouseover", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
	document.querySelector("body").style.backgroundImage = "url(photos/womaninpurple1.jpg)";
	onMouseOver();
	movieBtn();
}, false);
movieButton4.addEventListener("mouseover", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
	document.querySelector("body").style.backgroundImage = "url(photos/still_lonely_drive_2.jpg)";
	onMouseOver();
	movieBtn();
}, false);
movieButton5.addEventListener("mouseover", function(){
	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
	document.querySelector("body").style.backgroundImage = "url(photos/mobilni2.jpg)";
	onMouseOver();
	movieBtn();
}, false);

// movieButton6.addEventListener("mouseover", function(){
// 	//When button is hovered over it will show change background to the poser of the movie and also provide a description of the movie.
// // 	document.querySelector("body").style.backgroundImage = "url(photos/womaninpurple1.jpg)";
// // }, false);
// // movieButton6.addEventListener("mouseout", function(){
// // 	//When mouse out it will change to nautral background
// // 	document.querySelector("body").style.backgroundImage = "";
// // }, false);

toggledMovieBtn.addEventListener("click", function(){
	movieBtnOnClick();
})
