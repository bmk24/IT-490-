function getUser(username){
    console.log('Retrieving User Info');
    //let xhr = new XMLHttpRequest();
    let xhr = new XMLHttpRequest();
  
    var modifier; 
  var currency;
  var jsonResult;
  var head;
  
  head="getUser";
  xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?username="+ username+"&head="+head, false);
  
  xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200){
      jsonResult=JSON.parse(xhr.responseText);
      console.log(jsonResult);
      playerStats.currencyCode = jsonResult.currencyCode;
      playerStats.spriteType = jsonResult.characterName;
      playerStats.coin=jsonResult.currentPoints;
      playerStats.username=jsonResult.username;
      playerStats.health=jsonResult.playerLives;
      playerStats.sprite=jsonResult.spritePack;
      playerStats.currentLevel=parseInt(jsonResult.currentLevel);
      playerStats.levelsComplete=jsonResult.levelsComplete;
      playerStats.maxPoints=jsonResult.maxPoints;
    //playerStats.velocity.x 
  }
  };
  
  xhr.onerror = function() {
  alert("Request failed");
  };
  xhr.send();
  }
  function characterStats(character){
      
    let xhr = new XMLHttpRequest();
    var modifier; 
    var currency;
    var jsonResult;
    var head;
    //sets username and gets associated user data
    //character="Vario";
    head="getCharacter";
    xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?character="+ character +"&head="+head, false);
    
    
    
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
          //sent back in form 
          jsonResult=JSON.parse(xhr.responseText);

          playerStats.jumpHeight = jsonResult.jumpHeight;
         // playerStats.health = jsonResult.health;
          playerStats.characterName = jsonResult.name;
          playerStats.speed = jsonResult.speed;
console.log(jsonResult);
    }
    };
    
    xhr.onerror = function() {
      alert("Request failed");
    };
    xhr.send();
    
    }  
    function getModifer(currency){
        let xhr = new XMLHttpRequest();
    var modifier; 
    var currency;
    var jsonResult;
    var head;
    //sets currency test data
    //currency="JPY";
    head="getCurrency";
    xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?currency="+ currency+"&head="+head, false);
    
    
    
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
          //sent back in form {'currency':(name),difference:difference in form +-75,20,10 etc}
          jsonResult=JSON.parse(xhr.responseText);
          console.log(jsonResult);
          modifier=jsonResult.difference;
          console.log(modifier);
          playerStats.modifier=modifier;
    }
    };
    
    xhr.onerror = function() {
      alert("Request failed");
    };
    xhr.send();
    }
    function getPoints(username){
        let xhr = new XMLHttpRequest();
    var modifier; 
    var currency;
    var jsonResult;
    var head;
    //sets username and gets associated user data
    //username="user1";
    head="getPoints";
    xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?username="+ username +"&head="+head, false);
    
    
    
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
          //sent back in form 
          
          jsonResult=JSON.parse(xhr.responseText);
          console.log(jsonResult);
    }
    };
    
    xhr.onerror = function() {
      alert("Request failed");
    };
    xhr.send();
    }
    function setChar(username,character){
        let xhr = new XMLHttpRequest();
    var modifier; 
    var currency;
    var jsonResult;
    var head;
    //sets username and gets associated user data
    //username="user1";
    head="setCharacter";
    //character="Vario";
    xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?username="+ username +"&head="+head+"&character="+character, false);
    
    //nothing sent back since it is a set. Could report success/failure but not worthwhile atm. Tested and does work.
    
    xhr.send();
    }   
    function setCurrency(username,currency){
        let xhr = new XMLHttpRequest();
    var modifier; 
    var currency;
    var jsonResult;
    var head;
    //sets username and gets associated user data
    //username="user1";
    head="setCurrency";
    //currency="RUB";
    xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?username="+ username +"&head="+head+"&currency="+currency, false);
    
    //nothing sent back since it is a set. Could report success/failure but not worthwhile atm. Tested and does work.
    
    xhr.send();
    } 
    function setStats(currMap){
    
        let xhr = new XMLHttpRequest();
      
        var head;
        //sets username and gets associated user data
        
        head="setInfo";
        

        xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?username="+ playerStats.username +"&head="+head+"&currency="+playerStats.currencyCode+ "&levelsComplete="+playerStats.levelsComplete+
        "&currentLevel="+parseInt(playerStats.currentLevel)+
        "&currentPoints="+ playerStats.coin+
        "&maxPoints="+playerStats.maxPoints+
        "&currentLives="+playerStats.health+
        "&spritePack="+playerStats.sprite+
        "&character="+playerStats.spriteType, false);
        
        //nothing sent back since it is a set. Could report success/failure but not worthwhile atm. Tested and does work.
        
        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200){
              //sent back in form 
              
              jsonResult=JSON.parse(xhr.responseText);
              console.log(jsonResult);
        }
        };
        
        xhr.onerror = function() {
          alert("Request failed");
        };
        xhr.send();
        }
    function setPoints(username,points){
        let xhr = new XMLHttpRequest();
    var modifier; 
    var currency;
    var jsonResult;
    var head;
    //sets username and gets associated user data
    //username="user1";
    head="setPoints";
    //points=11;
    xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?username="+ username +"&head="+head+"&points="+points, false);
    
    //nothing sent back since it is a set. Could report success/failure but not worthwhile atm. Tested and does work.
    
    xhr.send();
    }



/*
    setPoints(username,points)
    setStats(username,levelsComplete,currentLevel,currentPoints,maxPoints,spritePack,character,currency,currentLives)
    setCurrency(username,currency)
    getPoints(username)
    getModifer(currency)
    characterStats(character)
    getUser(username)

*/
function setShop(id,price){
  let xhr = new XMLHttpRequest();
  var modifier; 
  var currency;
  var jsonResult;
  var head;
  //sets username and gets associated user data
  //username="user1";
  head="setShop";
  //points=11;
  xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?itemID="+ id +"&head="+head+"&itemPrice="+price, false);
  
  //nothing sent back since it is a set. Could report success/failure but not worthwhile atm. Tested and does work.
  
  xhr.send();
  }