---
id: on-pressed-soft-tut
title: Software Tutorial
sidebar_label: Software Tutorial
---

`tutorial`

## Description

On this tutorial, you will learn how to start simulator step by step. If you make any mistake, do not worry, system will handle it and show warning about it, you have no chance to broke software :)

## Requirments
First, be sure Covisart Simulate Service is running. You can check it on Task Manager.
![arduino_Library_manager](https://covisart.github.io/SimulatorUserGuid/img/arduino_library_manager.gif)

```cpp
int duration = 2000;

button.onPressedFor(duration, onPressedCallback);
```
## External interrupts

When the button is being interfaced with microcontroller through external interrupts and you need to use this feature, method `update` must be called inside `loop` function as shown below.

```cpp
void loop() {
  // update() function must be called repeatedly only if onPressedFor functionality is being used and interrupt is enabled
  button.update();
}
```

## Examples

Please refer to the [Pressed For Duration](pressed-for-duration-example) example included in this documentation.
