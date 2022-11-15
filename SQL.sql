CREATE DATABASE  IF NOT EXISTS `agenda_do_vale` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `agenda_do_vale`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: agenda_do_vale
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `categoria_id` int NOT NULL AUTO_INCREMENT,
  `categoria_nome` varchar(45) NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (7,'Show'),(8,'Teatro'),(9,'Musical');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `evento_id` int NOT NULL AUTO_INCREMENT,
  `evento_data` varchar(45) NOT NULL,
  `evento_titulo` varchar(45) NOT NULL,
  `evento_hora` varchar(45) NOT NULL,
  `evento_local` varchar(45) NOT NULL,
  `evento_descricao_resumo` varchar(45) NOT NULL,
  `evento_cidade` varchar(45) NOT NULL,
  `evento_duracao` varchar(45) DEFAULT NULL,
  `evento_valor` varchar(45) DEFAULT NULL,
  `evento_descricao` varchar(500) DEFAULT NULL,
  `evento_tema` varchar(45) DEFAULT NULL,
  `evento_patrocinado` varchar(3) DEFAULT NULL,
  `evento_usuario_id` int DEFAULT NULL,
  `evento_categoria_id` int DEFAULT NULL,
  `evento_imagem` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`evento_id`),
  KEY `evento_usuario_id` (`evento_usuario_id`),
  KEY `evento_categoria_id` (`evento_categoria_id`),
  CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`evento_usuario_id`) REFERENCES `usuario` (`usuario_id`),
  CONSTRAINT `evento_ibfk_2` FOREIGN KEY (`evento_categoria_id`) REFERENCES `categoria` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` VALUES (6,'2022-06-20','Virada Cultural','23:00','Praça Beira Rio','Shows','Registro','01:00','Gratuito','Shows com bandas','Música','Não',3,7,NULL),(13,'2022-06-23','Batalha de Rap','23:30','Praça Beira Rio','Rap','Registro','01:00','10.00','Batalha de rap','Música','Não',3,7,NULL),(14,'2022-06-30','Lago Cisne','19:00','KKKK','Teatro','Registro','01:30','50','Peça de teatro lago do cisne','Musical','Sim',3,8,NULL),(21,'2022-06-22','Gratuito','01:01','123','123','123','00:00','Gratuito','123','123','Não',3,9,NULL),(22,'2022-06-22','123','01:01','123','123','123','01:01','123','123','123','Não',3,9,NULL),(23,'2022-06-27','Virada Cultural','23:00','Praça Beira Rio','Lorem ipsum dolor sit amet, consectetur nunc.','Registro','00:00','Gratuito','Lorem ipsum dolor sit amet, consectetur nunc. Lorem ipsum dolor sit amet, consectetur nunc. Lorem ipsum dolor sit amet, consectetur nunc. Lorem ipsum dolor sit amet, consectetur nunc. Lorem ipsum dolor sit amet, consectetur nunc. ','Cultura','Não',3,7,NULL);
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `usuario_primeiro_nome` varchar(45) NOT NULL,
  `usuario_sobrenome` varchar(45) NOT NULL,
  `usuario_email` varchar(45) NOT NULL,
  `usuario_senha` varchar(60) NOT NULL,
  `usuario_cpf` varchar(45) NOT NULL,
  `usuario_data_nascimento` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (3,'Admin','Admin','teste@teste','$2a$10$d5juW5nGF/UT97hF6JUrdO7b5h9osS3nb8XZ.XNtfsMV52I5YII9O','123.456.789-00','01/01/1990','2022-06-14 23:56:30'),(18,'Raphael','Paulino dos Reis ','raphael_rprvga@hotmail.com','$2b$10$AEnKast20rQxy3t4K6ZuGuGQCzPRyEqIzrp4eH65T5ADdvyTjKDQ.','442.565.708-02','1994-08-19','2022-06-26 13:33:03');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-15 11:22:35
