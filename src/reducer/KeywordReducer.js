import ActionType from "../actions/ActionType";

const keywordState = {
  selectedKeyword: null
};

const KeywordReducer = (state = keywordState, action) => {
  switch (action.type) {
  case ActionType.CHANGE_SELECTED_KEYWORD:
    return {
      ...state,
      selectedKeyword: action.keyword,
    };
  default:
    return state;
  }
};

export default KeywordReducer;