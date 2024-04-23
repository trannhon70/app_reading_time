/* eslint-disable @typescript-eslint/no-unused-vars */
import moment from "moment";
import { Dimensions } from "react-native";

export const clsx = (styles: object, customs: Record<string, boolean>) => {
  const stylesCustom = Object.entries(customs)
    .filter(([_, value]) => value)
    .reduce((contain, item) => {
      const style = JSON.parse(item[0]);
      return { ...contain, ...style };
    }, {});
  return { ...styles, ...stylesCustom };
};

const { width, height } = Dimensions.get("window");
export const SCREEN_WIDTH = width < height ? width : height;
export const SCREEN_HEIGHT = width < height ? height : width;

const getDivByWidth = (SCREEN_WIDTH: number) => {
  if (SCREEN_WIDTH < 768) {
    return 800;
  } else {
    if (SCREEN_WIDTH > 768 && SCREEN_WIDTH <= 1366) {
      return 1000;
    }
    return 2000;
  }
};
export const scalePoint = (num: number) => {
  const { width, height } = Dimensions.get("window");
  const SCREEN_WIDTH = width < height ? width : height;
  const SCREEN_HEIGHT = width < height ? height : width;
  return (SCREEN_HEIGHT / getDivByWidth(SCREEN_WIDTH)) * num;
};
export const formatTimeWithAmPm = (time: any) => {
  const formattedTime = moment(time).format("h:mm A"); // 'A' sẽ hiển thị chuỗi 'AM' hoặc 'PM'
  return formattedTime;
};
