var index =0;
var index2 = 0;
var slide1imgs = ['/img/slides1/slideimg1.jpg','/img/slides1/slideimg2.jpg','/img/slides1/slideimg3.jpg','/img/slides1/slideimg4.jpg','/img/slides1/slideimg5.jpg'];
var slide2imgs = ['/img/slides2/slideimg1.jpg','/img/slides2/slideimg2.jpg'];
function nextslide(n)
{
    slideshow(index += n);
}
function slideshow(n){
    if(n>slide1imgs.length-1){n = 0}
    if(n<0){n = slide1imgs.length-1}
    document.getElementById("slide1").src = slide1imgs[n];
    index=n;
}
function nextslide2(n)
{
    slideshow2(index2 += n);
}
function slideshow2(n){
    if(n>slide2imgs.length-1){n = 0}
    if(n<0){n = slide2imgs.length-1}
    document.getElementById("slide2").src = slide2imgs[n];
    index2=n;
}
// slideshow(index);
// slideshow2(index2);
setInterval(nextslide,5000,1);
setInterval(nextslide2,6000,1);


//Fixed Menu :

window.onscroll = function() {fixfunction()};
var nav = document.getElementById("nav");
var drop = document.getElementsByClassName("drop");
var i;

var topofset = nav.offsetTop;

function fixfunction() {
    if (window.pageYOffset > topofset) {
      nav.classList.add("fixnav");
      for(i=0;i<drop.length;i++)
        {
            drop[i].classList.add("fixnav");
        }
    } 
    else {
      nav.classList.remove("fixnav");
      for(i=0;i<drop.length;i++)
      {
          drop[i].classList.remove("fixnav");
      }
    }
}

//Dropdown menu :
function dropmen(){
    document.getElementById("dropmen").style.display="block";
}
function dropmenl(){
    document.getElementById("dropmen").style.display="none";
}
function dropwomen(){
    document.getElementById("dropwomen").style.display="block";
}
function dropwomenl(){
    document.getElementById("dropwomen").style.display="none";
}
function dropcustom(){
    document.getElementById("dropcustom").style.display="block";
}
function dropcustoml(){
    document.getElementById("dropcustom").style.display="none";
}