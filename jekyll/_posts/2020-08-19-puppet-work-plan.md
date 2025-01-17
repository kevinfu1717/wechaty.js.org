---
title: "暑期2020 基于开放 API 封装 Wechaty 接口下的企业微信聊天机器人 计划书"
author: sapio-s
categories: project
image: /assets/2020/work-puppet/pic.jpg
tags:
  - summer-of-wechaty
  - summer-2020
  - wecom
  - ecosystem
---

本项目计划针对企业微信平台开发一个puppet，让 Wechaty 开发者可以仅仅通过改变一个变量，就能够切换使用企业微信的功能。

## 暑期2020 基于开放 API 封装 Wechaty 接口下的企业微信聊天机器人 计划书

## 暑期2020

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。
官网：<https://isrc.iscas.ac.cn/summer2020> 官方新闻：<http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html>
本项目 [基于开放 API 封装 Wechaty 接口下的企业微信聊天机器人] 系 暑期2020 支持的开源项目。

## [基于开放 API 封装 Wechaty 接口下的企业微信聊天机器人]具体计划

- 导师：高原
- 学生：谢昱清
- 模块列表
  - 设计配置参数
  - 接入企业微信会话存档接口读取消息
    - 实现 puppet 上各个类型的消息接口
    - 定时读取消息，并在读取消息之后触发消息事件
    - 企业微信会话存档 puppet 的使用文档
- 计划安排：
  - 准备工作
    - 2020.7.1 - 2020.7.19
      - 掌握相关技术栈（typescript等），了解puppet构造。
      - 与企业微信建立连接，完成node.js到企业微信的信息通路
    - 2020.7.20 - 2020.8.5
      - 包括对话的加密解密，相关环境配置，node.js与微信SDK的交互。完成node.js进行企业微信消息拉取的demo。
      - 注：原计划于2020.7.26完成，但是由于对预期成果理解有误，进展方向出现了偏差，延期一星期。
      - 实现 puppet 上各个类型的消息接口
    - 2020.8.6 - 2020.8.30
      - 正式开发puppet。完成状态函数，消息的读取及消息的存储等内容。可能需要拓展原本puppet的数据结构。其中第一周完成逻辑设计及基本的消息拉取。
      - 注：企业微信puppet仅负责拉取消息，不必完成完整的交互过程，因此可能需要单独设计对应的bot进行测试。
      - 定时读取消息，并在读取消息之后触发消息事件
    - 2020.8.31 - 2020.9.13
      - 完成企业微信puppet的所有所需功能，进行收尾工作。
      - 企业微信会话存档 puppet 的使用文档
    - 2020.9.14 - 2020.9.20
      - 在原有的文档上，增加企业微信puppet相关的内容。
- 项目链接：<https://github.com/Sapio-S/wechaty-puppet-official/>
- 联系方式：1205402283@mail.qq.com
