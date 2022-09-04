import { TURNOFF_MENUBAR } from "./types";

/** 특정 섹션을 끄고 킨다.
 * @param true 메뉴바를 끈다.
 * @param false 메뉴바를 킨다.
 * @Detail 현재는 redux상태값이 새로고침하면 초기화 되므로 menu의 on은 따로 설정 안함.
 */
export function MenuTurnOff(dataToSubmit) {
  return {
    type: TURNOFF_MENUBAR,
    value: dataToSubmit,
  };
}
