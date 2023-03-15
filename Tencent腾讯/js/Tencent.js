
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
//轮播图开始
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("banner");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
var timer=setInterval(function(){
	slideIndex++
	showSlides(slideIndex);
},3000);
// var banner=document.getElementsByClassName("banner");
// banner.onmouseover=function(){
// 	clearInterval(timer);
// }
// banner.onmouseout=function(){
// 	timer=setInterval(function(){
// 		slideIndex++
// 		showSlides(slideIndex);
// 	},3000);
// }
//轮播图结束


//第二轮播图开始
var slideIndex_Second = 1;
showSlides_Second(slideIndex_Second);

function plusSlides_Second(n) {
  showSlides_Second(slideIndex_Second += n);
}
function showSlides_Second(n) {
  var k;
  var slides_Second = document.getElementsByClassName("banner_Second");
  if (n > slides_Second.length) {slideIndex_Second = 1} 
  if (n < 1) {slideIndex_Second = slides_Second.length}
  for (k = 0; k < slides_Second.length; k++) {
      slides_Second[k].style.display = "none"; 
  }
  slides_Second[slideIndex_Second-1].style.display = "block"; 
}


//最后轮播图开始
var slideIndex_Last = 1;
showSlides_Last(slideIndex_Last);

function plusSlides_Last(n) {
  showSlides_Last(slideIndex_Last += n);
}
function currentSlide_Last(n) {
  showSlides_Last(slideIndex_Last = n);
}
function showSlides_Last(n) {
  var k;
  var slides_Last = document.getElementsByClassName("banner_Last");
  var dots_Last = document.getElementsByClassName("dot_last");
  if (n > slides_Last.length) {slideIndex_Last = 1} 
  if (n < 1) {slideIndex_Last = slides_Last.length}
  for (k = 0; k < slides_Last.length; k++) {
      slides_Last[k].style.display = "none"; 
  }
  for (k = 0; k < dots_Last.length; k++) {
      dots_Last[k].className = dots_Last[k].className.replace(" active_Last", "");
  }
  slides_Last[slideIndex_Last-1].style.display = "block"; 
  dots_Last[slideIndex_Last-1].className += " active_Last";
}
