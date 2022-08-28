import { useEffect, useState } from "react";
import { TURNOFF_SECTION, TURNON_SECTION } from "./types";

export function tempTurnOff(dataToSubmit) {
  //일시적으로 특정섹션을 끔

  return {
    type: TURNOFF_SECTION,
    value: dataToSubmit,
  };
}

export function tempTurnOn(dataToSubmit) {
  return {
    type: TURNON_SECTION,
    value: dataToSubmit,
  };
}
