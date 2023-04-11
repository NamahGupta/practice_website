var gamesq = [];
var gamec = ["r", "g", "b", "y"];
function random (){var a = Math.random();
var b = a*4;
var c = Math.floor(b);
var d = gamec[c];
gamesq.push(d);}
random();
 var concat = ("#"+gamesq);
$(".btn").on("click",function(){ 
    setTimeout(function () {$(concat).fadeOut(); $(concat).fadeIn()},100);
}); 
/*var concat ;
$(".btn").on("click",function(){ 
   var input = this.id;
    var concat = ("#"+input);
    setTimeout(function () {$(concat).fadeOut();$(concat).fadeIn()},100);
}); */
alert(gamesq);
