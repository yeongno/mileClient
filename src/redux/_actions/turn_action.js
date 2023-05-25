import { TURNMENU, TURNOFF_MENUBAR, TURNOFF_SEARCH } from "./types";

/** 특정 섹션을 끄고 킨다.
 * @type {boolean}
 * @param true 메뉴바를 끈다.
 * @param false 메뉴바를 킨다.
 * @Detail 현재 off는 로그인페이지에서 하고 on은 메인페이지에서 하는 중
 * @return {turnoff: action.value}
 * @define const TurnOff = useSelector((state)=>state.turn.turnOffMenu)
 */
export function MenuTurnOff(dataToSubmit) {
  return {
    type: TURNOFF_MENUBAR,
    value: dataToSubmit,
  };
}
/** 특정 섹션을 끄고 킨다.
 * @type {boolean}
 * @param true 검색영역을 끈다.
 * @param false 검색영역을 킨다.
 * @Detail 현재는 MainPage일 시에는 false로 설정고 communitypPage로 갈 시 해당 페이지에서 true로 값 변경
 * @return {turnoff: action.value}
 * @define const TurnOff = useSelector((state)=>state.turn.turnOffSearch)
 */
export function SearchTurnOff(dataToSubmit) {
  return {
    type: TURNOFF_SEARCH,
    value: dataToSubmit,
  };
}

/**
 * 메뉴 바꾸기 MAIN_MENU, MAP_MENU, COMMUNITY_MENU, TEST_MAP, INTERESTED_MAP
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnMenu(dataToSubmit) {
  return {
    type: TURNMENU,
    value: dataToSubmit,
  };
}
