-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2021 at 04:08 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_php_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `role` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `amount` int(11) NOT NULL DEFAULT 0,
  `created_by` int(11) NOT NULL,
  `created_on` datetime NOT NULL,
  `last_modified_by` int(11) DEFAULT NULL,
  `last_modified_on` datetime DEFAULT NULL,
  `is_deleted` int(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `phone_number`, `role`, `city`, `amount`, `created_by`, `created_on`, `last_modified_by`, `last_modified_on`, `is_deleted`) VALUES
(1, 'Tony', 'Tarraf', 'ttarraf@sconet.net', '7135548693', 1, 'Beirut', 0, 0, '2020-12-03 00:00:00', 0, '2020-12-08 04:01:08', 0),
(2, 'Elie', 'Ferekh', 'eferekh@sconet.net', '8325283573', 1, 'Houston', 3, 0, '2020-12-03 00:00:00', 0, '2020-12-03 05:06:58', 0),
(3, 'Elie', 'Helou', 'ehelou@sconet.net', '5216285375', 1, 'Texas', 0, 0, '2020-12-03 00:00:00', 0, '2020-12-03 05:07:06', 0),
(8, 'DeeAna', 'Archer', 'archer@archerluxurytravel.com', '8324749039', 1, 'Sugar Land', 0, 0, '2020-12-04 00:00:00', 0, '2020-12-04 11:12:26', 0),
(83, 'John', 'Doe', 'johndoe@sconet.net', '1625285375', 2, 'Dbayeh', 0, 0, '2020-12-04 00:00:00', 0, '2020-12-04 11:12:26', 0),
(84, 'Jane', 'Smith', 'janesmith@gmail.com', '4812446375', 2, 'Babylon', 0, 0, '2020-12-04 00:00:00', 0, '2020-12-04 11:12:26', 0),
(85, 'Elie', 'Ferekh', 'elieferekh@gmail.com', '8325283573', 1, 'Houston', 0, 0, '2020-12-04 00:00:00', 0, '2020-12-04 11:12:26', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
