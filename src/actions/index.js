import ActionType from "./ActionType";

export function changeSelectedKeyword({ keyword }) {
  return {
    type: ActionType.CHANGE_SELECTED_KEYWORD,
    keyword
  };
}