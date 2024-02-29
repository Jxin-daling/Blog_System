-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2024-02-29 16:05:17
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `blogsystem_database`
--

-- --------------------------------------------------------

--
-- 表的结构 `articlestate`
--

CREATE TABLE `articlestate` (
  `aid` int(255) NOT NULL,
  `title` varchar(255) COLLATE utf8_bin NOT NULL,
  `content` longtext COLLATE utf8_bin NOT NULL,
  `cid` int(255) NOT NULL,
  `bannerimgurl` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `articlestate`
--

INSERT INTO `articlestate` (`aid`, `title`, `content`, `cid`, `bannerimgurl`, `create_time`, `category`) VALUES
(1, '二次元美图分享', '<p><span style=\"color: #e91e63\">动漫</span><span style=\"color: #2196f3\">图片</span><span style=\"color: #3f51b5\">分享</span></p>', 1, '/images/90d5fdd8f4365a22adb7e6901.jpg', '2024-02-29 07:27:13', '动漫图片'),
(2, '二次元美图分享', '<h1><span style=\"color: rgb(233, 30, 99)\">二次元美</span><span style=\"color: rgb(33, 150, 243)\">图</span><span style=\"color: rgb(63, 81, 181)\">分享</span></h1>', 1, '/images/90d5fdd8f4365a22adb7e6902.jpg', '2024-02-29 07:32:59', '动漫图片'),
(3, '二次元美图分享', '<h1><span style=\"color: rgb(233, 30, 99)\">二次元美</span><span style=\"color: rgb(33, 150, 243)\">图</span><span style=\"color: rgb(63, 81, 181)\">分享</span></h1>', 1, '/images/90d5fdd8f4365a22adb7e6903.jpg', '2024-02-29 07:33:02', '动漫图片'),
(5, '个人博客（日记）网站完成', '<h3><strong><u><span style=\"color: rgb(233, 30, 99)\">就在今日！，本博客完工......1.0版本，当然，后续会有更多功能加入</span></u></strong></h3><h5><span style=\"color: rgb(33, 150, 243)\">本博客使用了vue3作为前端，node作为后端实现前后端分离</span></h5><h5><span style=\"color: rgb(139, 195, 74)\">使用了pinia做状态管理，使用mysql作为数据库连接</span></h5><h5><span style=\"color: rgb(0, 150, 136)\">使用axios封装和连接后端接口，使用npm</span><strong><span style=\"color: rgb(0, 150, 136)\">包formidable来接受图片上传</span></strong></h5><h5><strong><span style=\"color: rgb(205, 220, 57)\">历时共九天，但也离不开之前长时间的补课，那么，就暂时告一段落喽</span></strong></h5><h4>项目地址(github):https://github.com/Jxin-daling/Blog_System</h4>', 2, '/images/90d5fdd8f4365a22adb7e6907.png', '2024-02-29 07:57:14', '学习日记');

-- --------------------------------------------------------

--
-- 表的结构 `categorystate`
--

CREATE TABLE `categorystate` (
  `cid` int(255) NOT NULL,
  `categoryname` varchar(255) COLLATE utf8_bin NOT NULL,
  `imgurl` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `aclcount` int(255) NOT NULL DEFAULT '0',
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `categorystate`
--

INSERT INTO `categorystate` (`cid`, `categoryname`, `imgurl`, `aclcount`, `create_time`) VALUES
(1, '动漫图片', '/images/90d5fdd8f4365a22adb7e6900.jpg', 3, '2024-02-29 07:25:47.715443'),
(2, '学习日记', '/images/90d5fdd8f4365a22adb7e6905.jpg', 1, '2024-02-29 07:42:05.853808');

-- --------------------------------------------------------

--
-- 表的结构 `gallerystate`
--

CREATE TABLE `gallerystate` (
  `pid` int(255) NOT NULL,
  `imgname` varchar(255) COLLATE utf8_bin NOT NULL,
  `imgurl` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `gallerystate`
--

INSERT INTO `gallerystate` (`pid`, `imgname`, `imgurl`, `create_time`) VALUES
(1, '02', '/images/231dc0735dbff438cdbf8bd00.jpg', '2024-02-29 07:14:24.786560'),
(2, '岛风', '/images/231dc0735dbff438cdbf8bd01.jpg', '2024-02-29 07:15:32.128231'),
(3, 'boki', '/images/231dc0735dbff438cdbf8bd02.png', '2024-02-29 07:16:04.553990'),
(4, 'nep', '/images/231dc0735dbff438cdbf8bd03.png', '2024-02-29 07:18:20.410054'),
(5, '花园', '/images/90d5fdd8f4365a22adb7e6904.jpg', '2024-02-29 07:33:37.475644');

-- --------------------------------------------------------

--
-- 表的结构 `msreplystate`
--

CREATE TABLE `msreplystate` (
  `mpid` int(255) NOT NULL,
  `admin` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '管理员',
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mvid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `msreplystate`
--

INSERT INTO `msreplystate` (`mpid`, `admin`, `content`, `create_time`, `mvid`) VALUES
(1, '管理员', '你来啦', '2024-02-29 07:20:38', 1),
(2, '管理员', '你也来啦', '2024-02-29 07:21:28', 2);

-- --------------------------------------------------------

--
-- 表的结构 `msvisitorstate`
--

CREATE TABLE `msvisitorstate` (
  `mvid` int(255) NOT NULL,
  `visitorname` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '匿名用户',
  `content` varchar(255) COLLATE utf8_bin NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `msvisitorstate`
--

INSERT INTO `msvisitorstate` (`mvid`, `visitorname`, `content`, `create_time`) VALUES
(1, '匿名用户', '我来啦', '2024-02-29 07:20:02'),
(2, '果冻', '我也来啦', '2024-02-29 07:21:17');

--
-- 转储表的索引
--

--
-- 表的索引 `articlestate`
--
ALTER TABLE `articlestate`
  ADD PRIMARY KEY (`aid`);

--
-- 表的索引 `categorystate`
--
ALTER TABLE `categorystate`
  ADD PRIMARY KEY (`cid`);

--
-- 表的索引 `gallerystate`
--
ALTER TABLE `gallerystate`
  ADD PRIMARY KEY (`pid`);

--
-- 表的索引 `msreplystate`
--
ALTER TABLE `msreplystate`
  ADD PRIMARY KEY (`mpid`),
  ADD KEY `mvid` (`mvid`);

--
-- 表的索引 `msvisitorstate`
--
ALTER TABLE `msvisitorstate`
  ADD PRIMARY KEY (`mvid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `articlestate`
--
ALTER TABLE `articlestate`
  MODIFY `aid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `categorystate`
--
ALTER TABLE `categorystate`
  MODIFY `cid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `gallerystate`
--
ALTER TABLE `gallerystate`
  MODIFY `pid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `msreplystate`
--
ALTER TABLE `msreplystate`
  MODIFY `mpid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `msvisitorstate`
--
ALTER TABLE `msvisitorstate`
  MODIFY `mvid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 限制导出的表
--

--
-- 限制表 `msreplystate`
--
ALTER TABLE `msreplystate`
  ADD CONSTRAINT `msreplystate_ibfk_1` FOREIGN KEY (`mvid`) REFERENCES `msvisitorstate` (`mvid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
