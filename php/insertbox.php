<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 2015 05:00:00 GMT');
header('Content-type: application/javascript');

header('Access-Control-Allow-Origin: *');  

//get the variables we've passed
$name = $_POST['name'];
$superiorbox = $_POST['superiorbox'];
$description = $_POST['description'];


//mySQL connection
$con = mysql_connect('govsee.com','govsee','s33TheG0v');
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

$selected = mysql_select_db("govsee",$con) 
  or die("Could not select db");
  
mysql_query("INSERT INTO boxes (name, superiorbox, description) VALUES ('".$name."',$superiorbox,'".$description."')")or die(mysql_error()) ;

$id = mysql_insert_id();

echo $id;

mysql_close($con);




?>