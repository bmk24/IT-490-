<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include "account.php";
//$connection=new mysqli("192.168.1.123", "myuser", "mypass", "test");
$connection=new mysqli($hostname, $username, $mypassword, $database);
$user="azi3@njit.edu";
$query = "select * from business where email='$user' ";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
while($row = $result->fetch_array())
{
$rows[] = $row;
//print_r($row);
}
print_r($rows);
//$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
//print_r($row);
$count = mysqli_num_rows($result);
//3.1.2 If the posted values are equal to the database values, then session will be created for the user.
if ($count >= 1){
echo "Succes\n";
}else{
    echo "Not Succes";
}
?>