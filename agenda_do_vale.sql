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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (7,'Show'),(8,'Teatro'),(9,'Musical'),(10,'Futebol'),(11,'Esporte'),(12,'Workshop');
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
  `evento_titulo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `evento_hora` varchar(45) NOT NULL,
  `evento_local` varchar(45) NOT NULL,
  `evento_descricao_resumo` varchar(45) NOT NULL,
  `evento_cidade` varchar(45) NOT NULL,
  `evento_duracao` varchar(45) DEFAULT NULL,
  `evento_valor` varchar(45) DEFAULT NULL,
  `evento_descricao` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` VALUES (25,'2022-11-27','A Cruzada dos Corações Puros','17:00','Sesc Registro, Gramado e Marquise','Uma peça sobre o autor da história mundial.','Registro','01:00','Gratuito','Um grupo de crianças se une e cruza o mundo para achar o autor da história mundial e fazer um pedido: que ele mude os rumos de suas histórias. Enquanto as crianças cruzam o mundo em busca dessa figura, é possível que o público conheça pequenas particularidades dos personagens da aventura, como os medos, a amizade verdadeira, o amor, os sonhos, a saudade e a pureza da infância.','História','Não',3,8,'https://www.sescsp.org.br/wp-content/uploads/2022/10/cruzadadoscoracoespuros-664x332.jpg'),(26,'2022-11-20','II Taça MX de Registro de Motocross','12:00','Pista de Motocross','Evento de Motocross na cidade Registro.','Registro','00:00','Gratuito','Premiação com troféus até a 5° colocação de cada categoria, sorteios de vários brindes e um traçado especial para a categoria “Trilheiros”\n\nNeste domingo (20/11) acontece a competição da II Taça MX de Registro, com treinos livres no sábado (19/11), das 8h às 11h e no domingo das 8 às 11h, com o início da corrida oficial às 12h, na pista de Motocross.\n\nConhecida como uma das melhores pistas da região, o circuito foi reativado recentemente pelos pilotos regionais e passará pelos acertos finais para receber a competição. O local ainda conta com Praça de Alimentação, Banheiros, Arquibancada Natural com visão completa da pista e uma estrutura pensada nos mínimos detalhes para receber da melhor maneira pilotos e amantes dos esportes off road.\n\nHaverá premiação com troféus até a 5°colocação de cada categoria, sorteios de vários brindes e um traçado especial para a categoria “Trilheiros”, que passará por fora da pista de Motocross.\n\nAs disputas serão nas categorias: Trilheiro Nacional – Trilheiro Importada – 50/65cc – Junior – Nacional Pró – Nacional 3 (pilotos + 30 anos) – Intermediária Nacional – Intermediária Importada – Nacional Gold – MX1 – MX 2 – MX3 – MX4 – MX5 – MX Gold.\n\nA II Taça MX de Registro terá locução de Murilo Locutor e apoio da Prefeitura de Registro.\n\nCOMPETIDORES – A taxa de inscrição é de R$ 100,00 para o piloto participar de uma categoria e R$ 150,00 o pacote full, para disputar em todas as categorias que a idade e equipamento permitirem.\n\nSERVIÇO – Pista de Motocross – Km 2 da Rodovia Empei Hiraide (Estrada Registro/Sete Barras).','Motocross','Sim',3,11,'https://www.npdiario.com.br/wp-content/uploads/2022/11/035c57_7e40978e294e4a479e96962748f9705c_mv2.jpg'),(27,'2022-11-25','1º Workshop de Plantas Ornamentais','09:00','Centro Comunitário de Pariquera-Açu','Workshop sobre plantas ornamentais.','Pariquera-Açu','09:00','Gratuito','O 1º Workshop de Plantas Ornamentais está com inscrições gratuitas abertas em Pariquera-Açu. O evento será realizado no dia 25 de novembro, sexta-feira, das 9h às 18h, no prédio do Centro Comunitário de Pariquera-Açu (Cecopa). A iniciativa do Sebrae é resultado da parceria entre a Prefeitura de Pariquera-Açu, Sindicato Rural de Iguape, APTA, Cati, Etec. Faesp, Sebrae Aqui, Senar e Unesp. São 80 vagas disponíveis. \n\nA programação do workshop conta com palestras, apresentação do programa de inovação rural e interação com os participantes. Entre os destaques estão as discussões envolvendo o Registro Nacional de Sementes e Mudas (Renasem). Renato Madeira vai falar sobre a legislação aplicada ao Renasem e tirar dúvidas dos participantes em conjunto com Elcio de Melo. \n\nElcio também vai palestrar sobre as “dificuldades do produtor de plantas ornamentais nos dias atuais”. A programação contará com as palestras sobre custos de produção com Marcelo Malavota; sobre cooperativismo promovida pela Cooperativa Central; inovação e desenvolvimento da cadeia de plantas ornamentais com Rodrigo Poli e sobre o Programa de Inovação Rural do Sebrae-SP com Lucas Cárnio Nogueira.\n\nO workshop tem o patrocínio de: Cooper Central Vale do Ribeira, Engvale – Meio Ambiente, Saúde e Segurança do Trabalho, Renove – Representante autorizado Banco do Brasil Consórcios, Consultoria Buckel – Consultoria Agroambiental e Saúde e Segurança do Trabalho, Federal Invest – Soluções Financeiras para o Seu Negócio, Lumiar Renováveis – Soluções em Energia e RR Agro – Soluções para o Campo.\n\nO Cecopa está localizado na Rua Romeu Monti, s/n, no Centro. As inscrições podem ser feitas pelo link https://forms.office.com/r/bnqhi9Dr8P. Outras informações pelo telefone (13) 3856-1568.\n\n\n:: Programação ::\n\n9h: Recepção\n\n9h30: Abertura\n\n9h40: Patrocinadores\n\n10h10: Custos de produção\n\n11h10: Dificuldades do produtor de plantas ornamentais nos dias atuais\n\n12h10: Programa de Inovação Rural\n\n13h: Intervalo\n\n14h: Inovação e Desenvolvimento da Cadeia de Plantas Ornamentais\n\n14h30: Cooperativismo\n\n15h: Legislação aplicada ao Renasem\n\n16h: Dúvidas sobre o Renasem\n\n18h: Encerramento','Plantas Ornamentais','Não',3,12,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaXW-ebgXYm3CX_sIHrdwlHEaGaKXgbMgGoHA_qj2T9bZg5fQO08fDprZWwEgeInfOqg&usqp=CAU.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (3,'Admin','Admin','teste@teste','$2a$10$d5juW5nGF/UT97hF6JUrdO7b5h9osS3nb8XZ.XNtfsMV52I5YII9O','123.456.789-00','01/01/1990','2022-06-14 23:56:30'),(19,'Administrador','','admin@admin','$2b$10$TKJOS7nNhgi1Xaw3OaGbeO.d2f400Xo5AKVVxhkM2zYefrdBsNw1.','12345678900','2020-01-01','2022-11-20 14:56:23');
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

-- Dump completed on 2022-11-22  9:47:45
