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
    }


    // ----------------------------------------------------------- //
    public function reactIncreaseAmount()
    {
        if (isset($_POST["userId"]) && !empty($_POST["userId"]) && is_numeric($_POST["userId"])) {
            $userId = $_POST["userId"];
        } else {
            $flag = -1;
            $msg = "User ID Is Required. (Code: 48)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        if (isset($_POST["amount"]) && is_numeric($_POST["amount"])) {
            $amount = $_POST["amount"];
        } else {
            $flag = -1;
            $msg = "User Amount Is Required. (Code: 58)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        $increaseAmountStatus = $this->Home_Model->reactIncreaseAmount($userId, $amount);

        if ($increaseAmountStatus == 1) {
            $flag = 1;
            $msg = "Success";

            echo json_encode([$flag, $msg]);
            exit();
        } else {
            $flag = -1;
            $msg = "Failed To Increase Amount. (Code: 74)";

            echo json_encode([$flag, $msg]);
            exit();
        }
    }



    // ----------------------------------------------------------- //
    public function reactDecreaseAmount()
    {
        if (isset($_POST["userId"]) && !empty($_POST["userId"]) && is_numeric($_POST["userId"])) {
            $userId = $_POST["userId"];
        } else {
            $flag = -1;
            $msg = "User ID Is Required. (Code: 48)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        if (isset($_POST["amount"]) && is_numeric($_POST["amount"])) {
            $amount = $_POST["amount"];
        } else {
            $flag = -1;
            $msg = "User Amount Is Required. (Code: 58)";

            echo json_encode([$flag, $msg]);
            exit();
        }

        $decreaseAmountStatus = $this->Home_Model->reactDecreaseAmount($userId, $amount);

        if ($decreaseAmountStatus == 1) {
            $flag = 1;
            $msg = "Success";

            echo json_encode([$flag, $msg]);
            exit();
        } else {
            $flag = -1;
            $msg = "Failed To Increase Amount. (Code: 74)";

            echo json_encode([$flag, $msg]);
            exit();
        }
    }
}
