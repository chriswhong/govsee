<?php

$con = new mysqli("govsee.com", "govsee", "s33TheG0v", "govsee");

if ($con->connect_errno) {
    printf("Connect failed: %s\n", $con->connect_error);
    exit();
}

?>
