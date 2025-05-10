<?php
include_once '../../../../config/database.php';

class Post
{
    public $conn;
    public $response;
    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
    public function Register($username,$email,$password)
    {
         $insert = "INSERT INTO register(username,email,password)  VALUES (?,?, ?)";
         $stmt = mysqli_prepare($this->conn, $insert);
 
         if (!$stmt) {
             return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
         }
 
         mysqli_stmt_bind_param($stmt, "sss", $username,$email,$password);
         $result = mysqli_stmt_execute($stmt);
 
         if ($result) {
             return ["message" => "User Register successfully"];
         } else {
             return ["message" => "Product insertion failed"];
         }
    }
   
    public function A_InsertPlans2($name,$password)
    {
        $insert = "INSERT INTO admin(name, password) VALUES ( ?, ?)";
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
    
        mysqli_stmt_bind_param($stmt, "ss", $name,$password);
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan Added successful"];
        } else {
            return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
        }
    }

    public function businessbook($name, $email, $phone, $departure, $destination,$tickets, $date, $price, $status)
    {
          $insert = "INSERT INTO businessbook (name, email, phone, departure, destination,tickets, date, price, status) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = mysqli_prepare($this->conn, $insert);

        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
        mysqli_stmt_bind_param($stmt, "sssssssss", $name, $email, $phone, $departure, $destination,$tickets, $date, $price, $status);

        $result = mysqli_stmt_execute($stmt);

        if ($result) {
            return ["message" => "Plan added successfully"];
        } else {
            return ["message" => "Plan addition failed: " . mysqli_error($this->conn)];
        }
    }
    public function fbook($name, $email, $phone, $departure, $destination,$tickets, $date, $price, $status)
    {
          $insert = "INSERT INTO fbook (name, email, phone, departure, destination,tickets, date, price, status) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = mysqli_prepare($this->conn, $insert);

        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
        mysqli_stmt_bind_param($stmt, "sssssssss", $name, $email, $phone, $departure, $destination,$tickets, $date, $price, $status);

        $result = mysqli_stmt_execute($stmt);

        if ($result) {
            return ["message" => "Plan added successfully"];
        } else {
            return ["message" => "Plan addition failed: " . mysqli_error($this->conn)];
        }
    }
    


public function flight($name, $price, $brand, $file)
{
    $advertisementQuery = "INSERT INTO img (name, price, brand, file) VALUES (?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);

    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $name, $price, $brand, $file);
    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);

    if ($advertisementExec) {
        return "data added successfully";
    } else {
        return "Failed to insert data into database: " . mysqli_error($this->conn);
    }
}

public function ft($name, $price, $brand, $file)
{
    $advertisementQuery = "INSERT INTO ft (name, price, brand, file) VALUES (?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);

    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $name, $price, $brand, $file);
    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);

    if ($advertisementExec) {
        return "flight added successfully";
    } else {
        return "Failed to insert data into database: " . mysqli_error($this->conn);
    }
}























 





}
?> 
