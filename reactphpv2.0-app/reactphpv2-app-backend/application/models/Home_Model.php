<?php
class Home_Model extends CI_Model {

    // ----------------------------------------------------------- //
    public function __construct()
    {
        parent::__construct();
    }


    // ----------------------------------------------------------- //
    public function loadSystemUsers()
    {
        $sqlQuery = "SELECT `id`, CONCAT(`fname`, ' ', `lname`) AS `fullname`, `email`, `amount`
                     FROM `users`
                     WHERE `is_deleted` = 0";

        $query = $this->db->query($sqlQuery);

        if ($query) {
            if ($query->num_rows() <= 0) {
                return 0;
            } else {
                $result = $query->result();
                return $result;
            }
        } else {
            return -1;
        }
    }


    // ----------------------------------------------------------- //
    public function reactIncreaseAmount($userId, $amount)
    {
        $amount = $amount + 1;

        $userId = $this->db->escape($userId);
        $amount = $this->db->escape($amount);

        $sqlQuery = "UPDATE `users` SET `amount` = $amount WHERE `id` = $userId";

        $query = $this->db->query($sqlQuery);

        if ($query) {
            return 1;
        } else {
            return -1;
        }
    }


    // ----------------------------------------------------------- //
    public function reactDecreaseAmount($userId, $amount)
    {
        $amount = $amount - 1;

        $userId = $this->db->escape($userId);
        $amount = $this->db->escape($amount);

        $sqlQuery = "UPDATE `users` SET `amount` = $amount WHERE `id` = $userId";

        $query = $this->db->query($sqlQuery);

        if ($query) {
            return 1;
        } else {
            return -1;
        }
    }
}