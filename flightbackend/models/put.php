<?php
include_once '../../../../config/database.php';

class Put
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

  

    public function bbook($id, $name, $email, $phone, $departure, $destination, $tickets, $date, $price, $status)
    {
        // Ensure $id is an integer
        $id = (int)$id;
    
        // Check the database connection
        if (!$this->conn) {
            die("Database connection error: " . mysqli_connect_error());
        }
    
        // Check if the booking exists
        $checkUserQuery = "SELECT * FROM businessbook WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        if (!$checkUserStmt) {
            die("Query preparation failed: " . mysqli_error($this->conn));
        }
        mysqli_stmt_bind_param($checkUserStmt, "i", $id); // Bind the integer ID
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        // If the booking exists, update it
        if (mysqli_num_rows($checkUserResult) == 1) {
            $updateQuery = "
                UPDATE businessbook
                SET 
                    name = ?, 
                    email = ?, 
                    phone = ?, 
                    departure = ?, 
                    destination = ?, 
                    tickets = ?, 
                    date = ?, 
                    price = ?, 
                    status = ?
                WHERE 
                    id = ?
            ";
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
    
            if (!$updateStmt) {
                die("Update query preparation failed: " . mysqli_error($this->conn));
            }
    
            mysqli_stmt_bind_param(
                $updateStmt,
                "sssssssssi", // Data types
                $name,
                $email,
                $phone,
                $departure,
                $destination,
                $tickets,
                $date,
                $price,
                $status,
                $id
            );
    
            if (mysqli_stmt_execute($updateStmt)) {
                http_response_code(200);
                return ["message" => "Booking details updated successfully"];
            } else {
                http_response_code(500);
                return ["error" => "Error updating booking details"];
            }
        } else {
            http_response_code(404);
            return ["error" => "Booking not found"];
        }
    }
    
    

    
   
    
    public function fbook($id, $name, $email, $phone, $departure, $destination, $tickets, $date, $price, $status)
    {
        // Ensure $id is an integer
        $id = (int)$id;
    
        // Check the database connection
        if (!$this->conn) {
            die("Database connection error: " . mysqli_connect_error());
        }
    
        // Check if the booking exists
        $checkUserQuery = "SELECT * FROM fbook WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        if (!$checkUserStmt) {
            die("Query preparation failed: " . mysqli_error($this->conn));
        }
        mysqli_stmt_bind_param($checkUserStmt, "i", $id); // Bind the integer ID
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        // If the booking exists, update it
        if (mysqli_num_rows($checkUserResult) == 1) {
            $updateQuery = "
                UPDATE fbook
                SET 
                    name = ?, 
                    email = ?, 
                    phone = ?, 
                    departure = ?, 
                    destination = ?, 
                    tickets = ?, 
                    date = ?, 
                    price = ?, 
                    status = ?
                WHERE 
                    id = ?
            ";
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
    
            if (!$updateStmt) {
                die("Update query preparation failed: " . mysqli_error($this->conn));
            }
    
            mysqli_stmt_bind_param(
                $updateStmt,
                "sssssssssi", // Data types
                $name,
                $email,
                $phone,
                $departure,
                $destination,
                $tickets,
                $date,
                $price,
                $status,
                $id
            );
    
            if (mysqli_stmt_execute($updateStmt)) {
                http_response_code(200);
                return ["message" => "Booking details updated successfully"];
            } else {
                http_response_code(500);
                return ["error" => "Error updating booking details"];
            }
        } else {
            http_response_code(404);
            return ["error" => "Booking not found"];
        }
    }
    


























    

    
   





     
}
?>