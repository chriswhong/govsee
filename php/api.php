<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 2015 05:00:00 GMT');
header('Content-type: application/javascript');

header('Access-Control-Allow-Origin: *');  

@$param1 = $_GET['var1'];
@$param2 = $_GET['var2'];
@$param3 = $_GET['var3'];
@$param4 = $_GET['var4'];
@$param5 = $_GET['var5'];

//mySQL connection
include('db.php'); 

//calls recursive function that creates nested arrays by checking each box for subordinate boxes.  
//(passes a 0 for boxes that have no superiorbox)
//also grabs chief's title and name if a person has been assigned that position
//FIXME this needs some way to specify the selected gov.
static $level =0;

if ($param1 == 'govlist' && $param2 == 'id'){
	if ($result = $con->query("SELECT name FROM govs WHERE gov_id = '".$param3."'")) {
        $row = $result->fetch_row();
		$gov_id = $param3; 
		$gov = $row[0];
	}else{
		$gov = '';
		$rows = NULL;
	}
	$sup_id = 0;
}else if($param1 == 'govlist' && $param2 !== ''){
    if ($result = $con->query("SELECT gov_id, name FROM govs WHERE slug = '".$param2."'")) {
        $row = $result->fetch_row();
		$gov_id = $row[0]; 
		$gov = $row[1];
	}else{
		$gov = '';
		$rows = NULL;
	}
	$sup_id = 0;
} else if ($param1 == 'govdetail' && $param3 == 'id'){
	$gov_id = $param2;
	$sup_id = $param4;
}else if($param1 == 'govdetail' && $param3 !== ''){
    //if ($result = $con->query("SELECT gov_id FROM govs WHERE slug = '".$param2."'")) {
    //    $row = $result->fetch_row();
	//	$gov_id = $row[0]; 
	//	$rows = getSubordinates(0,$gov_id,$con);
	//}
	$rows = NULL;
}

$cachefile = './cachefile_'.$param1.'_'.$sup_id.'_'.$gov_id.'.json';

if (file_exists($cachefile)){
	print file_get_contents($cachefile);
}else{
	$rows = getSubordinates($sup_id,0,$gov_id,$con);
	$resp = "{\"name\":\"".$gov."\",\"children\":".json_encode($rows)."}";
	print $resp;
	$fp = fopen($cachefile, 'w');
	fwrite($fp, $resp); 
	fclose($fp);
}

function getSubordinates($supID,$level,$gov_id,$con){

	$srows = array();

	if ($result = $con->query("SELECT uid, name, ischief FROM boxes WHERE superiorbox = ".$supID." AND gov = ".$gov_id)) {
    
    	$level++;
		
		while($r = $result->fetch_assoc()) {
					
			$r["level"] = $level;

			//gets person details if there is a person whose current position is this box.  Applicable to positions with no explicit agency such as a deputy mayor
			$personName = getPersonName($r["uid"], $con);
			
			$r["person"]= $personName[2];
			$r["personname"] = $personName[0];
			$r["image"] = $personName[1];
			$r["hasMoreChildren"] = false;

			if ($level < 4){

				$subordinates = getSubordinates($r["uid"],$level,$gov_id,$con);
				
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
				
				if(!empty($subordinates)){	
					$r["children"] = $subordinates;
				}
			
			}else if($level == 4){

				$subordinates = getSubordinates($r["uid"],$level,$gov_id,$con);

				if (count($subordinates) > 0){
					$r["hasMoreChildren"] = true;
				}

			}

			$srows[] = $r;
		}    

        $result->close();
    }
	
	return $srows;
	
}

//gets the name of the person whose currpos is the position specified
function getPersonName($positionID, $con){
	$result = $con->query("SELECT firstname, lastname, image, uid FROM people WHERE  currpos = ".$positionID);
	if (!$result) {
		die('Invalid query: ' . mysql_error());
	}
   
	$row = $result->fetch_row();
	$fullname = $row[0]." ".$row[1];
	$image = $row[2];
	$personID = $row[3];
	
	return array($fullname,$image,$personID);
}


?>
