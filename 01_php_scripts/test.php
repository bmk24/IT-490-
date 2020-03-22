<?php
$uemail="user1";
$upassword="password";
$connection=new mysqli("3.21.114.39", "myuser", "PASSWORD", "marioGalaxy");
$query = "select * from users";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
if ($count >= 1){
echo "Authorized";
}
?>