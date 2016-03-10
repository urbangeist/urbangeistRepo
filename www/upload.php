<?php
	header('Access-Control-Allow-Origin: *');
	 
	$location = $_POST['directory'];
	$uploadfile = $_POST['fileName'];
	$uploadfilename = $_FILES['file']['tmp_name'];
	 
	if(move_uploaded_file($uploadfilename, $location.'/'.$uploadfile)){
	        echo 'File successfully uploaded!';
	} else {
	        echo 'Upload error!';
	}
?>