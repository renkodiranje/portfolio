<?php



if(isset($_POST['subBtn'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $email=$_POST['email'];
    $toEmail= "";
    mail($toEmail,$subject,$message);
}else{
header("Location: index.html");
}


?>