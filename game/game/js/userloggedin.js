$(document).ready(function() {
});
$("#par").click(function(){
    alert("clicked")
})

function marchant_search(e){
    if(e.target.value=="Category"){
    // get request start here
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText)
                if(this.response==1){
                }
                else{
                    alert("Login failed! Try again");
                }
            }
        }
        //xmlhttp.open("GET", "../01_php_scripts/RabbitMQClientSample.php?type=Ulogin"+"&email="+uemail+"&password="+upassword, true);
        xmlhttp.open("GET", "../01_php_scripts/RabbitMQClientSample.php?type=category", true);
        xmlhttp.send();

        var container=$("#usercontainer")
        var elements = '<select onchange="show_cat(event)">';
        for(x = 0; x < 10; x++) {
            elements = elements + '<option>'+x+'</option>';
        }
        elements=elements+'</select>'
        container.append(elements);
    }
}
function show_cat(e){
    alert(e.target.value)
}