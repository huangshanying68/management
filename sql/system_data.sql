/*
 Navicat Premium Data Transfer

 Source Server         : 管理系统
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : system_data

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 05/06/2020 00:12:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for announcement
-- ----------------------------
DROP TABLE IF EXISTS `announcement`;
CREATE TABLE `announcement`  (
  `id` int(0) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告标题',
  `dates` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告时间',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告内容'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of announcement
-- ----------------------------
INSERT INTO `announcement` VALUES (1, 'aa', '2018-09-10', 'xssaxsaxa');
INSERT INTO `announcement` VALUES (2, 'ss', '2019-01-01', 'dxwdw');

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程代码',
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程名称',
  `nature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程性质（基础必修等)',
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所属专业',
  `cydates` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '开课学期',
  `cftimes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程完成时间',
  `csmajor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程可选专业',
  PRIMARY KEY (`cno`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('5', '算法设计与分析', '限选', '计算机科学与技术', '2017-2018', '10周', '计算机科学与技术、软件工程');
INSERT INTO `course` VALUES ('8', '大物', '基础必修', '计算机科学与技术', '2017-2018', '14周', '计算机科学与技术、软件工程');

-- ----------------------------
-- Table structure for scourse
-- ----------------------------
DROP TABLE IF EXISTS `scourse`;
CREATE TABLE `scourse`  (
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程代码',
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程名称',
  `nature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程性质',
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所属专业',
  `cydates` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '开课学年',
  `cftimes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '完成时间',
  `csmajor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '可选专业',
  `grade` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '开课年级',
  PRIMARY KEY (`cno`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of scourse
-- ----------------------------
INSERT INTO `scourse` VALUES ('2', '大英2', '基础必修', '软件工程', '2017-2018', '14周', '软件工程、计算机科学与技术', '2016级');
INSERT INTO `scourse` VALUES ('3', '软件工程', '基础必修', '软件工程', '2017-2018', '14周', '软件工程、计算机科学与技术', '2016级');
INSERT INTO `scourse` VALUES ('4', '信息安全', '基础必修', '信息安全', '2017-2018', '13周', '信息安全', '2016级');
INSERT INTO `scourse` VALUES ('6', 'acm1', '任选', '计算机科学与技术', '2017-2018', '5周', '计算机科学与技术、软件工程', '2016级');

-- ----------------------------
-- Table structure for tchcourse
-- ----------------------------
DROP TABLE IF EXISTS `tchcourse`;
CREATE TABLE `tchcourse`  (
  `flag` int(0) NOT NULL AUTO_INCREMENT COMMENT '标志',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教师账号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教师姓名',
  `mid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '教师专业',
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所选课程名称',
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课号',
  `csmajor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程可选专业',
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程所属专业',
  `createtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '选课时间',
  `cydates` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '开课学期',
  PRIMARY KEY (`flag`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tcresult
-- ----------------------------
DROP TABLE IF EXISTS `tcresult`;
CREATE TABLE `tcresult`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课名',
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程代码',
  `csmajor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '可选专业',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师账号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师姓名',
  `mid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师专业',
  `flag` int(0) NOT NULL COMMENT '标志',
  `cydates` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '开课学期',
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '课程所属专业',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tcresult
-- ----------------------------
INSERT INTO `tcresult` VALUES (16, '算法设计与分析', '5', '计算机科学与技术、软件工程', '16001', '小计', '计算机科学与技术', 30, '2017-2018', '计算机科学与技术');
INSERT INTO `tcresult` VALUES (17, '算法设计与分析', '5', '计算机科学与技术、软件工程', '16001', '小计', '计算机科学与技术', 32, '2017-2018', '计算机科学与技术');
INSERT INTO `tcresult` VALUES (18, '大物', '8', '计算机科学与技术、软件工程', '16001', '小计', '计算机科学与技术', 31, '2017-2018', '计算机科学与技术');
INSERT INTO `tcresult` VALUES (19, 'sa', 'sdx', 'asx', 'xsas', 'xsa', 'xs', 35, '2016-2017', 'xass');

-- ----------------------------
-- Table structure for temessage
-- ----------------------------
DROP TABLE IF EXISTS `temessage`;
CREATE TABLE `temessage`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师账号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师姓名',
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程号',
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程姓名',
  `registration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '提交情况',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(0) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户密码',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '姓名',
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '性别',
  `birthday` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '出生日期',
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '电话',
  `duty` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '职务(教师、教秘。。。）',
  `mid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '所处专业'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '16000', '123456', '小秘', '女', '1995-03-02', '18022224444', '教秘', '');
INSERT INTO `users` VALUES (2, '16001', '123457', '小计', '男', '1993-03-02', '18222222222', '教师', '计算机科学与技术');
INSERT INTO `users` VALUES (3, '16002', '123456', '小妍', '女', '1992-03-01', '18566663333', '教研', '计算机科学与技术');
INSERT INTO `users` VALUES (4, '16003', '123456', '小院', '男', '1991-06-04', '18633338888', '院务', NULL);
INSERT INTO `users` VALUES (5, '1600101', '123456', '小信', '男', '1992-03-14', '18066669999', '教师', '信息安全');

SET FOREIGN_KEY_CHECKS = 1;
