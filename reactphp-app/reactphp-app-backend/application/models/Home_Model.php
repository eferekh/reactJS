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
        $sqlQuery = "SELECT `id`, CONCAT(`fname`, ' ', `lname`) AS `fullname`, `email`, `role`, `phone_number`, `city`
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
    public function deleteSystemUser($userId)
    {
        $userId = $this->db->escape($userId);

        $sqlQuery = "UPDATE `users` SET `is_deleted` = 1 WHERE `id` = $userId";

        $query = $this->db->query($sqlQuery);

        if ($query) {
            return 1;
        } else {
            return -1;
        }
    }



    // ----------------------------------------------------------- //
    public function getSystemUserData($userId)
    {
        $userId = $this->db->escape($userId);

        $sqlQuery = "SELECT `fname`, `lname`, `email`, `phone_number`, `city`, `role`
                     FROM `users`
                     WHERE `id` = $userId AND `is_deleted` = 0";

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
    public function addSystemUser($firstName, $lastName, $phoneNumber, $email, $role, $city)
    {
        $firstName = $this->db->escape($firstName);
        $lastName = $this->db->escape($lastName);
        $phoneNumber = $this->db->escape($phoneNumber);
        $email = $this->db->escape($email);
        $role = $this->db->escape($role);
        $city = $this->db->escape($city);

        $sqlQuery = "INSERT INTO `users` (`fname`, `lname`, `phone_number`, `email`, `role`, `city`)
                     VALUES ($firstName, $lastName, $phoneNumber, $email, $role, $city)";

        $query = $this->db->query($sqlQuery);

        if ($query) {
            $insertId = $this->db->insert_id();
            return $insertId;
        } else {
            return -1;
        }
    }


    // ----------------------------------------------------------- //
    public function editSystemUser($userId, $firstName, $lastName, $phoneNumber, $email, $role, $city)
    {
        $userId = $this->db->escape($userId);
        $firstName = $this->db->escape($firstName);
        $lastName = $this->db->escape($lastName);
        $phoneNumber = $this->db->escape($phoneNumber);
        $email = $this->db->escape($email);
        $role = $this->db->escape($role);
        $city = $this->db->escape($city);

        $sqlQuery = "UPDATE `users`
                     SET `fname` = $firstName,
                         `lname` = $lastName,
                         `phone_number` = $phoneNumber,
                         `email` = $email,
                         `role` = $role,
                         `city` = $city
                     WHERE `id` = $userId";

        $query = $this->db->query($sqlQuery);

        if ($query) {
            return 1;
        } else {
            return -1;
        }
    }
}