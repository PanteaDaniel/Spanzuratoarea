
var hiddenWord=words.word[random(0,3)];
var shownWord=fillWord(hiddenWord.length);
var counter=0;
function random(min, max)
{
  return Math.floor(Math.random() * (max - min) ) + min;
}
function fillWord(length)
{
  var word="";
  for(i=0; i<length; i++)
    word+="-";
  return word;
}
function checkLetter(letter, button)
{

  var pos=0;
  console.log(letter);
  document.getElementById(button.id).disabled = true;
  var newPos= hiddenWord.indexOf(letter, pos);
  console.log(hiddenWord);
  console.log(newPos);
  if(newPos==-1)
  {
    counter++;
    switch (counter)
    {
      case 1:

        document.getElementById("spanzuratoarea").src ="images/spanzuratoarea1.png";
        break;
      case 2:
        document.getElementById("spanzuratoarea").src ="images/spanzuratoarea2.png";
        break;
      case 3:
        document.getElementById("spanzuratoarea").src ="images/spanzuratoarea3.png";
        break;
      case 4:
          document.getElementById("spanzuratoarea").src ="images/spanzuratoarea4.png";
          break;
      case 5:
          document.getElementById("spanzuratoarea").src ="images/spanzuratoarea5.png";
          break;
      case 6:
          document.getElementById("spanzuratoarea").src ="images/spanzuratoarea6.png";
          break;
      case 7:
          document.getElementById("spanzuratoarea").src ="images/spanzuratoarea7.png";
          break;
      case 8:
          document.getElementById("spanzuratoarea").src ="images/spanzuratoarea8.png";
          break;
      case 9:
          document.getElementById("spanzuratoarea").src ="images/spanzuratoarea9.png";
          break;
      case 10:
          document.getElementById("spanzuratoarea").src ="images/spanzuratoarea10.png";
          document.getElementById("infoText").innerHTML = "Ai Pierdut :(";
          document.getElementById("infoText").style.display = "block";
          document.getElementById("playAgainBtn").style.display = "block";
          break;
    }
  }


console.log(shownWord);
  while(newPos != -1 )
  {

    console.log("working");
    shownWord =  shownWord.substring(0, newPos) + letter + shownWord.substring(newPos + 1);
    console.log("shownWord");
    document.getElementById("hiddenWord").innerHTML =shownWord;
    pos=newPos+1;
    newPos= hiddenWord.indexOf(letter, pos);
  }
  if(shownWord.indexOf("-") == -1)
  {
    if(counter<10)
      document.getElementById("infoText").innerHTML = "Felicitari!";
    else
      document.getElementById("infoText").innerHTML = "In sfarsit...";
    document.getElementById("buttons").style.display = "none";

    document.getElementById("playAgainBtn").style.display = "block";
  }
}

function playAgain()
{
  hiddenWord=words.word[random(0,3)];
  shownWord=fillWord(hiddenWord.length);
  document.getElementById("hiddenWord").innerHTML =shownWord;
  counter=0;
  document.getElementById("spanzuratoarea").src ="";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("infoText").innerHTML = "Apasa litera aleasa";
  document.getElementById("playAgainBtn").style.display = "none";
  $("button").prop("disabled", false);
}

document.getElementById("hiddenWord").innerHTML =shownWord;
