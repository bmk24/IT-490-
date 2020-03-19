
<?php
error_reporting(E_ERROR | E_Warning | E_PARSE | E_NOTICE);
ini_set( 'display_errors', 1);
//$hostname = "sql1.njit.edu" ;
//$username = "ti36" ;
//$project = "ti36" ;
//$password = "fQ8f50AMO" ;
//CONNECT to MySQL
$connection=new mysqli("192.168.1.13", "myuser", "mypass", "test");
if (mysqli_connect_errno()) {
    print "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}
?>
