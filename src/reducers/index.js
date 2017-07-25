import { combineReducers } from 'redux';
import {Constants} from './../constants/constants';

const defaultState = {
  teamData: Constants.data,
  modalVisibility: false,
};

const LendingKartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'VALUE_CHANGED':
      return Object.assign({}, state, {
        [action.property]: action.value,
      });
    case 'TEAM_SELECTED':
      return Object.assign({}, state, {
        selectedTeam: action.selectedTeam,
      });
    case 'EMPLOYEE_SELECT':
      return Object.assign({}, state, {
        selectedEmployee: action.selectedEmployee,
      });
    case 'ON_CHECKED_CHANGE':
      return Object.assign({}, state, {
        isChecked: !action.isChecked,
      });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        modalVisibility: false,
      });
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        modalVisibility: true,
        selectedEmployee: null,
        selectedTeam: {},
        teamName: '',
        employeeName: '',
      });
    default:
      return state;
  }
};

export default combineReducers({
  LendingKartReducer,
});
