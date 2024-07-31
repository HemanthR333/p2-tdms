<?php
$Username=$_POST['Username'];
$Password=$_POST['Password'];
$email=$_POST['email'];
// database connection
$conn=mysqli_connect('127.0.0.1','root','','travel');
if($conn->connect_error)
{
    die('connection failed'.$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into user(Username,Password,email) values(?,?,?)");
    $stmt->bind_param("sss",$Username,$Password,$email);
    $stmt->execute();
    echo"registration successful....";
    $stmt->close();
    $conn->close();
}
?>