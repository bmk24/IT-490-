<?php
$uemail="user1";
$upassword="1234";
$connection=new mysqli("192.168.1.15", "myuser", "Marioplayer1*", "elsdb");
$query = "select * from users where username='$uemail'";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
$row = $result -> fetch_row();
print_r($row);
$hash=$row[2];
if (password_verify($upassword, $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}
?>