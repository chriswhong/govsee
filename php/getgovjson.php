<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 2015 05:00:00 GMT');
header('Content-type: application/javascript');

header('Access-Control-Allow-Origin: *');  

//the government we want to fetch data from is passed in the URL ?gov=NYC
$gov = $_GET['gov'];


//mySQL connection
$con = mysql_connect('govsee.com','govsee','s33TheG0v');
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

$selected = mysql_select_db("govsee",$con) 
  or die("Could not select db");

//calls recursive function that creates nested arrays by checking each box for subordinate boxes.  
//(passes a 0 for boxes that have no superiorbox)
//also grabs chief's title and name if a person has been assigned that position
//FIXME this needs some way to specify the selected gov.
static $level =0;

$rows = getSubordinates(0,$level);
  
//converts nested array into json  
print "{\"name\":\"".$gov."\",\"children\":".json_encode($rows)."}";



function getSubordinates($supID,$level){
	$srows = array();

	$s = mysql_query("SELECT uid, name, ischief FROM boxes WHERE superiorbox = ".$supID."");
	if (!$s) {
		die('Invalid query: ' . mysql_error());
	}
	
	
	$level++;
	
	//
	while($r = mysql_fetch_assoc($s)) {
		
			$r["level"] = $level;
		
			//gets person details if there is a person whose current position is this box.  Applicable to positions with no explicit agency such as a deputy mayor
			$personName = getPersonName($r["uid"]);
			
			$r["person"]= $personName[2];
			$r["personname"] = $personName[0];
			$r["image"] = $personName[1];
		
		
		
		
		//recursion!
		$subordinates = getSubordinates($r["uid"],$level);
		
		//check subordinates for ischief, if there is one, update person, personname, and chieftitle for parent
		$count = 0;
		foreach ($subordinates as $i){
			if ($i["ischief"]==1){
				$r["person"]= $i["person"];
				$r["personname"] = $i["personname"];
				$r["image"] = $i["image"];
				$r["chieftitle"] = $i["name"];
				unset($subordinates[$count]);
				$subordinates = array_values($subordinates);
			}
			$count++;
		}
		
		
		
		if(empty($subordinates)){	
		}
		else {
			$r["children"] = $subordinates;
		}
		
		
		$srows[] = $r;
	}

	
	
	

	return $srows;
	
	
}

//gets the title of the position indicated as chief for the given box
//function getChiefTitle($chiefID){
	
//	$c = mysql_query("SELECT title FROM  `positions` WHERE  `uid` = '".$chiefID."'");
//	if (!$c) {
//		die('Invalid query: ' . mysql_error());
//	}
	
//	return mysql_result($c,0);

//}

//gets the name of the person whose currpos is the position specified
function getPersonName($positionID){
	$result = mysql_query("SELECT firstname, lastname, image,uid FROM `people` WHERE  `currpos` = '".$positionID."'");
	if (!$result) {
		die('Invalid query: ' . mysql_error());
	}
   
	$row = mysql_fetch_row($result);
	$fullname = $row[0]." ".$row[1];
	$image = $row[2];
	$personID = $row[3];
	
	return array($fullname,$image,$personID);
}


?>