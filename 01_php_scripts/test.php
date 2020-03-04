<?php
$uemail="user2";
$upassword="password";
$connection=new mysqli("192.168.0.15", "myuser", "Marioplayer1*", "elsdb");
$query = "select * from users where username='$uemail'";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
$row = $result -> fetch_row();
print_r($row);
if ($count >= 1){
    
}
?>