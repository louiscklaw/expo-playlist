import React from "react";
import { ImageBackground } from "react-native";

export const Screen1 = () => (
  <ImageBackground
    source={require("./screen1.png")}
    resizeMode={"cover"}
    style={{ width: 390, height: 850 }}
  />
);

export const Screen2 = () => (
  <ImageBackground
    source={require("./screen2.png")}
    resizeMode={"cover"}
    style={{ width: 390, height: 850 }}
  />
);

export const Screen3 = () => (
  <ImageBackground
    source={require("./screen3.png")}
    resizeMode={"cover"}
    style={{ width: 390, height: 850 }}
  />
);
