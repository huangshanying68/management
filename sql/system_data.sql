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

 Date: 09/06/2020 14:41:29
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
INSERT INTO `announcement` VALUES (3, 'vff', 'cd', 'cds');

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
INSERT INTO `course` VALUES ('1', '大英1', '基础必修', '计算机科学与技术', '2017-2018', '14周', '计算机科学与技术、软件工程');
INSERT INTO `course` VALUES ('2', '大英2', '基础必修', '计算机科学与技术', '2017-2018', '14周', '计算机科学与技术、软件工程');
INSERT INTO `course` VALUES ('4', '大物1', '基础必修', '软件工程', '2017-2018', '13周', '软件工程、计算机科学与技术');
INSERT INTO `course` VALUES ('6', 'javaee', '限选', '软件工程', '2017-2018', '10周', '软件工程、计算机科学与技术');
INSERT INTO `course` VALUES ('7', 'net', '任选', '软件工程', '2016-2017', '12周', '软件工程、计算机科学与技术');
INSERT INTO `course` VALUES ('9', '高数1', '基础必修', '计算机科学与技术', '2016-2017', '12周', '计算机科学与技术、软件工程');

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
INSERT INTO `scourse` VALUES ('10', '大英4', '基础必修', '计算机科学与技术', '2017-2018', '12周', '计算机科学与技术', '2016级');
INSERT INTO `scourse` VALUES ('11', '高数2', '基础必修', '信息安全', '2017-2018', '10周', '信息安全', '2016级');
INSERT INTO `scourse` VALUES ('3', '大英1', '基础必修', '软件工程', '2017-2018', '14周', '软件工程、计算机科学与技术、信息安全', '2016将');

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
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tchcourse
-- ----------------------------
INSERT INTO `tchcourse` VALUES (51, '16001', '小计', '计算机科学与技术', '高数1', '9', '计算机科学与技术、软件工程', '计算机科学与技术', '2020-06-09 09:23:48', '2016-2017');
INSERT INTO `tchcourse` VALUES (54, '1600102', '小程', '软件工程', 'javaee', '6', '软件工程、计算机科学与技术', '软件工程', '2020-06-09 09:47:29', '2017-2018');
INSERT INTO `tchcourse` VALUES (57, '1600101', '小信', '信息安全', '高数1', '9', '计算机科学与技术、软件工程', '计算机科学与技术', '2020-06-09 10:52:03', '2016-2017');
INSERT INTO `tchcourse` VALUES (60, '1600101', '小信', '信息安全', 'net', '7', '软件工程、计算机科学与技术', '软件工程', '2020-06-09 10:52:33', '2016-2017');
INSERT INTO `tchcourse` VALUES (62, '1600102', '小程', '软件工程', '高数1', '9', '计算机科学与技术、软件工程', '计算机科学与技术', '2020-06-09 10:55:40', '2016-2017');
INSERT INTO `tchcourse` VALUES (63, '1600102', '小程', '软件工程', 'net', '7', '软件工程、计算机科学与技术', '软件工程', '2020-06-09 10:55:52', '2016-2017');
INSERT INTO `tchcourse` VALUES (64, '1600101', '小信', '信息安全', 'javaee', '6', '软件工程、计算机科学与技术', '软件工程', '2020-06-09 10:56:17', '2017-2018');
INSERT INTO `tchcourse` VALUES (65, '1600101', '小信', '信息安全', '大物1', '4', '软件工程、计算机科学与技术', '软件工程', '2020-06-09 10:56:19', '2017-2018');
INSERT INTO `tchcourse` VALUES (66, '1600101', '小信', '信息安全', '大英1', '1', '计算机科学与技术、软件工程', '计算机科学与技术', '2020-06-09 10:56:21', '2017-2018');

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
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tcresult
-- ----------------------------
INSERT INTO `tcresult` VALUES (20, '大英2', '2', '计算机科学与技术、软件工程', '16001', '小计', '计算机科学与技术', 43, '2017-2018', '计算机科学与技术');
INSERT INTO `tcresult` VALUES (22, '大英2', '2', '计算机科学与技术、软件工程', '1600102', '小程', '软件工程', 46, '2017-2018', '计算机科学与技术');
INSERT INTO `tcresult` VALUES (23, '高数1', '9', '计算机科学与技术、软件工程', '1600101', '小信', '信息安全', 57, '2016-2017', '计算机科学与技术');
INSERT INTO `tcresult` VALUES (24, 'net', '7', '软件工程、计算机科学与技术', '1600101', '小信', '信息安全', 60, '2016-2017', '软件工程');

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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of temessage
-- ----------------------------
INSERT INTO `temessage` VALUES (10, '16001', '小计', '2', '大英2', '是');
INSERT INTO `temessage` VALUES (11, '1600102', '小程', '2', '大英2', '是');

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
INSERT INTO `users` VALUES (2, '16001', '123456', '小计', '男', '1993-03-02', '18222222222', '教师', '计算机科学与技术');
INSERT INTO `users` VALUES (3, '16002', '123456', '小妍', '女', '1992-03-01', '18566663333', '教研', '计算机科学与技术');
INSERT INTO `users` VALUES (4, '16003', '123456', '小院', '男', '1991-06-04', '18633338888', '院务', NULL);
INSERT INTO `users` VALUES (5, '1600101', '123456', '小信', '男', '1992-03-14', '18066669999', '教师', '信息安全');
INSERT INTO `users` VALUES (6, '1600102', '123456', '小程', '女', '1993-05-19', '18366666666', '教师', '软件工程');
INSERT INTO `users` VALUES (7, '1600202', '123456', '小妍程', '女', '1997-06-08', '18999999999', '教研', '软件工程');
INSERT INTO `users` VALUES (8, '1600203', '123456', '小信研', '男', '1993-05-03', '13255555555', '教研', '信息安全');

SET FOREIGN_KEY_CHECKS = 1;
