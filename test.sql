-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2018 at 08:32 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `faultress`
--

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `tor` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `line` varchar(10) NOT NULL,
  `category` varchar(10) NOT NULL,
  `section` varchar(10) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `toc` timestamp NOT NULL,
  `toa` timestamp NOT NULL,
  `technician` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`tor`, `line`, `category`, `section`, `status`, `toc`, `toa`, `technician`) VALUES
('2018-01-21 11:39:52', '1', 'ab', 'sa', 1, '2018-01-21 11:39:52', '2018-01-21 11:39:52', 'prasad'),
('2018-01-21 11:39:52', '2', 'da', '4', 0, '2018-01-21 11:39:52', '2018-01-21 11:39:52', 'prasad'),
('2018-01-21 11:40:11', '3', 'zd', 'qw', 0, '2018-01-21 11:40:11', '2018-01-21 11:40:11', 'bond'),
('2018-01-21 12:23:11', '1', 'sd', '23', 0, '2018-01-21 12:23:11', '2018-01-21 12:23:11', 'john');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
