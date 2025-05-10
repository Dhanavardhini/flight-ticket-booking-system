-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3310
-- Generation Time: Feb 17, 2025 at 01:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flightbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `businessbook`
--

CREATE TABLE `businessbook` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `departure` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `tickets` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `price` varchar(200) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `businessbook`
--

INSERT INTO `businessbook` (`id`, `name`, `email`, `phone`, `departure`, `destination`, `tickets`, `date`, `price`, `status`) VALUES
(3, 'Akshaya', 'akshu@gmail.com', '6380134916', 'chennai', 'trichy', '2', '23/5/2025', '25,000', 'not approved'),
(4, 'monika', 'moni@gmail.com', '7418663540', 'combatore', 'madurai', '2', '20251-03-02', '40000', 'approved'),
(6, 'Moni', 'makesh123@gmail.com', '999999999', 'chennai', 'usa', '1', '2025-02-28', '199999', 'approved');

-- --------------------------------------------------------

--
-- Table structure for table `fbook`
--

CREATE TABLE `fbook` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `departure` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `tickets` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbook`
--

INSERT INTO `fbook` (`id`, `name`, `email`, `phone`, `departure`, `destination`, `tickets`, `date`, `price`, `status`) VALUES
(1, 'Dhanam', 'anu@gmail.com', '6380134916', 'chennai', 'trichy', '7', '23/5/2025', '350', 'not approved'),
(2, 'swathi', 'swathi@gmail.com', '7890654326', 'Goa', 'hyderabad', '1', '2025-03-02', '25000', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `ft`
--

CREATE TABLE `ft` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ft`
--

INSERT INTO `ft` (`id`, `name`, `price`, `brand`, `file`) VALUES
(1, 'Indigo', '10000', 'Madurai to Chennai', '../upload/6799faf84d3ed-f4.jpeg'),
(2, 'Air indians', '6000', 'Trichy to Madurai', '../upload/6799fb5a72af5-f5.jpeg'),
(3, 'United Airlines', '25000', 'Goa to Hyderabad', '../upload/6799fbe78b3ff-f6.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `img`
--

CREATE TABLE `img` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `img`
--

INSERT INTO `img` (`id`, `name`, `price`, `brand`, `file`) VALUES
(1, 'indian airlines', '25000', 'Coimbatore to Chennai', '../upload/678f881becde9-f1.jpg'),
(2, 'Indigo', '25000', 'Mumbai to Delhi', '../upload/678f8ffe8a331-f2.jpg'),
(3, 'Delta Airlines', '20000', 'Delhi to Chennai', '../upload/6799ff69dc734-f7.jpeg'),
(4, 'boeing', '199999', 'chennai to usa', '../upload/67a776e8e7468-a1.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(200) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `username`, `email`, `password`) VALUES
(4, 'akshaya', 'akshu@gmail.com', 'haris'),
(23, 'akshu', 'akshu@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `businessbook`
--
ALTER TABLE `businessbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fbook`
--
ALTER TABLE `fbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ft`
--
ALTER TABLE `ft`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `businessbook`
--
ALTER TABLE `businessbook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fbook`
--
ALTER TABLE `fbook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ft`
--
ALTER TABLE `ft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `img`
--
ALTER TABLE `img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
