-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2021 alle 08:55
-- Versione del server: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `libretto`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE IF NOT EXISTS `utente` (
  `username` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `data_iscrizione` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `facolta` varchar(100) NOT NULL,
  `anni` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`username`, `password`, `email`, `data_iscrizione`, `facolta`, `anni`) VALUES
('matte', '$2y$10$EE4DQZbEx6ItStwv9N.sd.KDbQeBQpeJEE49duqj80S5Ue/S/D1zK', '', '2021-02-02 15:59:47', 'Ingegeria Informatica', 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `valutazione`
--

CREATE TABLE IF NOT EXISTS `valutazione` (
  `username` varchar(100) NOT NULL,
  `voto` int(11) NOT NULL,
  `cfu` int(11) NOT NULL,
  `esame` varchar(200) NOT NULL,
  `anno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `valutazione`
--

INSERT INTO `valutazione` (`username`, `voto`, `cfu`, `esame`, `anno`) VALUES
('matte', 19, 6, 'Algebra Lineare', 1),
('matte', 22, 6, 'Algoritmi e strutture dati', 1),
('matte', 26, 12, 'Analisi 1', 1),
('matte', 29, 9, 'Basi di Dati', 1),
('matte', 18, 12, 'Fisica', 1),
('matte', 26, 9, 'Fondamenti di Programmazione', 1),
('matte', 25, 6, 'Progettazione Web', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `utente`
--
ALTER TABLE `utente`
 ADD PRIMARY KEY (`username`);

--
-- Indexes for table `valutazione`
--
ALTER TABLE `valutazione`
 ADD PRIMARY KEY (`username`,`esame`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
