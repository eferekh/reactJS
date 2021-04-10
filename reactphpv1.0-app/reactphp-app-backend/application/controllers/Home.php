<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    echo "";
    die;
}

class Home extends CI_Controller {
	# ----------------------------------------------------------- #
	public function __construct()
    {
        parent::__construct();
        $this->load->model("Home_Model");
    }


    # ----------------------------------------------------------- #
    public function reactGetUsers()
    {
        $agentsData = $this->Home_Model->loadSystemUsers();

        if (is_array($agentsData)) {
            $flag = 1;

            echo json_encode([$flag, $agentsData]);
            exit();
        } else {
            $flag = -1;
            $msg = "Failed To Load Agents Data.";

            echo json_encode([$flag, $msg]);
            exit();
        }

        // header('Access-Control-Allow-Origin: *');
        // header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
        // header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
        // if($_SERVER["REQUEST_METHOD"]== "OPTIONS"){
        //     echo "";die;
        // }
    }


    # ----------------------------------------------------------- #
    public function reactAddEditUser()
    {
        if (isset($_POST["userFormUserid"]) && !empty($_POST["userFormUserid"])) {
            $userId = $_POST["userFormUserid"];
        } else {
            $flag = -1;
            $msg = "User ID Is Required. (Code: 1162)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        if (isset($_POST["userFormName"]) && !empty($_POST["userFormName"])) {
            $name = $_POST["userFormName"];
            $nameArr = explode(" ", $name);
            $firstName = $nameArr[0];
            $lastName = $nameArr[1];
        } else {
            $flag = -1;
            $msg = "Name Is Required. (Code: 1172)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        if (isset($_POST["userFormEmail"]) && !empty($_POST["userFormEmail"])) {
            $email = $_POST["userFormEmail"];
        } else {
            $flag = -1;
            $msg = "Email Is Required. (Code: 1182)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        if (isset($_POST["userFormCity"]) && !empty($_POST["userFormCity"])) {
            $city = $_POST["userFormCity"];
        } else {
            $city = "";
        }

        if (isset($_POST["userFormPhonenumber"]) && !empty($_POST["userFormPhonenumber"])) {
            $phoneNumber = $_POST["userFormPhonenumber"];
        } else {
            $phoneNumber = "";
        }

        if (isset($_POST["userFormRole"]) && is_numeric($_POST["userFormRole"])) {
            $role = $_POST["userFormRole"];
        } else {
            $flag = -1;
            $msg = "Role Is Required. (Code: 1204)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        if ($userId == -1) {
            $addUserStatus = $this->Home_Model->addSystemUser($firstName, $lastName, $phoneNumber, $email, $role, $city);

            if ($addUserStatus > 0) {
                $flag = 1;
                $insertId = $addUserStatus;

                echo json_encode([$flag, $insertId]);
                exit();
            }
        } else {
            $editUserStatus = $this->Home_Model->editSystemUser($userId, $firstName, $lastName, $phoneNumber, $email, $role, $city);

            if ($editUserStatus == 1) {
                $flag = 1;
                $msg = "User Updated Successfully.";

                echo json_encode([$flag, $msg]);
                exit();
            } else {
                $flag = -1;
                $msg = "Failed To Update User. (Code: 127)";

                echo json_encode([$flag, $msg]);
                exit();
            }
        }
    }


    # ----------------------------------------------------------- #
    public function reactGetUserData()
    {
        if (isset($_POST["userId"]) && !empty($_POST["userId"])) {
            $userId = $_POST["userId"];
        } else {
            $flag = -1;
            $msg = "User ID Is Required. (Code: 143)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        $userData = $this->Home_Model->getSystemUserData($userId);

        if (is_array($userData)) {
            $flag = 1;

            echo json_encode([$flag, $userData]);
            exit();
        } else {
            if ($userData == 0) {
                $flag = -1;
                $msg = "User Data Not Found. (Code: 158)";
                
                echo json_encode([$flag, $msg]);
                exit();
            } else {
                $flag = -1;
                $msg = "Failed To Load User Data. (Code: 165)";
                
                echo json_encode([$flag, $msg]);
                exit();
            }
        }
    }


    # ----------------------------------------------------------- #
    public function reactDeleteUser()
    {
        if (isset($_POST["userId"]) && !empty($_POST["userId"])) {
            $userId = $_POST["userId"];
        } else {
            $flag = -1;
            $msg = "User ID Is Required. (Code: 181)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        $userData = $this->Home_Model->deleteSystemUser($userId);

        if ($userData == 1) {
            $flag = 1;
            $msg = "User Deleted Successfully.";

            echo json_encode([$flag, $msg]);
            exit();
        } else {
            $flag = -1;
            $msg = "Failed To Delete User. (Code: 197)";
            
            echo json_encode([$flag, $msg]);
            exit();
        }
    }
}
