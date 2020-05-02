<?php
session_start();
session_unset();
session_destroy();
header("Location: http://ec2-34-229-47-176.compute-1.amazonaws.com/game/login.html");
exit();
?>
