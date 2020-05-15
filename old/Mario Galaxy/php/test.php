<?php
$uemail="user1";
$upassword="password";
$connection=new mysqli("192.168.0.15", "myuser", "Marioplayer1*", "elsdb");
$query = "select * from users where username='$uemail' and password='$upassword' ";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
if ($count >= 1){
echo "Authorized";
}
?>