-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: marioGalaxy
-- ------------------------------------------------------
-- Server version       5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `marioGalaxy`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `marioGalaxy` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `marioGalaxy`;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `characters` (
  `name` varchar(15) NOT NULL,
  `health` int(11) DEFAULT NULL,
  `speed` int(11) DEFAULT NULL,
  `jumpHeight` int(11) DEFAULT NULL,
  `ability` varchar(20) DEFAULT NULL,
  `special` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `currency` (
  `currencyCode` varchar(3) NOT NULL,
  `currencyName` varchar(20) NOT NULL,
  `difference` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`currencyCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `general_log`
--

DROP TABLE IF EXISTS `general_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `general_log` (
  `event_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_host` mediumtext NOT NULL,
  `thread_id` bigint(21) unsigned NOT NULL,
  `server_id` int(10) unsigned NOT NULL,
  `command_type` varchar(64) NOT NULL,
  `argument` mediumtext NOT NULL
) ENGINE=CSV DEFAULT CHARSET=utf8 COMMENT='General log';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `levels`
--

DROP TABLE IF EXISTS `levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `levels` (
  `levelID` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `difficulty` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `logging`
--

DROP TABLE IF EXISTS `logging`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logging` (
  `errorCode` varchar(35) NOT NULL,
  `vmhost` varchar(35) NOT NULL,
  `description` varchar(50) NOT NULL,
  `time` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `purchaseHistory`
--

DROP TABLE IF EXISTS `purchaseHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchaseHistory` (
  `itemID` int(3) NOT NULL,
  `username` varchar(15) NOT NULL,
  `quantity` int(10) NOT NULL,
  PRIMARY KEY (`itemID`,`username`),
  KEY `username` (`username`),
  CONSTRAINT `item id` FOREIGN KEY (`itemID`) REFERENCES `shop` (`itemNum`),
  CONSTRAINT `purchaseHistory_ibfk_2` FOREIGN KEY (`username`) REFERENCES `userInfo` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop` (
  `itemNum` int(3) NOT NULL,
  `itemName` varchar(15) NOT NULL,
  `itemPrice` decimal(6,2) NOT NULL,
  PRIMARY KEY (`itemNum`),
  KEY `itemNum` (`itemNum`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `slow_log`
--

DROP TABLE IF EXISTS `slow_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slow_log` (
  `start_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_host` mediumtext NOT NULL,
  `query_time` time NOT NULL,
  `lock_time` time NOT NULL,
  `rows_sent` int(11) NOT NULL,
  `rows_examined` int(11) NOT NULL,
  `db` varchar(512) NOT NULL,
  `last_inserted_id` int(11) NOT NULL,
  `insert_id` int(11) NOT NULL,
  `server_id` int(10) unsigned NOT NULL,
  `sql_text` mediumtext NOT NULL,
  `thread_id` bigint(21) unsigned NOT NULL
) ENGINE=CSV DEFAULT CHARSET=utf8 COMMENT='Slow log';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `userInfo`
--

DROP TABLE IF EXISTS `userInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userInfo` (
  `username` varchar(15) NOT NULL,
  `levelsComplete` int(10) NOT NULL,
  `currentLevel` int(20) NOT NULL,
  `currentPoints` decimal(7,2) NOT NULL,
  `maxPoints` decimal(7,2) NOT NULL,
  `playerLives` int(20) NOT NULL,
  `spritePack` varchar(30) NOT NULL,
  `characterName` varchar(20) NOT NULL,
  `currencyCode` varchar(3) NOT NULL,
  PRIMARY KEY (`username`),
  KEY `username` (`username`),
  KEY `Currency` (`currencyCode`),
  KEY `character` (`characterName`),
  CONSTRAINT `Currency` FOREIGN KEY (`currencyCode`) REFERENCES `currency` (`currencyCode`) ON DELETE CASCADE,
  CONSTRAINT `character` FOREIGN KEY (`characterName`) REFERENCES `characters` (`name`) ON DELETE CASCADE,
  CONSTRAINT `username` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(15) NOT NULL,
  `hash` varchar(200) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'marioGalaxy'
--

--
-- Dumping routines for database 'marioGalaxy'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-09 22:18:53


