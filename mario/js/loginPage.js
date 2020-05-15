

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function handleclick(e){
// -----------------------------------------------------------------------user login
	if(e.value=='Ulogin'){
	var uemail=document.getElementById("uemail").value;
	var upassword=document.getElementById("upassword").value;
	event.preventDefault()
	console.log(e.value,uemail,upassword)
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				//console.log(this.responseText)
				if(this.response==1){
                    console.log(this.response)
                    console.log(uemail);
                    localStorage.setItem('USER', uemail);

const saved = localStorage.getItem('USER');
console.log(saved)






// If there are any saved items, update our list
if (saved) {
 console.log(saved);
}
				window.location.href = "game.php";
				}
				else{
					console.log(this.response)
					alert("Login failed! Try again");
				}
				//alert(this.responseText);
            }
        }
		//xmlhttp.open("GET", "../01_php_scripts/RabbitMQClientSample.php?type=Ulogin"+"&email="+uemail+"&password="+upassword, true);
		xmlhttp.open("GET", "../01_php_scripts/RabbitMQClientSample.php?type=Ulogin"+"&uemail="+uemail+"&upassword="+upassword, true);
        xmlhttp.send();
	}
// -----------------------------------------------------------------------user registration
	else if(e.value=='Register as User'){
	//---------------Radio Buttons
	var characters = document.getElementsByName('character');
  var char_selected;
  for(i = 0; i < characters.length; i++) {
    if(characters[i].checked==true){
      char_selected = characters[i].value;
      console.log(char_selected)
    }
  }
  // ------
  var currencies = document.getElementsByName('crncy');
  var crncy_selected;
  for(i = 0; i < currencies.length; i++) {
    if(currencies[i].checked==true){
      crncy_selected = currencies[i].value;
      console.log(crncy_selected)
    }
  }
//---------------Radio Buttons end

	var uemail=document.getElementById("uremail").value;
	var upassword=document.getElementById("urpassword").value;
	event.preventDefault()
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText)
				if(this.response==1){
				//window.location.href = "index.html";
                alert("success!....")
                localStorage.setItem('USER', uemail);
                const saved = localStorage.getItem('USER');
                console.log(saved)
                // If there are any saved items, update our list
                if (saved) {
                 console.log(saved);
                }
                                window.location.href = "game.php";
				}
				else{
					alert("failed! Try again");
				}	
            }
        }
		console.log(char_selected,crncy_selected)
		xmlhttp.open("GET", "../01_php_scripts/RabbitMQClientSample.php?type=uregistration"+"&uemail="+uemail+"&upassword="+upassword+"&char="+char_selected+"&cur="+crncy_selected, true);
        xmlhttp.send();
	}
}
