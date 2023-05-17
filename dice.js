var randno=Math.floor(Math.random()*6  /*0-5*/)+1;
var randimg="images/dice" + randno + ".png";
var img=document.querySelectorAll("img")[0].setAttribute("src", randimg);

var randno2=Math.floor(Math.random()*6)+1;
var randimg2="images/dice" + randno2 + ".png";
var img2=document.querySelectorAll("img")[1].setAttribute("src", randimg2);


if(randno>randno2)
     {document.getElementById("h").innerHTML="!!Player 1 Wins!!";}

else if(randno2>randno)
{
    document.getElementById("h").innerHTML="!!Player 2 Wins!!";
}

else{
    document.getElementById("h").innerHTML="!!DRAW!!";
}



