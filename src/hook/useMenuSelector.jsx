import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnMenu } from "../redux/_actions/turn_action";
const useMenuSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu1 = useSelector((state) => state?.turn?.turnMenu);
  const [menu, setInit] = useState(menu1)
  useEffect(() => {
    // executeMenu("MAIN_MENU");
    if(menu==undefined){
        setInit("MAIN_MENU");
    }
  }, []);
  useEffect(() => {
    executeMenu(menu);
  }, [menu]);
  useEffect(() => {
    setInit(menu1);
  }, [menu1])
  
  const MenuValue = {
    //맵 페이지
    MAP_MENU() {
    //   navigate("/mapPage");
    },
    //메인 페이지
    MAIN_MENU() {
      navigate("/mainPage");
    },

    //커뮤니티 페이지
    COMMUNITY_MENU() {
        console.log("abc")
      //MenuBar를 클릭 시 디포트 페이지인 main포럼으로 이동 할 수 있게 설정
      navigate("/community/whole");

    },
    //커뮤니티 기본 픽 페이지
    SETCOMMUNITY_MENU() {
      //클릭 하였을 때는 COMMUNITY_MAIN() 실행
      //기본 마운트 dispatch코드로 해당 빈 코드 실행
      //pageLabel은 turnMenu를 기반으로 나오기 때문 새로고침 시 필요함
    },
        //커뮤니티 페이지
        DIVISION_MENU() {
            console.log("abc")
          //MenuBar를 클릭 시 디포트 페이지인 main포럼으로 이동 할 수 있게 설정
          navigate("/community/division");

        },
    //Test 페이지
    TEST_MENU() {
      //우선 기본 페이지가 올 수 있게 설정
      navigate("/test");
    },
  };

  //해당 맵 스위치 코드
  const executeMenu = (MenuType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (menu) MenuValue[MenuType]();
  };

  return menu;
};
export default useMenuSelector;
