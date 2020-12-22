function throwDice(){
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    var imageName1 = "images/dice" + num1 + ".png";
    var imageName2 = "images/dice" + num2 + ".png";
    document.querySelector(".img1").setAttribute("src", imageName1);
    document.querySelector(".img2").setAttribute("src", imageName2);
    if(num1 > num2)
    {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }else if(num1 === num2)
    {
        document.querySelector("h1").innerHTML = "Draw!";
    }else
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }
}
window.addEventListener('load', throwDice, false);
