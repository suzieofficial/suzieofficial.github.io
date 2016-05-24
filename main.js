window.onload = function(){
  console.log('Main.js is up and running');
}

//Link to JS code for photo-gallery below
//http://www.htmlgoodies.com/beyond/javascript/article.php/3881826/JavaScript-Tutorial-Adding-Rotating-Images-to-Your-Web-Site.htm

var howOften = 5; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<a href='link.htm' ><img class='image' alt='image0 (9K)' src='styles/images/beach.jpg' border='0' /></a>"; //a linked image
    items[1]="<a href='link.htm'><img class='image' alt='image1 (9K)' src='styles/images/boat.jpg' border='0' /></a>"; //a linked image
    items[2]="<a href='link.htm'><img class='image' alt='image2 (9K)' src='styles/images/hiking.jpg' border='0' /></a>"; //a linked image
   items[3]="<a href='link.htm'><img class='image' alt='image3 (9K)' src='styles/images/playlandbeach.jpg' border='0' /></a>"; //a linked image

function rotater() {
    document.getElementById("photo-gallery").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("photo-gallery").innerHTML=items[current]
        if(document.all)
            placeholderdiv.innerHTML=items[current];

    current = (current==items.length-1) ? 0 : current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;
