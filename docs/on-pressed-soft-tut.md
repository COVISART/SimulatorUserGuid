---
id: on-pressed-soft-tut
title: Software Tutorial
sidebar_label: Software Tutorial
---

`tutorial`

## Description

On this tutorial, you will learn how to start simulator step by step. If you make any mistake, do not worry, system will handle it and show warning about it, you have no chance to broke software :)

## Requirments
 * Covisart Simulator Service - controls motion system and simulation software.
 * Covisart Simulator Web UI - Easy system management UI(web based, normaly running on 9082 port)
 * Covisart Rest API Service - provide communication between service and Web UI
## Prepare Services
First, be sure Covisart Simulator and Rest API Service is running. You can check it on Task Manager. If they stopped, you have to manualy start, just go to over of service and right click of mouse, press Start, do it for both of them.

![arduino_Library_manager](https://raw.githubusercontent.com/COVISART/SimulatorUserGuid/master/static/img/servcice.png)

## Configuration of weight and joysticks

If all services started well, go to [localhost:9082](http://localhost:9082) on default browser. You will see seat configuration page if system connected to service, you will see green LED on right corner of page. This page is seat area  configuration page, you can pass or configure seat and joyscticks here, do not worry, you can configure it late if needs. You must know that configuration of seat is **not** for comfort of user, it is for balancing weight distribution over motion system. You have to configure seat to your weight. Press + or - to to match your weight to system, UI will show weight with digital numbers on screen.

![arduino_Library_manager](https://raw.githubusercontent.com/COVISART/SimulatorUserGuid/master/static/img/seat.png)

## Platform Choice

Press Accept after configuration completed. You will Platform choice page, on this page will see games that can connect motion system, you can check  [Games](games) page to learn more about integrated games.

```cpp

```

## Examples

Please refer to the [Pressed For Duration](pressed-for-duration-example) example included in this documentation.
