const person = prompt("Hii, this is Rosh. Tell me your name first");

if (person != null) {
  document.getElementById("comp").innerHTML =
  "&nbsp &nbsp Hey " + person + ". Enter your name and your partner's name &nbsp";
}



function getInputValue(){
    
    const yourName = document.getElementById("yname").value;
    const partnerName = document.getElementById("pname").value;
    let per = Math.floor(Math.random()*100);
    alert(`${yourName} are you ready for result`);
    document.getElementById('percentage').innerHTML = `${per}%`;
    if(per>90){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName}, You both are made for each other. 😘`;
    }else if(per>80){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName} can be a perfect couple. 😍`;
    }else if(per>60){
        document.getElementById("comp").innerHTML = `${yourName}, you have a good friendship with ${partnerName}. Don't ever think of being in relationship. You may loose your friendship too... 🤗 `;
    }else if(per>50){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName} You both seems to be friends who can do anything for each other. 😊`;
    }else if(per>30){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName} are just friends, Try to spend some time So that you both uderstand each other. 🤔`;
    }else if(per<=30){
        document.getElementById("comp").innerHTML = `${yourName}, Try on someone else. ${partnerName} is not for you. 😒`;
    }

    document.getElementById("percentage").style.display="flex"

    document.getElementById("uncheck").innerHTML = `check again`
    document.getElementById("comp").innerHTML = `you and ${inputVal} are good friends`;
}