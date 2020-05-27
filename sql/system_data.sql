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

 Date: 28/05/2020 00:27:00
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
INSERT INTO `announcement` VALUES (1, '大会', '2017-10-9', '5566556');
INSERT INTO `announcement` VALUES (2, 'hh', '2019-07-08', 'dsdw');
INSERT INTO `announcement` VALUES (3, 'huy', '2018-01-02', 'xsacdw');

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `cno` int(0) NOT NULL COMMENT '课程号',
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程名称',
  `nature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程性质（基础必修等)',
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所属专业',
  `cydates` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '开课学年',
  `cftimes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程完成时间',
  `csmajor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程可选专业',
  `capacity` int(0) NULL DEFAULT NULL COMMENT '课程老师人数',
  `cteachers` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '授课教师的姓名(所有姓名)',
  PRIMARY KEY (`cno`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES (1, '大英1', '基础必修', '计算机科学与技术', '2016-2017', '14周', '计算机科学与技术、软件工程、信息安全', NULL, NULL);
INSERT INTO `course` VALUES (2, 's', '限选', '计算机科学与技术', '2016-2017', '15周', '计算机科学与技术、信息安全', NULL, NULL);
INSERT INTO `course` VALUES (4, ' dass', '限选', '计算机科学与技术', ' 2017-2018', ' 13周', ' 计算机科学与技术', NULL, NULL);
INSERT INTO `course` VALUES (5, ' cds', '基础必修', '计算机科学与技术', ' 2017-2018', ' 15周', ' 计算机科学与技术、软件工程', NULL, NULL);

-- ----------------------------
-- Table structure for scourse
-- ----------------------------
DROP TABLE IF EXISTS `scourse`;
CREATE TABLE `scourse`  (
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课号',
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程名称',
  `nature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程性质',
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所属专业',
  `cydates` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '开课学年',
  `cftimes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '完成时间',
  `csmajor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '可选专业',
  PRIMARY KEY (`cno`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of scourse
-- ----------------------------
INSERT INTO `scourse` VALUES ('3', 'dxs', '任选', '软件工程', '2018-2019', '15周', '软件工程');

-- ----------------------------
-- Table structure for tchcourse
-- ----------------------------
DROP TABLE IF EXISTS `tchcourse`;
CREATE TABLE `tchcourse`  (
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师账号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师姓名',
  `mid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师专业',
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所选课程名称',
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课号',
  `csmajor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程可选专业',
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程所属专业',
  `createtime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tchcourse
-- ----------------------------
INSERT INTO `tchcourse` VALUES ('1600201', '小明', '计算机科学与技术', ' cds', '5', ' 计算机科学与技术、软件工程', '软件工程', '2020-05-27 20:23:08');
INSERT INTO `tchcourse` VALUES ('1600201', '小明', '计算机科学与技术', ' dass', '4', ' 计算机科学与技术', '计算机科学与技术', '2020-05-27 20:23:05');
INSERT INTO `tchcourse` VALUES ('1600201', '小明', '计算机科学与技术', '大英1', '1', '计算机科学与技术、软件工程、信息安全', '信息安全', '2020-05-27 20:23:01');
INSERT INTO `tchcourse` VALUES ('1600202', '小英', '软件工程', '大英1', '1', '计算机科学与技术、软件工程、信息安全', '计算机科学与技术', '2020-05-27 20:22:55');
INSERT INTO `tchcourse` VALUES ('1600202', '小英', '软件工程', ' cds', '5', ' 计算机科学与技术、软件工程', '计算机科学与技术', '2020-05-27 20:22:49');
INSERT INTO `tchcourse` VALUES ('1600202', '小英', '软件工程', ' dass', '4', ' 计算机科学与技术', '计算机科学与技术', '2020-05-27 16:22:37');
INSERT INTO `tchcourse` VALUES ('1600203', '小信', '信息安全', ' cds', '5', ' 计算机科学与技术、软件工程', '软件工程', '2020-05-27 19:22:31');
INSERT INTO `tchcourse` VALUES ('1600203', '小信', '信息安全', ' dass', '4', ' 计算机科学与技术', '计算机科学与技术', '2020-05-27 21:22:19');
INSERT INTO `tchcourse` VALUES ('1600203', '小信', '信息安全', 's', '2', '计算机科学与技术、信息安全', '计算机科学与技术', '2020-05-27 20:22:12');
INSERT INTO `tchcourse` VALUES ('555', 'cdc', 'csd', 'sd', 'xs', 'sa', 'as', '2020-05-27 20:35:12');
INSERT INTO `tchcourse` VALUES ('555', 'cdc', 'csd', 'sd', 'xs', 'sa', 'as', '2020-05-27 20:35:46');
INSERT INTO `tchcourse` VALUES ('1600202', '小英', '软件工程', 's', '2', '计算机科学与技术、信息安全', '计算机科学与技术', '2020-05-27 20:38:06');

-- ----------------------------
-- Table structure for tcresult
-- ----------------------------
DROP TABLE IF EXISTS `tcresult`;
CREATE TABLE `tcresult`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课名',
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课号',
  `csmajor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '可选专业',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师账号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师姓名',
  `mid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师专业',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for temessage
-- ----------------------------
DROP TABLE IF EXISTS `temessage`;
CREATE TABLE `temessage`  (
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师账号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '教师姓名',
  `cno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程号',
  `cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '课程姓名',
  `registration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '提交情况'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of temessage
-- ----------------------------
INSERT INTO `temessage` VALUES ('1600201', '小明', '1', '大英1', '是');

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
INSERT INTO `users` VALUES (1, '1600', '123456', '小红', '女', '1997-05-04', '18766668888', '教秘', NULL);
INSERT INTO `users` VALUES (2, '16003', '123457', '小雪', '男', '1996-05-04', '18988888888', '教研', '计算机科学与技术');
INSERT INTO `users` VALUES (3, '1600201', '123456', '小明', '男', '1995-04-03', '14755556666', '教师', '计算机科学与技术');
INSERT INTO `users` VALUES (4, '1600202', '123456', '小英', '女', '1997-02-06', '12344446666', '教师', '软件工程');
INSERT INTO `users` VALUES (5, '1600203', '123456', '小信', '男', '1996-03-05', '14566666666', '教师', '信息安全');

SET FOREIGN_KEY_CHECKS = 1;
