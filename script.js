const person = prompt("hey, this is Rosh. Tell me your name first");

if (person != null) {
  document.getElementById("comp").innerHTML =
  "Hey " + person + "\n Looking curious...";
}


function getInputValue(){
    
    const yourName = document.getElementById("yname").value;
    const partnerName = document.getElementById("pname").value;
    let per = Math.floor(Math.random()*100);
    alert(`${yourName}...  Ready for result`);
    document.getElementById('percentage').innerHTML = `${per}%`;
    if(per>90){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName}, You both are made for each other`;
    }else if(per>80){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName} can have a good relationship`;
    }else if(per>60){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName} Don't ever think of having more than friendship`;
    }else if(per>50){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName} You both seems to be best friends`;
    }else if(per>30){
        document.getElementById("comp").innerHTML = `${yourName} and ${partnerName} are just good friendss`;
    }else if(per<=30){
        document.getElementById("comp").innerHTML = `${yourName}, Try on someone else. ${partnerName} is not for you`;
    }
    document.getElementById("comp").innerHTML = `you and ${inputVal} are good friends`;
}