<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$connection=new mysqli("3.21.114.39", "myuser", "MarioGalaxy1*", "marioGalaxy");
$query = "select * from users";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
print_r($row);
$count = mysqli_num_rows($result);
//3.1.2 If the posted values are equal to the database values, then session will be created for the user.
if ($count >= 1){
echo "Succes\n";
}else{
    echo "Not Succes";
}
?>