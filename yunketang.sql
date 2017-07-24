SET NAMES 'utf8';
DROP DATABASE IF EXISTS yunketang;
CREATE DATABASE yunketang CHARSET=UTF8;
USE yunketang;
CREATE TABLE yunketang_users(
    email VARCHAR(64) PRIMARY KEY,
    pwd VARCHAR(64),
    phone VARCHAR(64)
);
INSERT INTO yunketang_users(email,pwd,phone) VALUES('yaoqiang4869@163.com','yao186111.','18611181408');