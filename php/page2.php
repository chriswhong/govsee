<?php
require ("common.php");

if (empty($_SESSION['user'])) {
	$loginstatus = "Not logged in";
} else {
	$loginstatus = "Logged in as ".htmlentities($_SESSION['user']['username'], ENT_QUOTES, 'UTF-8')."<br/><a href = '../../php/logout.php'>Logout</a>";
}

@$gov_slug = $_GET['gov'];

//mySQL connection
include ('db.php');

if ($gov_slug !== '') {

	if ($result = $con -> query("SELECT gov_id, name FROM govs WHERE slug = '" . $gov_slug . "'")) {
		$row = $result -> fetch_row();

		$page = file_get_contents('../gov2.html');

		$page = str_replace('{{gov_id}}', $row[0], $page);
		$page = str_replace('{{gov_name}}', $row[1], $page);
		$page = str_replace('{{loginstatus}}', $loginstatus, $page);

		$result -> close();
	} else {
		$page = file_get_contents('../index.html');
	}

}

echo $page;
?>
